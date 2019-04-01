const { Coupons } = require('../../database');

exports.getCouponsCount = body => {
  return Coupons.count({
    where: {
      customerID: body.customerID,
      storeID: body.storeID,
      usedDate: null
    }
  });
};
