const crypto = require('crypto');
const salt = require('../../../config/config')['encryptSalt'];

exports.getEncryptedPassword = password => {
  return crypto
    .createHmac('sha1', salt)
    .update(password)
    .digest('hex');
};
