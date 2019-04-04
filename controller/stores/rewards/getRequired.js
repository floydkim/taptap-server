const { getRequired } = require('../../../models/rewards');
const { getName } = require('../../../models/stores');

exports.getRequired = (request, response) => {
  getRequired(request.body) // 목표 개수 REQUIRED 받아옴
    .then(requiredCount => {
      getName(request.body)
        .then(name => {
          response
            .status(200)
            .json({ REQUIRED: requiredCount, storeName: name });
        })
        .catch(error => {
          console.log(error);
        });
    })
    .catch(error => {
      console.log(error);
      response.sendStatus(500);
    });
};
