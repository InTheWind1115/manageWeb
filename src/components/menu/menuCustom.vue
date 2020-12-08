<template>
  <div class="menu-root">
    <div class="menu">
      <menu-logo></menu-logo>
      <menu-item path="/index/home" icon="" name="常用信息管理" index=0>
        <template v-slot:body>
          <sub-menu path="/index/module1page1" title="用户群"></sub-menu>
          <sub-menu path="/index/module1page2" title="单个用户"></sub-menu>
          <sub-menu path="/index/test1" title="用户群测试"></sub-menu>
          <sub-menu path="/index/test2" title="单个用户测试"></sub-menu>
        </template>
      </menu-item>
      <menu-item path="/index/cc" icon="" name="用户管理" index="1">
        <template v-slot:body>
          <sub-menu path="/index/module2page1" title="用户群"></sub-menu>
          <sub-menu path="/index/module2page2" title="单个用户"></sub-menu>
          <sub-menu path="/index/module2page3" title="添加用户"></sub-menu>
          <sub-menu path="/index/module2test1" title="用户群测试"></sub-menu>
          <sub-menu path="/index/module2test2" title="单个用户测试"></sub-menu>
        </template>
      </menu-item>
      <menu-item path="/index/cc" icon="" name="表格管理" index="2">
        <template v-slot:body>
          <sub-menu path="/index/module3page1" title="单个用户"></sub-menu>
          <sub-menu path="/index/module3page2" title="多个用户"></sub-menu>
        </template>
      </menu-item>
      <menu-item path="/index/home" icon="" name="信息收集模块" index=3>
        <template v-slot:body>
          <sub-menu path="/index/module4page1" title="我收到的"></sub-menu>
          <sub-menu path="/index/module4page2" title="查询填写情况"></sub-menu>
        </template>
      </menu-item>
      <menu-item path="/index/home" icon="" name="数据浏览与查询" index=4>
        <template v-slot:body>
          <sub-menu path="/index/module5page1" title="我收到的"></sub-menu>
          <sub-menu path="/index/module5page2" title="我发布的"></sub-menu>
        </template>
      </menu-item>
<!--      <menu-item path="/789" icon="" name="权限管j理" index="2"></menu-item>-->
<!--      <menu-item path="/789" icon="" name="权限管j理" index="3"></menu-item>-->
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
  import subMenu from "./subMenu/subMenu";
  export default {
    name: "Menu",
    components: {
      menuItem,
      menuProfile,
      menuLogo,
      subMenu
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