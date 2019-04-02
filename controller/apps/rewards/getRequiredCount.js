const { getRequiredCount } = require('../../../models/rewards');

exports.getRequiredCount = (request, response) => {
  getRequiredCount(request.body)
    .then(requiredCount => {
      if (!requiredCount) {
        requiredCount = {
          required: null
        };
      }
      response.status(200).json(requiredCount);
    })
    .catch(error => {
      console.log(error);
      response.sendStatus(500);
    });
};
