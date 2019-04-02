const insertCoupon = require('./insertCoupon').insertCoupon;
const getAllCoupons = require('./getAllCoupons').getAllCoupons;
const getCouponsCount = require('./getCouponsCount').getCouponsCount;
const useCoupons = require('./useCoupons').useCoupons;

module.exports = {
  getAllCoupons: getAllCoupons,
  insertCoupon: insertCoupon,
  getCouponsCount: getCouponsCount,
  useCoupons: useCoupons
};
