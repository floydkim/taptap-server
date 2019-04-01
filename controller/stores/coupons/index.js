const insertCoupon = require('./insertCoupon').insertCoupon;
const getAllCoupons = require('./getAllCoupons').getAllCoupons;
const getCouponsCount = require('./getCouponsCount').getCouponsCount;

module.exports = {
  getAllCoupons: getAllCoupons,
  insertCoupon: insertCoupon,
  getCouponsCount: getCouponsCount
};
