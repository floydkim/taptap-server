const { getStoreId } = require('../../../models/stores');

exports.getStoreId = (request, response) => {
  getStoreId(request.body.email)
    .then(storeID => {
      response.status(200).json({ storeID });
    })
    .catch(error => {
      console.error(error);
      response.sendStatus(500);
    });
};
