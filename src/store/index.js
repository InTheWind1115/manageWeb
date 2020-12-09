import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuIndex: 0,
    token: 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VyIjoie1wiaWRcIjpudWxsLFwidXNlcm5hbWVcIjpcIjIwMTgyMTAxNzEzMlwiLFwicGFzc3dvcmRcIjpudWxsLFwic3RhdHVzXCI6bnVsbCxcInJvbGVzXCI6W3tcImlkXCI6MyxcInJvbGVOYW1lXCI6XCJST0xFX0FETUlOXCIsXCJyb2xlRGVzY1wiOlwiREVQQVJUTUVOVFwifV19IiwianRpIjoiTURreU5UVmxNV1V0WlRVeU15MDBPR0V4TFdKbU1UWXRZalExTldVeVlqSmhZek15IiwiZXhwIjoxNjA3NTgyNDE3fQ.ISoK41ZS5sl35iMir-u3hFbvdB2wTiNJo8-FFB0HKQX32xjXfUFCvNsCsGEWI7KhTUlgAZkIxrOzET8QII6f_y9KTZULuI0n_-DXTLlIAC7nkq3wgelmIbc3BYN9a63N90KEzTP3kXBCDmYS6NE_PNaaRZrPWR5Zq9XuKALV4574jaXg6Zmj6v7V308Iit9Hskmu8FoQJXqNaExPBxuo9qwqHOF_I0Mr6ggfQGL3O8nk7J0GDFtbCOU7nREkiblHmOPK0ta4o6oTvfUwOxtR15sVQO5fuR0DTkEjxqb1WpXoMHI9mfTmCMEi2lOf9T_DSYxsNcU_fXBHtlbM3fleHg'
  },
  mutations: {
    changeMenuIndex(state, index) {
      state.menuIndex = index;
      // alert(state.menuIndex)
    },
    changeToken(state, tokenStr) {
      state.token = tokenStr;
    }
  },
  actions: {
  },
  modules: {
  }
})
