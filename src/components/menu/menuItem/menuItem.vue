<template>
  <div class="menu-item select" @click="changeRouter" :class="selectedClass">
    <div class="menu-item-title" @click="showSubMenu">
      <div class="menu-item-line"></div>
      <div class="menu-item-icon">{{icon}}</div>
      <div class="menu-item-name">{{name}}</div>
    </div>
    <div class="menu-item-sub">
      <slot>
        <sub-menu path="/index/home/test" title="子菜单栏"></sub-menu>
      </slot>
    </div>
  </div>
</template>

<script>
  import subMenu from "@/components/menu/subMenu/subMenu";
  export default {
    name: "menuItem",
    components: {
      subMenu
    },
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
      },
      index: {
        type: Number,
        required: true
      }
    },
    methods: {
      changeRouter() {
        this.$router.push(this.path);
      },
      showSubMenu() {
        let subMenu = document.getElementsByClassName('menu-item-sub')[this.index];
        subMenu.style.display = subMenu.style.display === 'none' ? 'block' : 'none';
        // alert("sdfsdf")
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
      display: block;
      width: 100%;
      height: 40px;
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
      color: #000000!important;
    }
  }

</style>