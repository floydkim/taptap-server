const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[env];

const Sequelizer = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    port: config.port,
    define: {
      charset: 'utf8mb4',
      dialectOptions: { collate: 'utf8mb4_general_ci' }
    },
    host: config.host,
    dialect: config.dialect,
    timezone: '+9:00',
    logging: env === 'development' ? console.log : () => {}
  }
);

Sequelizer.sync();

const Customers = Sequelizer.define('customers', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  phoneNumber: {
    type: Sequelize.STRING
  }
});

const Stores = Sequelizer.define('stores', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

const Coupons = Sequelizer.define('coupons', {
  customerID: {
    type: Sequelize.INTEGER,
    reference: {
      model: Customers,
      key: 'id'
    }
  },
  storeID: {
    type: Sequelize.INTEGER,
    reference: {
      model: Stores,
      key: 'id'
    }
  },
  usedDate: {
    type: Sequelize.DATE
  }
});

const Rewards = Sequelizer.define('rewards', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  storeID: {
    type: Sequelize.INTEGER,
    reference: {
      model: Stores,
      key: 'id'
    }
  },
  required: {
    type: Sequelize.INTEGER
  }
});

module.exports = {
  Customers,
  Stores,
  Coupons,
  Rewards
};
