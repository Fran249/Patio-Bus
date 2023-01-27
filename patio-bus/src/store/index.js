import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carrito: false,
    ingreso: false,
    registro: false,

  },
  getters: {

  },
  mutations: {

    toggleCarrito: (state, value) => (state.carrito = value),
    toggleIngreso: (state, value) => (state.ingreso = value),
    toggleRegistro: (state, value) => (state.registro = value),
  },
  actions: {

    toggleCarrito({ commit }, value) {
      commit("toggleCarrito", value);
    },
    toggleIngreso({ commit }, value) {
      commit("toggleIngreso", value);
    },
    toggleRegistro({ commit }, value) {
      commit("toggleRegistro", value);
    },
  },
  modules: {
  }
})
