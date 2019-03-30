const { Coupons } = require('../../database');

exports.getAllCoupons = () => {
  return Coupons.sync().then(() => Coupons.findAll());
};
