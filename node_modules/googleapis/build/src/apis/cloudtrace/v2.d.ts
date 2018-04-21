/**
 * Stackdriver Trace API
 *
 * Sends application trace data to Stackdriver Trace for viewing. Trace data is
 * collected for all App Engine applications by default. Trace data from other
 * applications can be provided using this API.
 *
 * @example
 * const google = require('googleapis');
 * const cloudtrace = google.cloudtrace('v2');
 *
 * @namespace cloudtrace
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Cloudtrace
 */
declare function Cloudtrace(options: any): void;
export = Cloudtrace;
