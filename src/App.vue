<template>
  <div id="app">
    <login></login>
  </div>
</template>
<script>
  import Login from "./views/login/Login";
  export default {
    components: {
      Login
    },
  }
</script>
<style lang="less">
  @import "assets/normalize.css";
  html,
  body,
  #app {
    width: 100%;
    height: 100%;
  }
</style>
