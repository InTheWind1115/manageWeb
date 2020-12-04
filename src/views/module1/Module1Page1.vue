<template>
  <div class="module1">
    <div class="module1-container">
      <div class="module1-container-header">
        <div class="module1-container-header-title">用户群常用信息管理</div>
      </div>
      <div class="module1-container-body">
        <div class="module1-container-body-form-horizental-sl">
          <div class="module1-container-body-form-horizental-sl-form-group">
            <div class="module1-container-body-form-horizental-sl-form-group-first">
              <label class="module1-container-body-form-horizental-sl-form-group-first-title">身份  </label>
              <select class="module1-container-body-form-horizental-sl-form-group-first-choose">
                <option value>全部</option>
                <option>学校管理员</option>
                <option>部门管理员</option>
                <option>教师</option>
                <option>学生</option>
              </select>
            </div>
            <div class="module1-container-body-form-horizental-sl-form-group-second">
              <label class="module1-container-body-form-horizental-sl-form-group-second-title">学院  </label>
              <select class="module1-container-body-form-horizental-sl-form-group-second-choose">
                <option value>全部</option>
                <option>计算机科学与技术学院</option>
                <option>马克思主义学院</option>
              </select>
            </div>
            <div class="module1-container-body-form-horizental-sl-form-group-third">
              <label class="module1-container-body-form-horizental-sl-form-group-third-title">专业  </label>
              <select class="module1-container-body-form-horizental-sl-form-group-third-choose">
                <option value>全部</option>
                <option>学校管理员</option>
                <option>部门管理员</option>
                <option>教师</option>
                <option>学生</option>
              </select>
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
    name: "Module1Page1",
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
          float: left;

          .module1-container-body-form-horizental-sl {
            margin-top: 30px;
            .module1-container-body-form-horizental-sl-form-group-first {
              width: 100%;
              margin-left: 25px;

              .module1-container-body-form-horizental-sl-form-group-first-choose {
                width: 200px;
              }
            }
            .module1-container-body-form-horizental-sl-form-group-second {
              width: 100%;
              margin-left: 25px;
              margin-top: 10px;

              .module1-container-body-form-horizental-sl-form-group-second-choose {
                width: 200px;
              }
            }
            .module1-container-body-form-horizental-sl-form-group-third {
              width: 100%;
              margin-left: 25px;
              margin-top: 10px;

              .module1-container-body-form-horizental-sl-form-group-third-choose {
                width: 200px;
              }
            }
            .module1-container-body-form-horizental-sl-form-group-button {
              width: 100%;
              margin-top: 20px;
              margin-left: 25px;
              margin-bottom: 30px;
            }
          }
        }

        .module1-container-list {
          width: 80%;
          margin-top: 180px;
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

            .module1-container-body-form-horizental-sl-form-group-first {
              margin: 50px;
              float: left;

              .module1-container-body-form-horizental-sl-form-group-first-choose {
                box-sizing: border-box;
                width: 200px;
              }
            }
            .module1-container-body-form-horizental-sl-form-group-second {
              margin: 50px;
              float: left;

              .module1-container-body-form-horizental-sl-form-group-second-choose {
                box-sizing: border-box;
                width: 200px;
              }
            }
            .module1-container-body-form-horizental-sl-form-group-third {
              margin: 50px;
              float: left;

              .module1-container-body-form-horizental-sl-form-group-third-choose {
                box-sizing: border-box;
                width: 200px;
              }
            }
            .module1-container-body-form-horizental-sl-form-group-button {
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