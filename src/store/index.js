import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuIndex: 0,
    token: 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VyIjoie1wiaWRcIjpudWxsLFwidXNlcm5hbWVcIjpcIjIwMTgyMTAxNzEzMlwiLFwicGFzc3dvcmRcIjpudWxsLFwic3RhdHVzXCI6bnVsbCxcInJvbGVzXCI6W3tcImlkXCI6MyxcInJvbGVOYW1lXCI6XCJST0xFX0FETUlOXCIsXCJyb2xlRGVzY1wiOlwiREVQQVJUTUVOVFwifV19IiwianRpIjoiTjJZNVpERTRaVFF0TnpFeVpDMDBNekF6TFdJME5ESXROMk13TjJZd09HUTVZbVZpIiwiZXhwIjoxNjA3NDk0MTkzfQ.BkW2pTK31WSxLwtk_4jOEZknmqXd5E6i3Zszia2pp43qA8Mh9OPZc5l44CmCDW1Yc-Z-C2SUAiot8y_btDJWyxplbBuYIeHD2ZVT_AFnfk3_cCEAJ3agNCM11rE_Ndzi0tlu1ChKpajPbwI5sYeGwOjVfsf5XHRWAoy2Thrgb19uGMUY0W1cW_mtih-cXESxLcBh-AryXEjP_EQ3EnEUPJDiKjcX7s18sJo_z-TH13sHM4mk60Vli96S_0Rnw3V1EIeh86EJYHdHvAWXc8FRyQVky_0kdvJUOmavh_2HrT6wsvtfFIXW2JCpJsrqyyf1z2vjUeJ1hBD8BJ9pzq_BPQ'
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
