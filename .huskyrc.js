const os = require('os');

let command = '';
if (os.type() === 'Windows_NT') {
  command = 'set ';
}

// .huskyrc
module.exports = {
  hooks: {
    'pre-commit': `${command}NODE_ENV=production && lint-staged`
  }
};
