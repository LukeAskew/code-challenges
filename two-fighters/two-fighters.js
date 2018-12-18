/**
 * Fighter
 * @class
 */
class Fighter {
  constructor(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
  }
}

/**
 * Determine the winner of a fight between two fighters
 * @param {Object} fighter1
 * @param {Object} fighter2
 * @param {String} firstAttacker
 * @returns {String}
 */
function declareWinner(fighter1, fighter2, firstAttacker) {
  const f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  const f2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);

  if (f1 > f2) {
    return fighter1.name;
  }

  if (f1 < f2) {
    return fighter2.name;
  }

  return firstAttacker;
}

module.exports = {
  Fighter,
  declareWinner,
};
