const { Rewards } = require('../../database');

exports.getRequired = idObject => {
  return Rewards.findOne({
    where: {
      storeID: idObject.storeID
    }
  }).get('required');
};
