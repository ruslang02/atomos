'use strict'

module.exports = {
  fromMs,
  fromS,
  toMs,
  toS
}

const zeroFill = require('zero-fill')

// Time units with their corresponding values in miliseconds
const HOUR = 3600000
const MINUTE = 60000
const SECOND = 1000

const TIME_FORMAT_ERRMSG = 'Time format error'

// =============================================================================
// Export functions
// =============================================================================

function fromMs (ms, format = 'mm:ss') {
  if (typeof ms !== 'number' || Number.isNaN(ms)) {
    throw new Error('NaN error')
  }

  let absMs = Math.abs(ms)

  let negative = (ms < 0)
  let hours = Math.floor(absMs / HOUR)
  let minutes = Math.floor(absMs % HOUR / MINUTE)
  let seconds = Math.floor(absMs % MINUTE / SECOND)
  let miliseconds = Math.floor(absMs % SECOND)

  return formatTime({
    negative, hours, minutes, seconds, miliseconds
  }, format)
}

function fromS (s, format = 'mm:ss') {
  if (typeof s !== 'number' || Number.isNaN(s)) {
    throw new Error('NaN error')
  }

  let ms = s * SECOND

  return fromMs(ms, format)
}

function toMs (time, format = 'mm:ss') {
  let re

  if (['mm:ss', 'mm:ss.sss', 'hh:mm:ss', 'hh:mm:ss.sss'].includes(format)) {
    re = /^(-)?(?:(\d\d+):)?(\d\d):(\d\d)(\.\d+)?$/
  } else if (format === 'hh:mm') {
    re = /^(-)?(\d\d):(\d\d)(?::(\d\d)(?:(\.\d+))?)?$/
  } else {
    throw new Error(TIME_FORMAT_ERRMSG)
  }

  let result = re.exec(time)
  if (!result) throw new Error()

  let negative = result[1] === '-'
  let hours = result[2] | 0
  let minutes = result[3] | 0
  let seconds = result[4] | 0
  let miliseconds = Math.floor(1000 * result[5] | 0)

  if (minutes > 60 || seconds > 60) {
    throw new Error()
  }

  return (negative ? -1 : 1) * (
    hours * HOUR + minutes * MINUTE + seconds * SECOND + miliseconds
  )
}

function toS (time, format = 'mm:ss') {
  let ms = toMs(time, format)
  return Math.floor(ms / SECOND)
}

// =============================================================================
// Utility functions
// =============================================================================

function formatTime (time, format) {
  let showMs
  let showSc
  let showHr

  switch (format.toLowerCase()) {
    case 'hh:mm:ss.sss':
      showMs = true
      showSc = true
      showHr = true
      break
    case 'hh:mm:ss':
      showMs = !(!time.miliseconds)
      showSc = true
      showHr = true
      break
    case 'hh:mm':
      showMs = !(!time.miliseconds)
      showSc = showMs || !(!time.seconds)
      showHr = true
      break
    case 'mm:ss':
      showMs = !(!time.miliseconds)
      showSc = true
      showHr = !(!time.hours)
      break
    case 'mm:ss.sss':
      showMs = true
      showSc = true
      showHr = !(!time.hours)
      break
    default:
      throw new Error(TIME_FORMAT_ERRMSG)
  }

  let hh = zeroFill(2, time.hours)
  let mm = zeroFill(2, time.minutes)
  let ss = zeroFill(2, time.seconds)
  let sss = zeroFill(3, time.miliseconds)

  return (time.negative ? '-' : '') + (showHr ? (
    showMs ? `${hh}:${mm}:${ss}.${sss}` : showSc ? `${hh}:${mm}:${ss}` : `${hh}:${mm}`
  ) : (
    showMs ? `${mm}:${ss}.${sss}` : `${mm}:${ss}`
  ))
}
