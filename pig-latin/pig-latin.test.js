const toPigLatin = require('./pig-latin');

describe('toPigLatin()', () => {
  it('should convert a statement to Pig Latin', () => {
    expect(toPigLatin('Pig latin is cool')).toEqual('igPay atinlay siay oolcay');
    expect(toPigLatin('This is my string')).toEqual('hisTay siay ymay tringsay');
    expect(toPigLatin('Quis custodiet ipsos custodes ?')).toEqual('uisQay ustodietcay psosiay ustodescay ?');
    expect(toPigLatin('O tempora o mores !')).toEqual('Oay emporatay oay oresmay !');
  });
});
