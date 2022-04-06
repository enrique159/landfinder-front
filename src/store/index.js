import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    parameters: {
      class: 'Todos',
      minLand: 0,
      minValue: 0,
      location: 'Baja California Sur',
    }
  },
  getters: {
    getParameters: state => state.parameters
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
