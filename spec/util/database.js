const mysql = require('mysql2');
const config = require('../../config/config.json')['test'];

exports.getDBConnection = () => {
  const database = mysql.createConnection({
    user: config.username,
    password: config.password,
    database: config.database,
    host: config.host,
    port: config.port
  });

  database.connect();

  return database;
};
