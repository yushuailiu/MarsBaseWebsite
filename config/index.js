let config = require('~/config/development');
if (process.env.NODE_ENV === 'production') {
  config = require('~/config/production');
}


module.exports = config;