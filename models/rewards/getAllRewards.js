const { Rewards } = require('../../database');

exports.getAllRewards = () => {
  return Rewards.sync().then(() => Rewards.findAll());
};
