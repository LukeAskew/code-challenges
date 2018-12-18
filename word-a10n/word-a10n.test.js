const a10n = require('./word-a10n');

describe('a10n()', () => {
  it('should abbreviate single words', () => {
    expect(a10n('internationalization')).toEqual('i18n');
    expect(a10n('accessibility')).toEqual('a11y');
    expect(a10n('elephant-ride')).toEqual('e6t-r2e');
  });

  it('should abbreviate sentences', () => {
    expect(a10n('double-barreled monolithic')).toEqual('d4e-b6d m8c');
    expect(a10n('monolithic sat balloon')).toEqual('m8c sat b5n');
    expect(a10n('mat is sat')).toEqual('mat is sat');
    expect(a10n('doggy sat sat cat balloon is sat')).toEqual('d3y sat sat cat b5n is sat');
  });
});
