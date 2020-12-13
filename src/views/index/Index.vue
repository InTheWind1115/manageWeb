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
    },
    created() {
      let _this = this;
      if (_this.$store.state.token == '')
        _this.$router.push('/login');
    }
  };
</script>
<style scoped lang="less">
  .index-root {
    height: 100%;
    width: 100%;
  }
</style>