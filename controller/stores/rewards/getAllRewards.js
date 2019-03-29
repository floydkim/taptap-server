const getAllRewards = require('../../../models/rewards').getAllRewards;

exports.getAllRewards = (request, response) => {
  getAllRewards().then((rewards) => {
    response.status(200).json(rewards);
  }).catch((error) => {
    console.error(error);
    response.sendStatus(500);
  });
};