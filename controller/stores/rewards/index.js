const insertReward = require('./insertReward').insertReward;
const getAllRewards = require('./getAllRewards').getAllRewards;

module.exports = {
  getAllRewards: getAllRewards,
  insertReward: insertReward
};