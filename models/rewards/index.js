const { getRequiredCount } = require('./getRequiredCount');
const getAllRewards = require('./getAllRewards').getAllRewards;
const insertReward = require('./insertReward').insertReward;
const getRequired = require('./getRequired').getRequired;

module.exports = {
  getAllRewards: getAllRewards,
  insertReward: insertReward,
  getRequiredCount: getRequiredCount,
  getRequired: getRequired
};
