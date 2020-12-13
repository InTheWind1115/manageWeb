import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuIndex: 0,
    token: '',
    websocketUrl: 'ws://localhost:9090/njtech/mywebsocket',
    userName: '',
    role: ''
  },
  mutations: {
    changeMenuIndex(state, index) {
      state.menuIndex = index;
      // alert(state.menuIndex)
    },
    changeToken(state, tokenStr) {
      state.token = tokenStr;
    },
    changeUsername(state, username) {
      state.userName = username;
    },
    changeRole(state, roleName) {
      state.role = roleName
    }
  },
  actions: {
  },
  modules: {
  }
})
