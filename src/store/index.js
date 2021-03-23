import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Импортируем модуль

import gitStore from './gitStore'


export default new Vuex.Store({

  modules: {
    gitStore
  },

  state: {
  },
  mutations: {
  },

  actions: {
  },
 
})
