import {
  COMMAND,
  parseWindows,
  parseWindowsProps
} from './windows';

export default {
  COMMAND,
  parser: parseWindows(parseWindowsProps)
};
