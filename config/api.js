/**
 * Created by liushuai <ln6265431@163.com> on 2018/7/20.
 *
 */

let config = require('~/config/development');
if (process.env.NODE_ENV === 'production') {
  config = require('~/config/production');
}
let url = config.apiURL;

if (typeof window === 'undefined') {
  url = config.backApiURL
}
let get = 'GET';
let post = 'POST';

module.exports = {
  siteConfig: {
    url: url + '/site/set',
    method: get,
  },
};