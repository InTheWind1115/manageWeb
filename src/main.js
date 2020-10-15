import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
