const { Fighter, declareWinner } = require('./two-fighters');

describe('declareWinner()', () => {
  it('should handle basic scenarios', () => {
    expect(
      declareWinner(
        new Fighter('Lew', 10, 2),
        new Fighter('Harry', 5, 4),
        'Lew'
      )
    ).toEqual('Lew');

    expect(
      declareWinner(
        new Fighter('Lew', 10, 2),
        new Fighter('Harry', 5, 4),
        'Harry'
      )
    ).toEqual('Harry');

    expect(
      declareWinner(
        new Fighter('Harald', 20, 5),
        new Fighter('Harry', 5, 4),
        'Harry'
      )
    ).toEqual('Harald');

    expect(
      declareWinner(
        new Fighter('Harald', 20, 5),
        new Fighter('Harry', 5, 4),
        'Harald'
      )
    ).toEqual('Harald');

    expect(
      declareWinner(
        new Fighter('Jerry', 30, 3),
        new Fighter('Harald', 20, 5),
        'Jerry'
      )
    ).toEqual('Harald');

    expect(
      declareWinner(
        new Fighter('Jerry', 30, 3),
        new Fighter('Harald', 20, 5),
        'Harald'
      )
    ).toEqual('Harald');
  });

  it('should handle postive damage (negative values)', () => {
    expect(
      declareWinner(
        new Fighter('Jerry', 30, -3),
        new Fighter('Harald', 20, 5),
        'Harald'
      )
    ).toEqual('Jerry');
  });
});
