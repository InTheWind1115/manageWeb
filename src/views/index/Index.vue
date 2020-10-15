<template>
  <div class="index-root">
    <menu-custom></menu-custom>
  </div>
</template>
<script>
  import menuCustom from "@/components/menu/menuCustom";
  export default {
    components: {
      menuCustom
    }
  };
</script>
<style scoped lang="less">
  .index-root {
    height: 100%;
    width: 100%;
  }
</style>