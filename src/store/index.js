import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    parameters: {
      class: 'Todos',
      minLand: 0,
      //minValue: 0,
      location: {
        name: 'Cualquier ubicación',
        value: 'Anywere'
      },
      active: false,
    }
  },
  getters: {
    getParameters: state => state.parameters
  },
  mutations: {
    //reset parameters
    resetParameters(state) {
      state.parameters = {
        class: 'Todos',
        minLand: 0,
        //minValue: 0,
        location: {
          name: 'Cualquier ubicación',
          value: 'Anywere'
        },
        active: false,
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
