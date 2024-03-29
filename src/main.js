import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {myRequest} from "./utils/request";
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Xlsx from 'xlsx'
Vue.use(antd)
// import {Button} from "ant-design-vue";
// import {Menu} from "ant-design-vue";
// import {Icon} from "ant-design-vue";


// Vue.component(Button.name, Button);
// Vue.component(Menu.name, Menu);
// Vue.component(Icon.name, Icon);
// Vue.component(Menu.SubMenu.name, Menu.SubMenu);
// Vue.component(Menu.MenuItem.name, Menu.MenuItem);
// Vue.use(Menu);

Vue.config.productionTip = false
Vue.prototype.$myRequest = myRequest;
Vue.prototype.xlsx = Xlsx;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
