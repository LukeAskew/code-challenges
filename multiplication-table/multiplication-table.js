/**
 * Create a multiplication table of a given size
 * @param {Number} size
 * @returns {Array}
 */
function createMultiplicationTable(size) {
  const table = [];

  for (let i = 0; i < size; i +=1) {
   const current = [];

   for (let ii = 0; ii < size; ii +=1) {
     current.push((i + 1) * (ii + 1));
   }

   table.push(current);
  }

  return table;
}

module.exports = createMultiplicationTable;
