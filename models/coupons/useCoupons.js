const { Coupons } = require('../../database');
const { Op } = require('sequelize');

exports.useCoupons = (idObject, REQUIRED) => {
  // idObject { customerID, storeID }
  // null인것 가장 오래된것부터, REQUIRED 개수만큼 usedDate 칼럼의 값을 null에서 현시각으로 변경한다
  const { customerID, storeID } = idObject;
  return Coupons.update(
    { usedDate: new Date() },
    {
      order: ['createdAt', 'DESC'],
      limit: REQUIRED,
      where: {
        customerID,
        storeID,
        usedDate: null
      }
    }
  );
};
