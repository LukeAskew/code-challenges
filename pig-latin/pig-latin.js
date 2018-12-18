/**
 * Translate a string to "Pig Latin"
 * @param {String} str
 * @returns {String}
 */
function toPigLatin(str) {
  return str
    .split(' ')
    .map(s => {
      if (s.match(/[?!.]/)) {
        return s;
      }

      const m = s.match(/(\w{1})(\w*)/);

      return m ? `${m[2]}${m[1]}ay` : '';
    })
    .join(' ');
}

module.exports = toPigLatin;
