import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuIndex: 0,
  },
  mutations: {
    changeMenuIndex(state, index) {
      state.menuIndex = index;
      // alert(state.menuIndex)
    }
  },
  actions: {
  },
  modules: {
  }
})
