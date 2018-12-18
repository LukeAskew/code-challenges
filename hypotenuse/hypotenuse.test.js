const calculateHypotenuse = require('./hypotenuse');

describe('calculateHypotenuse()', () => {
  it('should calculate the hypotenuse', () => {
    expect(calculateHypotenuse(1, 1)).toEqual(1.414);
    expect(calculateHypotenuse(3, 4)).toEqual(5);
    expect(calculateHypotenuse(9, 9)).toEqual(12.728);
  });

  it('should throw an error if input is not a right triangle', () => {
    expect(() => calculateHypotenuse(-2, 1)).toThrow();
    expect(() => calculateHypotenuse(3, 'two')).toThrow();
    expect(() => calculateHypotenuse()).toThrow();
  });
});
