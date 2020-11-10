<template>
  <div class="menu-item select" @click="changeRouter" :class="selectedClass">
    <div class="menu-item-title" @click="showSubMenu">
      <div class="menu-item-line"></div>
      <div class="menu-item-icon">{{icon}}</div>
      <div class="menu-item-name">{{name}}</div>
    </div>
    <div class="menu-item-sub">
      <div>sdfsdf</div>
      <div>sdfsdf</div>
      <div>sdfsdf</div>
      <div>sdfsdf</div>
    </div>
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
      },
      showSubMenu() {
        let
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
    box-sizing: border-box;

    .menu-item-title {
      height: 50px;
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

      .menu-item-name {
        color: #5c5c5c;
        font-size: 13px;
        font-weight: 600;
        line-height: 50px;
      }
    }

    .menu-item-sub {
      display: none;
    }
  }

  .menu-item:hover {
    cursor: pointer;

    .menu-item-icon,
    .menu-item-name {
      color: #000000;
    }
  }

  .menu-item-selected {
    background-color: #e6e7ea;
    .menu-item-line {
      background-color: #42b983;
    }

    .menu-item-icon,
    .menu-item-name {
      color: #000000;
    }
  }

</style>