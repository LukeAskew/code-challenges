/**
 * Abbreviate a string by replacing the middle with a count of letters
 * @param {String} str
 * @returns {String}
 */
function a10n(str) {
  return str.replace(/([a-z]{4,})/gi, (m, p1) => {
    return `${p1.charAt(0)}${p1.length - 2}${p1.charAt(p1.length - 1)}`;
  });
}

module.exports = a10n;
