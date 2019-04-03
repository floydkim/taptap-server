const insertReward = require('./insertReward').insertReward;
const getAllRewards = require('./getAllRewards').getAllRewards;
const getRequired = require('./getRequired').getRequired;

module.exports = {
  getAllRewards: getAllRewards,
  insertReward: insertReward,
  getRequired: getRequired
};
