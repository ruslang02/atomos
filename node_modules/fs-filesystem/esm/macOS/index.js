import {
  COMMAND,
  parseMacOS,
  macOSFS,
  getMacOSBytes,
  getPropsTarget,
  addEmptyDevice,
  addEmptyVolumeToDevice,
  addEmptyNode,
  parseNodeId,
  parseMacOSToProps
} from './macOS';

export default{
  COMMAND,
  parser: parseMacOS(
    getPropsTarget,
    addEmptyNode(addEmptyDevice, addEmptyVolumeToDevice),
    parseNodeId,
    parseMacOSToProps(macOSFS, getMacOSBytes)
  )
};
