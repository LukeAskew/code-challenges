/**
 * Determine if a number is lucky or not - if the sum of the
 * first half is equal to the sum of the second half.
 * @param {Number} n
 * @returns {Boolean}
 */
function isLucky(n) {
  const nums = n.toString().split('');

  const first = nums
    .slice(0, nums.length / 2)
    .reduce((a, c) => a + Number(c), 0);

  const second = nums.slice(nums.length / 2).reduce((a, c) => a + Number(c), 0);

  return first === second;
}

module.exports = isLucky;
