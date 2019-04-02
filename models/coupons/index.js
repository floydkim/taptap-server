const insertCoupon = require('./insertCoupon').insertCoupon;
const getAllCoupons = require('./getAllCoupons').getAllCoupons;
const getCouponsCount = require('./getCouponsCount').getCouponsCount;
const getVisitedStores = require('./getVisitedStores').getVisitedStores;

module.exports = {
  getAllCoupons: getAllCoupons,
  insertCoupon: insertCoupon,
  getCouponsCount: getCouponsCount,
  getVisitedStores: getVisitedStores
};
