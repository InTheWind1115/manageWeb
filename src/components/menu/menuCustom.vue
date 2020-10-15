<template>
  <div class="menu-root">
    <div class="menu">
      <menu-logo></menu-logo>
      <menu-item path="/index/home" icon="" name="权限管理"></menu-item>
      <menu-item path="/index/cc" icon="" name="权限管理"></menu-item>
      <menu-item path="/789" icon="" name="权限管理"></menu-item>
      <menu-profile></menu-profile>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import menuItem from "./menuItem/menuItem";
  import menuProfile from "./menuProfile/menuProfile";
  import menuLogo from "./menuLogo/menuLogo";
  export default {
    name: "Menu",
    components: {
      menuItem,
      menuProfile,
      menuLogo
    },
    mounted() {
      // this.$router.push('/login')
    }
  }
</script>

<style scoped lang="less">
.menu-root {
  width: 100%;
  height: 100%;
  display: flex;

  .menu {
    display: flex;
    position: relative;
    height: 100%;
    width: 15%;
    min-width: 200px;
    box-sizing: border-box;
    border-right: 1px solid #babcbe;
    background-color: #f5f5f7;
    flex-direction: column;
    justify-content: flex-start;
  }

  .content {
    width: 85%;
  }
}
</style>