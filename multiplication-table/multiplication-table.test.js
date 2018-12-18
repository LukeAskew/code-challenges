const createMultiplicationTable = require('./multiplication-table');

describe('createMultiplicationTable()', () => {
  it('should create a multiplication table', () => {
    expect(createMultiplicationTable(1)).toEqual([[1]]);

    expect(createMultiplicationTable(3)).toEqual([
      [1, 2, 3],
      [2, 4, 6],
      [3, 6, 9]
    ]);

    expect(createMultiplicationTable(5)).toEqual([
      [1, 2, 3, 4, 5],
      [2, 4, 6, 8, 10],
      [3, 6, 9, 12, 15],
      [4, 8, 12, 16, 20],
      [5, 10, 15, 20, 25]
    ]);
  });
});
