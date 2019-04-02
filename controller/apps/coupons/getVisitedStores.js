const { getVisitedStores } = require('../../../models/coupons');

exports.getVisitedStores = (request, response) => {
  getVisitedStores(request.body)
    .then(visitedStores => {
      response.status(200).json(visitedStores[0]);
    })
    .catch(error => {
      console.log(error);
      response.sendStatus(500);
    });
};
