#!/usr/bin/env node

var output = {

  /**
   * The executable that was called.
   * @type {String}
   */
  executable: process.argv[0],

  /**
   * The script that was executed
   * @type {String}
   */
  script: process.argv[1],

  /**
   * The number of arguments passed to the executable.
   *
   * This includes the executable and the script arguments as well as the
   * complete list of arguments after the script.
   * @type {Number}
   */
  argCount: process.argv.length,

  /**
   * The number of arguments for the script.
   *
   * This is the total number of arguments excluding the executable and script.
   * @type {Number}
   */
  scriptArgCount: Math.max(0, process.argv.length - 2),

  /**
   * List containing all the arguments received.
   * @type {Array}
   */
  args: process.argv,

  /**
   * List containing the arguments for the script.
   * @type {Array}
   */
  scriptArgs: process.argv.slice(2, process.argv.length - 2)

};

// Write the data to STDOUT
process.stdout.write(JSON.stringify(output));
