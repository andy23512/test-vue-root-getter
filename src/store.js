import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleT = {
  namespaced: true,
  getters: {
    getGreeting: (state, getters, rootState, rootGetters) => number => 'Hello ' + rootGetters.getName + '!' + 'x' + number
  }
}

export default new Vuex.Store({
  state: {
    firstName: 'Nanoha',
    lastName: 'Takamachi'
  },
  getters: {
    getName(state) {
      return state.firstName + ' ' + state.lastName
    }
  },
  modules: {
    t: moduleT
  }
})
