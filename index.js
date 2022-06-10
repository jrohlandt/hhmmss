/**
 * @param {int} milliseconds
 * @returns {string}
 */
function mstohhmmss(milliseconds, includeFractions = false) {
  let seconds = milliseconds / 1000;
  const [sec, dec] = parseFloat(seconds).toFixed(3).split(".");

  let h = 0;
  let m = 0;
  let s = 0;
  let d = sec;

  if (d < 60) {
    // duration is less than one minute
    s = d;
  } else if (d < 3600) {
    // duration is less than one hour
    m = Math.floor(d / 60);
    s = d - m * 60;
  } else {
    h = Math.floor(d / 3600);
    d = d - h * 3600;
    m = Math.floor(d / 60);
    s = d - m * 60;
  }

  const hh = h.toString().padStart(2, "0");
  const mm = m.toString().padStart(2, "0");
  const ss = s.toString().padStart(2, "0");
  const mmm = dec;

  if (includeFractions === true) {
    return `${hh}:${mm}:${ss}.${mmm}`;
  }
  return `${hh}:${mm}:${ss}`;
}

exports.mstohhmmss = mstohhmmss;

/**
 *
 * @param {float | int} seconds
 * @returns {string}
 */
function sectohhmmss(seconds, includeFractions = false) {
  return mstohhmmss(seconds * 1000, includeFractions);
}
exports.sectohhmmss = sectohhmmss;
