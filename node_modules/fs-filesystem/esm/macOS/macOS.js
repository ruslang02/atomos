import F from '../functional';
import { hasSubstr, getYesNo, emptyDevice, emptyVolume } from '../utilities';
const { identity, cond, each, tap, tautology } = F;
const { compose, map, reduce, filter } = F.R;

export const COMMAND = 'diskutil info -all';

export const getMacOSBytes = (str) => parseInt(str.match(/\((\d+) Bytes\)/)[1]);

export const macOSFS = (fs) => {
  switch(fs) {
  case 'ExFAT':
    return 'ExFAT';
  case 'MS-DOS':
    return 'FAT';
  case 'MS-DOS FAT12':
    return 'FAT12';
  case 'MS-DOS FAT16':
    return 'FAT16';
  case 'MS-DOS FAT32':
  case 'fat32':
    return 'FAT32';
  case 'HFS+':
  case 'Case-sensitive HFS+':
  case 'hfsx':
  case 'Case-sensitive Journaled HFS+':
  case 'jhfsx':
  case 'Journaled HFS+':
  case 'jhfs+':
    return 'HFS+';
  case 'Free Space':
  case 'free':
  default:
    return null;
  }
};

/* lower order functions for parseMacOS */

// Tells you whether this is a volume or a device
export const nodeType = (node) => node.space ? 'volume' : 'device';

// Gets target device / volume for parseMacOSToProps
export const getPropsTarget = (acc) => ([devid, id]) => id ? acc.devices[devid].volumes[id] : acc.devices[devid];

// Adds an empty device to accumulator
export const addEmptyDevice = (acc) => (id) => { acc.devices[id] = emptyDevice(); };

// Adds an empty volume to its parent device
export const addEmptyVolumeToDevice = (device) => (id) => {
  device.volumes = device.volumes
    ? device.volumes
    : {};
  device.volumes[id] = emptyVolume();
};

// Adds an empty device / volume based off wether a volume id is provided
export const addEmptyNode = (addEmptyDevice, addEmptyVolumeToDevice) => (acc) =>
  ([devid, id]) => id ? addEmptyVolumeToDevice(acc.devices[devid])(id) : addEmptyDevice(acc)(devid);

// Finds the device id as well as the volume id (where applicable) from the provided input lines
export const parseNodeId = (acc) => (lines) => compose(
  (id) => {
    const devid = Object.keys(acc.devices).find((dev) => id.match(`^${dev}`));
    return devid ? [ devid, id ] : [ id, void 0 ];
  },
  (lines) => lines.find((l) => l.match('Device Identifier')).match(/:\s+(.*)/)[1]
)(lines);

// Maps received line to a property on the node
export const parseMacOSToProps = (macOSFS, getMacOSBytes) => {
  const PROPERTY_MAP = {
    'Device Identifier': {
      target: 'dual',
      key: 'id',
      mapper: (node, value) => { node.id = value; }
    },
    'Device Node': {
      target: 'dual',
      key: 'node',
      mapper: (node, value) => { node.node = value; }
    },
    'Whole': {
      target: 'dual',
      key: 'whole',
      mapper: (node, value) => { node.whole = getYesNo(value); }
    },
    'Part of Whole': {
      target: 'dual',
      key: 'parent',
      mapper: (node, value) => { node.parent = value; }
    },
    'Device / Media Name': {
      target: 'dual',
      key: 'description',
      mapper: (node, value) => { node.description = value; }
    },
    'Volume Name': {
      target: 'dual',
      key: 'name',
      mapper: (node, value) => { node.name = hasSubstr(value, 'Not applicable') ? null : value; }
    },
    'Mounted': {
      target: 'dual',
      key: 'mounted',
      mapper: (node, value) => { node.mounted = !hasSubstr(value, 'Not applicable'); }
    },
    'Mount Point': {
      target: 'dual',
      key: 'mountPoint',
      mapper: (node, value) => { node.mountPoint = hasSubstr(value, 'Not applicable') ? null : value; }
    },
    'File System Personality': {
      target: 'volume',
      key: 'fs',
      mapper: (node, value) => { node.fs = macOSFS(value); }
    },
    'Partition Type': {
      target: 'volume',
      key: 'partitionType',
      mapper: (node, value) => { node.partitionType = value; }
    },
    'Protocol': {
      target: 'device',
      key: 'protocol',
      mapper: (node, value) => { node.protocol = value; }
    },
    'Disk Size': {
      target: 'device',
      key: 'size',
      mapper: (node, value) => { node.size = getMacOSBytes(value); }
    },
    'Total Size': {
      target: 'device',
      key: 'size',
      mapper: (node, value) => { node.size = node.size || getMacOSBytes(value); }
    },
    'Device Block Size': {
      target: 'device',
      key: 'blockSize',
      mapper: (node, value) => { node.blockSize = parseInt(value.match(/\d+/)[0]); }
    },
    'Volume Total Space': {
      target: 'volume',
      key: 'space.total',
      mapper: (node, value) => { node.space.total = getMacOSBytes(value); }
    },
    'Volume Used Space': {
      target: 'volume',
      key: 'space.used',
      mapper: (node, value) => { node.space.used = getMacOSBytes(value); }
    },
    'Volume Available Space': {
      target: 'volume',
      key: 'space.available',
      mapper: (node, value) => {
        node.space.available = getMacOSBytes(value);
        if(node.space.total !== null && node.space.used === null){
          node.space.used = node.space.total - node.space.available;
        }
      }
    },
    'Allocation Block Size': {
      target: 'volume',
      key: 'blockSize',
      mapper: (node, value) => { node.blockSize = parseInt(value.match(/\d+/)[0]); }
    },
    'Read-Only Media': {
      target: 'device',
      key: 'readOnly',
      mapper: (node, value) => { node.readOnly = getYesNo(value); }
    },
    'Read-Only Volume': {
      target: 'dual',
      key: 'readOnly',
      mapper: (node, value) => { node.readOnly = hasSubstr(value, 'Not applicable (not mounted)') ? null : getYesNo(value); }
    },
    'Removable Media': {
      target: 'device',
      key: 'removable',
      mapper: (node, value) => { node.removable = value === 'Fixed'; }
    }
  };

  return (node, key, value) => cond(
    {
      // Property ought to be mapped on current node
      c: ({ node, key }) =>
        PROPERTY_MAP[key] && PROPERTY_MAP[key].target === nodeType(node),
      a: ({ node, key, value }) => {
        if(PROPERTY_MAP[key]) PROPERTY_MAP[key].mapper(node, value);
        return node;
      }
    },
    {
      // Property ought to be mapped on both device and volume
      c: ({ node, key }) =>
        PROPERTY_MAP[key] && PROPERTY_MAP[key].target === 'dual',
      a: ({ node, key, value }) => {
        if(PROPERTY_MAP[key]){
          PROPERTY_MAP[key].mapper(node, value);
          if(node.volumes && node.volumes[node.id]){
            PROPERTY_MAP[key].mapper(node.volumes[node.id], value);
          }
        }
        return node;
      }
    },
    {
      // Property ought to be mapped on volume but current node is a device => dual
      c: ({ node, key }) =>
        PROPERTY_MAP[key] && PROPERTY_MAP[key].target === 'volume' && nodeType(node) === 'device',
      a: ({ node, key, value }) => {
        if(!(node.volumes && node.volumes[node.id])){
          addEmptyVolumeToDevice(node)(node.id);
          each(
            ({ target, key }) => { if(target === 'dual') node.volumes[node.id][key] = node[key]; },
            PROPERTY_MAP
          );
        }
        PROPERTY_MAP[key].mapper(node.volumes[node.id], value);
        return node;
      }
    },
    {
      // Property ought to be mapped on device but current node is a volume
      // or property is not in PROPERTY_MAP
      c: tautology,
      a: ({ node, key, value }) => node
    }
  )({ node, key, value });
};




// Parses output of COMMAND to an object
export const parseMacOS = (getPropsTarget, addEmptyNode, parseNodeId, parseMacOSToProps) =>
  (userFilter) => (output) => compose(
    // Filter devices according to userFilter
    ({ devices }) => ({
      devices: filter(userFilter, devices)
    }),
    // Map devices[devid].volumes object to an array of volumes (to standardize with other OSes)
    (acc) => {
      acc.devices = each(
        (dev, k) => {
          dev.volumes = dev.volumes
            ? Object.keys(dev.volumes).map((k) => dev.volumes[k])
            : [];
        },
        acc.devices
      );
      return acc;
    },
    // reduce input entries to device / volume objects and return accumulator
    reduce(
      (acc, entry) => compose(
        F.K(acc),
        F.S(
          F.C(reduce((target, line) => parseMacOSToProps(target, ...line.split(/:\s+/)))),
          compose(getPropsTarget(acc), tap(addEmptyNode(acc)), parseNodeId(acc))
        ),
        filter(identity),
        map((s) => s.trim()),
        (s) => s.split('\n')
      )(entry),
      { devices: {} }
    ),
    filter((s) => s.trim()),
    (s) => s.split(/\*{10}/) // Split per entry
  )(output);
