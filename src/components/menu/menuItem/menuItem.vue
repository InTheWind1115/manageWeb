<template>
  <div class="menu-item select" @click="changeRouter" :class="selectedClass">
    <div class="menu-item-line"></div>
    <div class="menu-item-icon">{{icon}}</div>
    <div class="menu-item-title">{{name}}</div>
  </div>
</template>

<script>
  export default {
    name: "menuItem",
    props: {
      path: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true
      },
      name: {
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
      selectedClass() {
        return {'menu-item-selected': this.$route.path.indexOf(this.path) === -1? false : true};
      }
    }
  }
</script>

<style scoped lang="less">
  .menu-item {
    height: 50px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;

    .menu-item-line {
      width: 4px;
      height: 100%;
      /*background-color: #ffffff;*/
    }

    .menu-item-icon {
      font-family: 'icomoon';
      color: #5c5c5c;
      box-sizing: border-box;
      padding-left: 15px;
      padding-right: 10px;
      line-height: 50px;
      font-size: 13px;
    }

    .menu-item-title {
      color: #5c5c5c;
      font-size: 13px;
      font-weight: 600;
      line-height: 50px;
    }
  }

  .menu-item:hover {
    cursor: pointer;

    .menu-item-icon,
    .menu-item-title {
      color: #000000;
    }
  }

  .menu-item-selected {
    background-color: #e6e7ea;
    .menu-item-line {
      background-color: #42b983;
    }

    .menu-item-icon,
    .menu-item-title {
      color: #000000;
    }
  }

</style>