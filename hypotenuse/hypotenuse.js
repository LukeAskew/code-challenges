/**
 * Calculate the hypotenuse of a right triangle
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
function calculateHypotenuse(a, b) {
  const inputs = Array.from(arguments).filter(
    arg => Number.isFinite(arg) && arg > 0
  );

  if (inputs.length !== 2) {
    throw new Error('error');
  }

  return Math.round(Math.sqrt(a * a + b * b) * 1000) / 1000;
}

module.exports = calculateHypotenuse;
