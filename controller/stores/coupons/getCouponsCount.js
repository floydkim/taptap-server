const { getCouponsCount } = require('../../../models/coupons');

exports.getCouponsCount = (request, response) => {
  getCouponsCount(request.body)
    .then(count => {
      response.status(200).json({ count });
    })
    .catch(error => {
      console.error(error);
      response.sendStatus(500);
    });
};
