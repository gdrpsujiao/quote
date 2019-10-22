import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

import example from './example'


export default new Vuex.Store({
  modules: {
    example,
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
})