const request = require('supertest');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');
const { getDBConnection } = require('../util/database');

const expect = chai.expect;
chai.use(chaiHttp);

exports.insertCustomer = () => {
  let database;
  beforeEach(done => {
    database = getDBConnection();

    const tableName = 'customers';
    database.query(`truncate ${tableName}`, done);
  });

  afterEach(() => {
    database.end();
  });

  const uri = '/stores/customers/insert-customer';

  it('Add new customer', done => {
    request(app)
      .post(uri)
      .send({
        phoneNumber: '010-0000-0000'
      })
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body[0]).has.all.keys([
          'id',
          'phoneNumber',
          'updatedAt',
          'createdAt'
        ]);
        expect(res.body[1]).to.equal(true);
        expect(res.body[0].phoneNumber).to.equal('010-0000-0000');
        done();
      });
  });
};
