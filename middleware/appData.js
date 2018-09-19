/**
 * Created by liushuai <ln6265431@163.com> on 2018/7/20.
 *
 */

import request from '~/util/request'

export default function (context, next) {
  Promise.all([
    request.siteConfig({
      client: context.req
    }),
  ]).then(data => {
    let siteConfig = data[0].data;
    context.store.commit('setSiteConfig', siteConfig);
    next()
  }).catch(err => {
    // to system error 500
    console.log(err)
  });
}