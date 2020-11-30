<template>
  <div class="module1">
    <div class="module1-container">
      <div class="module1-container-header">
        <div class="module1-container-header-title">单个用户管理</div>
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
            <div class="module1-container-body-form-horizental-sl-form-group-first">
              <label class="module1-container-body-form-horizental-sl-form-group-first-title">权限  </label>
              <select class="module1-container-body-form-horizental-sl-form-group-first-choose">
                <option value>全部</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div class="module1-container-body-form-horizental-sl-form-group-button2">
              <button class="module1-container-body-form-horizental-sl-form-group-button2-title">  添 加  </button>
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
  name: "Module2Page2",
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
      display: block;
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
        width: 80%;
        margin-left: 35px;
        margin-top: 50px;

        .module1-container-body-form-horizental-sl {

          .module1-container-body-form-horizental-sl-form-group {

            .module1-container-body-form-horizental-sl-form-group-input {

              .module1-container-body-form-horizental-sl-form-group-input-box {
                margin-top: 10px;
                margin-bottom: 20px;
              }
            }

            .module1-container-body-form-horizental-sl-form-group-button {
              margin-bottom: 40px;
            }

            .module1-container-body-form-horizental-sl-form-group-first {
              width: 100%;
              margin-top: 10px;
              margin-bottom: 20px;

              .module1-container-body-form-horizental-sl-form-group-first-choose {
                width: 145px;
              }
            }

            .module1-container-body-form-horizental-sl-form-group-button2 {
              margin-bottom: 30px;
            }
          }
        }
      }

      .module1-container-list {
        width: 80%;
        margin-left: 35px;

        .module1-container-list-table {
          border-style: solid;
          border-color: #babcbe;
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
            margin-left: 30px;
            float: left;
          }

          .module1-container-body-form-horizental-sl-form-group-first {
            font-size: 17px;
            margin: 50px;
            margin-left: 100px;
            float: left;

            .module1-container-body-form-horizental-sl-form-group-first-choose {
              box-sizing: border-box;
              width: 150px;
            }
          }

          .module1-container-body-form-horizental-sl-form-group-button2 {
            font-size: 17px;
            margin: 50px;
            float: left;
            margin-left: 30px;
          }
        }

      }

      .module1-container-list {
        width: 100%;
        float: left;

        .module1-container-list-table {
          width: 1000px;
          margin-left: 100px;
          border-style: solid;
          border-color: #babcbe;

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