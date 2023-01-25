import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carrito: false,

  },
  getters: {

  },
  mutations: {

    toggleCarrito: (state, value) => (state.carrito = value),

  },
  actions: {

    toggleCarrito({ commit }, value) {
      commit("toggleCarrito", value);
    },
  },
  modules: {
  }
})
