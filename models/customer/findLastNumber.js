const { Customers } = require('../../database');
const { Op } = require('sequelize');

exports.findLastNumber = body => {
  return Customers.findAll({
    where: {
      phoneNumber: { [Op.like]: `%${body.phoneNumber}` }
    }
  });
};
