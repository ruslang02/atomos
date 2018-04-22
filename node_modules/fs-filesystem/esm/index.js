import os from 'os';
import child from 'child_process';
import Promise from 'bluebird';
import F from './functional';
import { hasSubstr, stringify } from './utilities';
import linux from './linux';
import macOS from './macOS';
import windows from './windows';
const { identity, ifElse, cond, eqeqeq, tautology, thrower } = F;
const { compose, composeP } = F.R;
child.exec = Promise.promisify(child.exec, { context: child });

// --------------------------------------
// Common Core - Validation
// --------------------------------------

const validateDev = cond(
  {
    c: (dev) => typeof dev === 'function',
    a: identity
  },
  {
    c: (dev) => typeof dev === 'string',
    a: (dev) => (v, k) => hasSubstr(k, dev)
  },
  {
    c: (dev) => dev instanceof RegExp,
    a: (dev) => (v, k) => dev.test(k)
  },
  {
    c: (dev) => typeof dev === 'undefined' || dev === null,
    a: (dev) => tautology
  },
  {
    c: tautology,
    a: (dev) => thrower(
      `fs.filesystem expected first argument 'dev' to be a function, string, regex or undefined/null. ` +
      `Found ${typeof dev === 'object' ? dev.constructor.name : typeof dev} instead.`,
      TypeError
    )
  }
);

const validateCallback = ifElse(
  (cb) => typeof cb === 'function',
  (cb) => cb,
  (cb) => thrower(
    `fs.filesystem expected second argument 'callback' to be instanceof function. ` +
    `Found ${typeof cb === 'object' ? cb.constructor.name : typeof cb} instead.`,
    TypeError
  )
);

const validate = (validateDev, validateCallback) =>
  (dev, callback) => ifElse(
    () => typeof dev === 'function' && !callback,
    () => { return [ tautology, dev ]; },
    () => { return [ validateDev(dev), validateCallback(callback) ]; }
  )();

// --------------------------------------
// Common Core - Main & Export Functions
// --------------------------------------

const execute = (cmd, parser) => (filter, cb, sync = false) => ifElse(
  () => sync,
  (cmd) => compose(parser(filter), stringify, child.execSync)(cmd),
  (cmd) => composeP((v) => cb(null, v), parser(filter), stringify, child.exec)(cmd)
    .catch(cb)
)(cmd);

const filesystem = (macOS, linux, windows, validate, platform) => (dev, callback) => cond(
  {
    c: eqeqeq('darwin'),
    a: () => macOS(...validate(dev, callback)).devices
  },
  {
    c: eqeqeq('linux'),
    a: () => linux(...validate(dev, callback)).devices
  },
  {
    c: eqeqeq('win32'),
    a: () => windows(...validate(dev, callback)).devices
  },
  {
    c: tautology,
    a: (os) => thrower(
      'fs.filesystem : Unsupported OS. fs.filesystem does not support ' +
      `${os} at the moment`
    )
  }
)(platform);

const filesystemSync = (macOS, linux, windows, validateDev, platform) => (dev) => cond(
  {
    c: eqeqeq('darwin'),
    a: () => macOS(validateDev(dev), null, true).devices
  },
  {
    c: eqeqeq('linux'),
    a: () => linux(validateDev(dev), null, true).devices
  },
  {
    c: eqeqeq('win32'),
    a: () => windows(validateDev(dev), null, true).devices
  },
  {
    c: tautology,
    a: (os) => thrower(
      'fs.filesystem : Unsupported OS. fs.filesystem does not support ' +
      `${os} at the moment`
    )
  }
)(platform);



module.exports = filesystem(
  execute(macOS.COMMAND, macOS.parser),
  execute(linux.COMMAND, linux.parser),
  execute(windows.COMMAND, windows.parser),
  validate(validateDev, validateCallback),
  os.platform()
);

filesystem.sync = filesystemSync(
  execute(macOS.COMMAND, macOS.parser),
  execute(linux.COMMAND, linux.parser),
  execute(windows.COMMAND, windows.parser),
  validateDev,
  os.platform()
);
