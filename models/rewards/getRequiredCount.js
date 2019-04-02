const { Rewards } = require('../../database');

exports.getRequiredCount = ({ storeID }) => {
  return Rewards.sync().then(() =>
    Rewards.findOne({
      where: {
        storeID: storeID
      },
      attributes: ['required']
    })
  );
};
