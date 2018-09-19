/**
 * Created by liushuai <ln6265431@163.com> on 2018/7/20.
 *
 */
var config = {
  apiURL: '/api',
  backApiURL: 'http://127.0.0.1:8082/api',
  host:'http://localhost:3000',
  useProxy: true,
  proxy: {
    host: '127.0.0.1',
    port: 8082
  }
}

module.exports = config;