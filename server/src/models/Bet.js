const { Model } = require('objection');

class Bet extends Model {
  static get tableName() {
    return 'bets';
  }
}

module.exports = {
  Bet,
};