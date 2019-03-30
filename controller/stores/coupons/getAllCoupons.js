const getAllCoupons = require('../../../models/coupons').getAllCoupons;

exports.getAllCoupons = (request, response) => {
  getAllCoupons()
    .then(coupons => {
      response.status(200).json(coupons);
    })
    .catch(error => {
      console.error(error);
      response.sendStatus(500);
    });
};
