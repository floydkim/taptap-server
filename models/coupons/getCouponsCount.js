const { Coupons } = require('../../database');

exports.getCouponsCount = body => {
  return Coupons.findAll({
    where: {
      customerID: body.customerID,
      storeID: body.storeID,
      usedDate: null
    }
  });
};
