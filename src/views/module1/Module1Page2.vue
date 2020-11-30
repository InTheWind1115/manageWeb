<template>
  <div class="module1">
    <div class="module1-container">
      <div class="module1-container-header">
        <div class="module1-container-header-title">单个用户常用信息管理</div>
      </div>
      <div class="module1-container-body">
        <div class="module1-container-body-form-horizental-sl">
          <div class="module1-container-body-form-horizental-sl-form-group">
            <div class="module1-container-body-form-horizental-sl-form-group-input">
              <div class="module1-container-body-form-horizental-sl-form-group-input-title">请输入人员编号： </div>
              <div class="module1-container-body-form-horizental-sl-form-group-input-box">
                <input type="text" placeholder="人员编号">
              </div>
            </div>
            <div class="module1-container-body-form-horizental-sl-form-group-button">
              <button class="module1-container-body-form-horizental-sl-form-group-button-title">  查 询  </button>
            </div>
          </div>
        </div>
      </div>
      <div class="module1-container-list">
        <table class="module1-container-list-table">
          <thead class="module1-container-list-table-thead">
          <tr class="module1-container-list-table-thead-tr">
            <th>ID</th>
            <th>姓名</th>
            <th>性别</th>
            <th>人员编号</th>
            <th>身份</th>
          </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Module1Page2",
  methods:{

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
  .module1{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;

    .module1-container {
      display: flex;
      width: 100%;
      height: 100%;

      .module1-container-header {
        width: 100%;
        height: 60px;
        background-color: #41b580;

        .module1-container-header-title {
          font-size: 19px;
          font-weight: 600;
          color: white;
          text-align: left;
        }
      }
    }
  }
}

@media only screen and (min-width: 769px) {
  .module1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;

    .module1-container{
      width: 100%;
      height: 100%;

      .module1-container-header {
        width: 100%;
        height: 60px;
        background-color: #41b580;

        .module1-container-header-title {
          margin-left: 20px;
          font-size: 20px;
          line-height: 260%;
          color: white;
          text-align: left;
        }
      }
      .module1-container-body {
        width: 100%;
        margin-left: 50px;

        .module1-container-body-form-horizental-sl {
          width: 100%;

          .module1-container-body-form-horizental-sl-form-group-input {
            margin: 50px;
            float: left;

            .module1-container-body-form-horizental-sl-form-group-input-title {
              font-size: 17px;
              float: left;
            }

            .module1-container-body-form-horizental-sl-form-group-input-box {
              float: left;
            }
          }

          .module1-container-body-form-horizental-sl-form-group-button {
            font-size: 17px;
            margin: 50px;
            margin-left: 80px;
            float: left;
          }
        }

      }

      .module1-container-list {
        width: 100%;
        float: left;

        .module1-container-list-table {
          width: 1350px;
          margin-left: 100px;
          border-style: solid;
          border-color: #41b580;

          .module1-container-list-table-thead {

            .module1-container-list-table-thead-tr {
              width: 100px;
            }
          }
        }
      }
    }
  }
}
</style>