/**
 * Created by liushuai <ln6265431@163.com> on 2018/7/20.
 *
 */


import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
    siteConfig: {},
  },
  mutations: {
    setSiteConfig(state, siteConfig){
      state.siteConfig = siteConfig;
    },
  }
});

export default store