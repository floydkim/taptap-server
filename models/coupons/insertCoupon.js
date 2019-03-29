const {Coupons} = require('../../database');

exports.insertCoupon = (coupon) => {
  return Coupons.create({
    customerID: coupon.customerID,
    storeID: coupon.storeID,
  });
};