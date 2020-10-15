<template>
  <div class="menu-logo">
    <img src="@/assets/images/badge.jpg" alt="">
    <h4 class="select">人员管理系统</h4>
  </div>
</template>

<script>
  export default {
    name: "menuLogo"
  }
</script>

<style scoped lang="less">
  .menu-logo {
    height: 60px;
    background-color: #dee1e6;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 4px;
    margin-bottom: 10px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin-right: 10px;
  }
  }
</style>