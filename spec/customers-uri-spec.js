const mysql = require('mysql2');
const request = require('supertest');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const config = require(`${__dirname}/../config/config.json`)['test'];
const expect = chai.expect;
chai.use(chaiHttp);

const agent = chai.request;

describe('Customer URI Spec', () => {
  describe('stores/customers/insert-customer, insert new customer to database', done => {
    let database;
    const uri = '/stores/customers/insert-customer';
    beforeEach(done => {
      database = mysql.createConnection({
        user: config.username,
        password: config.password,
        database: config.database,
        host: config.host,
        port: config.port
      });

      database.connect();

      const tableName = 'customers';

      database.query(`truncate ${tableName}`, done);
    });

    afterEach(() => {
      database.end();
    });

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
  });
});
