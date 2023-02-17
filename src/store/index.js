import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import { isLoggedIn } from '@/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    new VuexPersistence({
      storage: window.localStorage,
      reducer: (state) => ({ token: state.token, user: state.user }),
    }).plugin
  ],
  state: {
    token: null,
    user: {},
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
    getParameters: state => state.parameters,
    getToken: state => state.token,
    getUser: state => state.user,
    getIsLoggedIn: state => isLoggedIn(),
  },
  mutations: {
    // UNIVERSAL MUTATION
    SET_STATE_VALUE(state, payload) {
      for (let key in payload) {
        if (!payload.hasOwnProperty(key)) continue;
        state[key] = payload[key];
      }
    },
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
    setToken: ({ commit }, { token }) => {
      commit('SET_STATE_VALUE', { token: token });
    },
    setUser: ({ commit }, { user }) => {
      commit('SET_STATE_VALUE', { user: user });
    },
  },
  modules: {
  }
})
