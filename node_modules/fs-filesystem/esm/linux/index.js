import {
  COMMAND,
  getNodeId,
  createNewDevice as cND,
  createNewVolume as cNV,
  mergeVolumesAndDevicesLinux,
  parselsblkDeviceData,
  parselsblkVolumeData,
  parselsblk,
  parsefdisklDeviceData,
  parsefdisklVolumeData,
  parsefdiskl,
  splitdfTLine,
  parsedfT,
  parseLinux
} from './linux';
import { emptyDevice, emptyVolume } from '../utilities';

const createNewDevice = cND(emptyDevice);
const createNewVolume = cNV(emptyVolume);

export default {
  COMMAND,
  parser: parseLinux(
    mergeVolumesAndDevicesLinux(emptyDevice),
    parselsblk(
      parselsblkDeviceData(createNewDevice),
      parselsblkVolumeData(createNewVolume)
    ),
    parsefdiskl(
      parsefdisklDeviceData(getNodeId, createNewDevice),
      parsefdisklVolumeData(getNodeId, createNewVolume)
    ),
    parsedfT(getNodeId, createNewVolume, splitdfTLine)
  )
};
