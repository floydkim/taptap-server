const insertStore = require('../../../models/stores').insertStore;

exports.insertStore = (request, response) => {
  insertStore(request.body).then((store) => {
    response.status(200).json(store);
  }).catch((error) => {
    console.log(error);
    response.sendStatus(500);
  });
};