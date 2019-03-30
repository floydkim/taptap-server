const { findLastNumber } = require('../../../models/customer');

exports.findLastNumber = (request, response) => {
  findLastNumber(request.body)
    .then(numbers => {
      response.status(200).json(numbers);
    })
    .catch(error => {
      console.error(error);
      response.sendStatus(500);
    });
};
