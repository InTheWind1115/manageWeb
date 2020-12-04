<template>
  <div class="module2">
    <div class="module2-container">
      <div class="module2-container-header">
        <div class="module2-container-header-title">添加用户</div>
      </div>
      <div class="module2-container-body">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Module2Page3",
  methods: {

  }
}
</script>

<style lang="less" scoped>
  html,
  body {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 768px) {
    .module2{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      position: relative;
      top: 0;
      left: 0;

      .module2-container {
        display: block;
        width: 100%;
        height: 100%;

        .module2-container-header {
          width: 100%;
          height: 60px;
          background-color: #41b580;

          .module2-container-header-title {
            margin-left: 20px;
            font-size: 20px;
            line-height: 260%;
            color: white;
            text-align: left;
          }
        }

        .module2-container-body {

        }
      }
    }
  }

  @media only screen and (min-width: 769px) {
    .module2 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      position: relative;
      top: 0;
      left: 0;

      .module2-container {
        width: 100%;
        height: 100%;

        .module2-container-header {
          width: 100%;
          height: 60px;
          background-color: #41b580;

          .module2-container-header-title {
            margin-left: 20px;
            font-size: 20px;
            line-height: 260%;
            color: white;
            text-align: left;
          }
        }

        .module2-container-body {

        }
      }
    }

  }

</style>