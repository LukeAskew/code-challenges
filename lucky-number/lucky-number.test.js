const isLucky = require('./lucky-number');

describe('isLucky()', () => {
  it('should determine if a number is lucky', () => {
    expect(isLucky(1230)).toEqual(true);
    expect(isLucky(10)).toEqual(false);
    expect(isLucky(999999)).toEqual(true);
    expect(isLucky(261534)).toEqual(false);
    expect(isLucky(1010)).toEqual(true);
    expect(isLucky(11)).toEqual(true);
    expect(isLucky(100000)).toEqual(false);
  });
})
