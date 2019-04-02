const { getRequiredCount } = require('./getRequiredCount');
const getAllRewards = require('./getAllRewards').getAllRewards;
const insertReward = require('./insertReward').insertReward;

module.exports = {
  getAllRewards: getAllRewards,
  insertReward: insertReward,
  getRequiredCount: getRequiredCount
};
