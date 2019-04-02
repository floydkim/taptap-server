const { getCouponsCount } = require('../../../models/coupons');
const { useCoupons } = require('../../../models/coupons');
const { getRequired } = require('../../../models/rewards');

exports.useCoupons = (request, response) => {
  // request 내용  : { customerID, storeID }
  // response 내용 : { isSuccess: boolean }
  getCouponsCount(request.body) // 사용가능 쿠폰 개수 받아옴
    .then(count => {
      getRequired(request.body) // 목표 개수 REQUIRED 받아옴
        .then(REQUIRED => {
          if (count >= REQUIRED) {
            // 목표 개수 이상 모았다면 쿠폰 사용
            useCoupons(request.body, REQUIRED)
              .then(success => {
                if (success) {
                  response.status(200).json({ isSuccess: true });
                } else {
                  response.status(200).json({ isSuccess: false });
                }
              })
              .catch(error => {
                console.log(error);
                response.sendStatus(500);
              });
          } else {
            // throw new Error('not enough coupons');
            response.status(200).json({ isSuccess: false });
          }
        })
        .catch(error => {
          console.log(error);
          response.sendStatus(500);
        });
    })
    .catch(error => {
      console.error(error);
      response.sendStatus(500);
    });
};
