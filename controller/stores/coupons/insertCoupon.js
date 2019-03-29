const insertCoupon = require('../../../models/coupons').insertCoupon;

exports.insertCoupon = (request, response) => {
  insertCoupon(request.body).then((coupon) => {
    response.status(200).json(coupon);
  }).catch((error) => {
    console.log(error);
    response.sendStatus(500);
  });
};