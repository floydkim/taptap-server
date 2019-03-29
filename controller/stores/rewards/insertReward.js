const {insertReward} = require('../../../models/rewards');

exports.insertReward = (request, response) => {
  insertReward(request.body).then((reward) => {
    response.status(200).json(reward);
  }).catch((error) => {
    console.log(error);
    response.sendStatus(500);
  });
};