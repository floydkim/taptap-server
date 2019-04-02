const { Coupons } = require('../../database');
const { Sequelizer } = require('./../../database');

exports.getVisitedStores = body => {
  return Sequelizer.query(
    `select distinct c.storeID, s.name from coupons c join stores s on c.storeID = s.id and c.customerID = ${
      body.customerID
    } order by c.createdAt desc`
  );
};
