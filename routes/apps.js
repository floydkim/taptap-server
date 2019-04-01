const express = require('express');
const router = express.Router();
const { signinCustomer } = require('../controller/apps');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.post('/customers/signin-customer', signinCustomer);
module.exports = router;
