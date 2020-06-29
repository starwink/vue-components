import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import user from './module/user'
import app from './module/app'
import http from '@/api/shuxi-dict.js'

Vue.use(Vuex)

// const demo={
//     "list":[],
//     "str":'fdsfsd'
// }
export default new Vuex.Store({
  state: {
    //
    dict: []
    // demo
  },
  getters: {
    dict: state => state.dict
  },
  mutations: {
    //
    'dict' (state, dict) {
      state.dict = dict
    }
  },
  actions: {
    getDict ({ commit }) {
      http.dict().then(function (res) {
        window.dict = res.data
        commit('dict', res.data)
      }).catch(function (error) {
        console.log(error)
      })
    }
    //
  },
  modules: {
    user,
    app
  }
})
