<template>
  <div id="app">
<!--    <login></login>-->
<!--    <index>jl</index>-->
<!--    <Menu class="menu" v-if="false"></Menu>-->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  // import Login from "./views/login/Login";
  // import Index from "./views/index/Index";
  // import Menu from './components/menu/menu'
  export default {
    components: {
      // Login,
      // Index
      // Menu
    },
    // mounted() {
    //   alert(document.getElementsByClassName('menu')[0])
    // }
  }
</script>
<style lang="less">
  @import "assets/normalize.css";
  @import "assets/common.css";
  @import "assets/style.css";
  html,
  body,
  #app {
    width: 100%;
    height: 100%;
    display: flex;


    .content {
      width: 100%;
      /*background-color: #4d7c2c;*/
    }
  }
</style>
