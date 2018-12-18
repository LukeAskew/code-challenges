/**
 * Find the int that isn't the same type (odd or even) as the rest of the ints
 * @param {Array} ints
 * @returns {Number}
 */
function findOutlier(ints) {
  const o = ints.reduce(
    (acc, curr) => {
      const c = curr % 2 ? 'o' : 'e';
      acc[c] = acc[c].concat(curr);
      return acc;
    },
    { o: [], e: [] }
  );

  return o.o.length === 1 ? o.o[0] : o.e[0];
}

module.exports = findOutlier;
