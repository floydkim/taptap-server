const { insertCustomer } = require('./insert-customer-spec');
const { findLastNumber } = require('./find-last-number-spec');

describe('Customer URI Spec', () => {
  describe('/stores/customers/insert-customer', insertCustomer);
  describe('/stores/customers/find-lst-number', findLastNumber);
});
