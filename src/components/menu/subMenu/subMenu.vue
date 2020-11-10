<template>
  <div class="submenu" @click="changeRouter" :class="submenuClass">
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
        this.$router.push(this.path);
      }
    },
    computed: {
      submenuClass() {
        return {'submenu-selected': this.$route.path.indexOf(this.path) === -1 ? false : true}
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

  .submenu-selected {
    color: #41b580;
  }
</style>