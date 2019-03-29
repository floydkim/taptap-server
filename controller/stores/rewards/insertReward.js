const insertRewards = require('../../../models/rewards').insertReward;

exports.insertReward = (request, response) => {
  insertRewards(request.body).then((reward) => {
    response.status(200).json(reward);
  }).catch((error) => {
    console.log(error);
    response.sendStatus(500);
  });
};