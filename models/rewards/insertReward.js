const { Rewards } = require('../../database');

exports.insertReward = rewards => {
  return Rewards.create({
    storeID: rewards.storeID,
    required: rewards.required
  });
};
