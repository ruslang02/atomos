import F from '../functional';
import { lasti, hasSubstr, splitEOL } from '../utilities';
const { constant, ifElse, each } = F;
const { compose, map, reduce, filter } = F.R;

export const COMMAND = 'df -T && ' +
  'echo "" && echo "**********" && echo "" && ' +
  'fdisk -l && ' +
  'echo "" && echo "**********" && echo "" && ' +
  'lsblk -o kname,fstype,mountpoint,label,ro,rm,model,type -P';

export const getNodeId = (node) => lasti(node.split('/').filter((s) => s.trim()));

export const createNewDevice = (emptyDevice) => (id, node = null) => {
  const device = emptyDevice();
  device.id = id;
  device.node = node || `/dev/${id}`;
  device.name = id;
  device.whole = true;
  device.parent = id;
  return device;
};

export const createNewVolume = (emptyVolume) => (id, node = null) => {
  const volume = emptyVolume();
  volume.id = id;
  volume.node = node || `/dev/${id}`;
  volume.name = id;
  volume.parent = id.match(/[a-z]+/)[0];
  return volume;
};

export const mergeVolumesAndDevicesLinux = (emptyDevice) => ({ devices, volumes }) => {
  const vkeys = Object.keys(volumes);
  // Merge volumes to devices
  each((dev, key) => {
    dev.volumes = map(
      compose(
        (volume) => {
          if(dev.volumeBlockSize) volume.blockSize = dev.volumeBlockSize;
          return volume;
        },
        (k) => volumes[k]
      ),
      filter((k) => hasSubstr(k, key), vkeys) // volume keys that belong to current device
    );
  }, devices);
  // Remove the volumeBlockSize property from the devices
  return {
    devices: map(
      (d) => reduce(
        (a, v, k) => {
          if(k !== 'volumeBlockSize') a[k] = v;
          return a;
        },
        emptyDevice()
      )(d),
      devices
    )
  };
};

// Values Example
// ['sdc1', 'vfat', '/media/user/KINGSTON', 'KINGSTON', '0', '1', '', 'part']
/*
 * 0: KNAME
 * 1: FSTYPE
 * 2: MOUNTPOINT
 * 3: LABEL
 * 4: RO
 * 5: RM
 * 6: MODEL
 * 7: TYPE
 */
export const parselsblkDeviceData = (createNewDevice) => (acc) =>
  ([id, fs, mountPoint, label, readOnly, removable, model, _]) => {
    if(!acc.devices[id]){
      acc.devices[id] = createNewDevice(id);
    }
    acc.devices[id].readOnly = !!parseInt(readOnly);
    acc.devices[id].removable = !!parseInt(removable);
    acc.devices[id].description = acc.devices[id].description || label || null;
    return acc;
  };

export const parselsblkVolumeData = (createNewVolume) => (acc) =>
  ([id, fs, mountPoint, label, readOnly, removable, model, _]) => {
    if(!acc.volumes[id]){
      acc.volumes[id] = createNewVolume(id);
    }
    acc.volumes[id].fs = fs || null;
    acc.volumes[id].mounted = !!mountPoint;
    acc.volumes[id].mountPoint = mountPoint || null;
    acc.volumes[id].readOnly = !!parseInt(readOnly);
    acc.volumes[id].removable = !!parseInt(removable);
    acc.volumes[id].description = acc.volumes[id].description || label || null;
    return acc;
  };

export const parselsblk = (parselsblkDeviceData, parselsblkVolumeData) =>
  (lsblk) => (acc) => compose(
    constant(acc),
    each(
      compose(
        ifElse(
          (values) => values[values.length - 1] === 'disk',
          parselsblkDeviceData(acc),
          parselsblkVolumeData(acc)
        ),
        (line) => map(
          (field) => field.replace(/"/g, '').split('=')[1],
          line.match(/([A-Z]+="[^"]*")+/g)
        )
      )
    ),
    filter((s) => s.trim()), // remove empty lines
    splitEOL
  )(lsblk);

export const parsefdisklDeviceData = (getNodeId, createNewDevice) => (acc) => ([head, ...tail]) => {
  const [node, size, blocks] = head.match(/Disk\s(.*):\s.*,\s(\d+)\sbytes,\s(\d+) sectors/).slice(1);
  const id = getNodeId(node);
  if(!acc.devices[id]){
    acc.devices[id] = createNewDevice(id, node);
  }
  acc.devices[id].blocks = parseInt(blocks);
  acc.devices[id].size = parseInt(size);
  each(
    ifElse(
      (line) => line.match(/Sector.*:\s\d+\sbytes/),
      (line) => {
        const [logical, physical] = line.match(/(\d+)\s.*\s(\d+)\s/).slice(1);
        acc.devices[id].blockSize = parseInt(physical);
        acc.devices[id].volumeBlockSize = parseInt(logical);
      },
      () => {}
    ),
    tail
  );
  return acc;
};

export const parsefdisklVolumeData = (getNodeId, createNewVolume) => (acc) => reduce(
  (acc, l) => compose(
    ([node, sectors, description]) => {
      const id = getNodeId(node);
      if(!acc.volumes[id]){
        acc.volumes[id] = createNewVolume(id, node);
      }
      acc.volumes[id].blocks = parseInt(sectors);
      acc.volumes[id].description = description;
      return acc;
    },
    (l) => l.match(/([\w\\/]+)\s+.*\s(\d+)\s+[\w.]+\s(.*)/).slice(1),
  )(l),
  acc
);

export const parsefdiskl = (parsefdisklDeviceData, parsefdisklVolumeData) =>
  (fdiskl) => (acc) => compose(
    (blocks) => blocks.reduce((a, block, i) => ifElse(
      () => (i + 1) % 2,
      () => compose(
        parsefdisklDeviceData(a),
        (arr) => arr.filter((s) => s.trim()),
        splitEOL
      )(block),
      () => compose(
        parsefdisklVolumeData(a),
        (arr) => arr.filter((s) => s.trim()),
        (arr) => arr.splice(1),
        splitEOL
      )(block)
    )(), acc),
    filter((s) => s.trim()), // remove empty lines
    splitEOL(2) // split into disk and volumes
  )(fdiskl);

// split by space, except if space is preceeded by \ (paths with spaces)
// This is used instead of a negative lookbehind (`(?<!\\)\s+`)
export const splitdfTLine = (line) =>
  line.split(/\s+/).filter((s) => s.trim()).reduce((a, field) => {
    if(lasti(a) && lasti(lasti(a)) === '\\') a[a.length - 1] += ` ${field}`;
    else a.push(field);
    return a;
  }, []);

export const parsedfT = (getNodeId, createNewVolume, splitdfTLine) => (dft) => (acc) => compose(
  reduce(
    (acc, line) => compose(
      ([ node, filesystem, size, used, available, _, mountPoint ]) => {
        const id = getNodeId(node);
        acc.volumes[id] = createNewVolume(id, node);
        acc.volumes[id].mounted = true;
        acc.volumes[id].mountPoint = mountPoint;
        acc.volumes[id].fs = filesystem === 'vfat' ? 'FAT32' : filesystem;
        acc.volumes[id].space.total = parseInt(size) * 1024;
        acc.volumes[id].space.available = parseInt(available) * 1024;
        acc.volumes[id].space.used = parseInt(used) * 1024;
        return acc;
      },
      splitdfTLine
    )(line),
    acc
  ),
  (a) => a.slice(1), // remove table header
  filter((s) => s.trim() && !hasSubstr(s, 'tmpfs')), // remove empty lines & tmp file systems
  splitEOL
)(dft);

export const parseLinux = (mergeVolumesAndDevicesLinux, parselsblk, parsefdiskl, parsedfT) =>
  (userFilter) => (output) => compose(
    ({ devices }) => ({
      devices: filter(userFilter, devices)
    }),
    ([dft, fdiskl, lsblk]) => compose(
      mergeVolumesAndDevicesLinux,
      parselsblk(lsblk),
      parsefdiskl(fdiskl),
      parsedfT(dft)
    )({ devices: {}, volumes: {} }),
    (s) => s.split(/\n\*+\n\n/) // Split utilities
  )(output);
