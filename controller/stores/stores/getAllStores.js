const getAllStores = require('../../../models/stores').getAllStores;

exports.getAllStores = (request, response) => {
  getAllStores().then((stores) => {
    response.status(200).json(stores);
  }).catch((error) => {
    console.error(error);
    response.sendStatus(500);
  });
};