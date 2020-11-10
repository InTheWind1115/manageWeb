<template>
  <div class="submenu" @click="changeRouter">
    {{title}}
  </div>
</template>

<script>
  export default {
    name: "subMenu",
    props: {
      path: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    },
    methods: {
      changeRouter() {
        alert(this.path);
        this.$router.push(this.path);
      }
    }
  }
</script>

<style scoped language="less">
  .submenu {
    width: 100%;
    height: 100%;
    line-height: 40px;
    font-size: 13px;
    font-weight: 600;
    color: #000000A6;
    padding-left: 42px;
  }

  .submenu:hover {
    color: #41b580;
  }
</style>