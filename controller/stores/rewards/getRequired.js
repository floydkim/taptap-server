const { getRequired } = require('../../../models/rewards');

exports.getRequired = (request, response) => {
  getRequired(request.body) // 목표 개수 REQUIRED 받아옴
    .then(requiredCount => {
      response.status(200).json({ REQUIRED: requiredCount });
    })
    .catch(error => {
      console.log(error);
      response.sendStatus(500);
    });
};
