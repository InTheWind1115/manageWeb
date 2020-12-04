<template>
  <div class="module2">
    <div class="module2-container">
      <div class="module2-container-header">
        <div class="module2-container-header-title">用户群管理</div>
      </div>
      <div class="module2-container-body">
        <div class="module2-container-body-form-horizental-sl">
          <div class="module2-container-body-form-horizental-sl-form-group">
            <div class="module2-container-body-form-horizental-sl-form-group-first">
              <label class="module2-container-body-form-horizental-sl-form-group-first-title">身份  </label>
              <select class="module2-container-body-form-horizental-sl-form-group-first-choose">
                <option value>全部</option>
                <option>学校管理员</option>
                <option>部门管理员</option>
                <option>教师</option>
                <option>学生</option>
              </select>
            </div>
            <div class="module2-container-body-form-horizental-sl-form-group-second">
              <label class="module2-container-body-form-horizental-sl-form-group-second-title">学院  </label>
              <select class="module2-container-body-form-horizental-sl-form-group-second-choose">
                <option value>全部</option>
                <option>学校管理员</option>
                <option>部门管理员</option>
                <option>教师</option>
                <option>学生</option>
              </select>
            </div>
            <div class="module2-container-body-form-horizental-sl-form-group-third">
              <label class="module2-container-body-form-horizental-sl-form-group-third-title">专业  </label>
              <select class="module2-container-body-form-horizental-sl-form-group-third-choose">
                <option value>全部</option>
                <option>学校管理员</option>
                <option>部门管理员</option>
                <option>教师</option>
                <option>学生</option>
              </select>
            </div>
            <div class="module2-container-body-form-horizental-sl-form-group-button">
              <button class="module2-container-body-form-horizental-sl-form-group-button-title">  查 询  </button>
            </div>
            <div class="module2-container-body-form-horizental-sl-form-group-forth">
              <label class="module2-container-body-form-horizental-sl-form-group-forth-title">权限  </label>
              <select class="module2-container-body-form-horizental-sl-form-group-forth-choose">
                <option value>全部</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div class="module2-container-body-form-horizental-sl-form-group-button2">
              <button class="module2-container-body-form-horizental-sl-form-group-button2-title">  添 加  </button>
            </div>
          </div>
        </div>
      </div>
      <div class="module2-container-list">
        <table class="module2-container-list-table">
          <thead class="module2-container-list-table-thead">
          <tr class="module2-container-list-table-thead-tr">
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
  name: "Module2Page1",
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
        float: left;

        .module2-container-body-form-horizental-sl {
          margin-top: 30px;

          .module2-container-body-form-horizental-sl-form-group-first {
            width: 100%;
            margin-left: 25px;

            .module2-container-body-form-horizental-sl-form-group-first-choose {
              width: 200px;
            }
          }
          .module2-container-body-form-horizental-sl-form-group-second {
            width: 100%;
            margin-left: 25px;
            margin-top: 10px;

            .module2-container-body-form-horizental-sl-form-group-second-choose {
              width: 200px;
            }
          }
          .module2-container-body-form-horizental-sl-form-group-third {
            width: 100%;
            margin-left: 25px;
            margin-top: 10px;

            .module2-container-body-form-horizental-sl-form-group-third-choose {
              width: 200px;
            }
          }
          .module2-container-body-form-horizental-sl-form-group-button {
            width: 100%;
            margin-top: 20px;
            margin-left: 25px;
            margin-bottom: 30px;
          }

          .module2-container-body-form-horizental-sl-form-group-forth {
            width: 100%;
            margin-left: 25px;
            margin-top: 10px;

            .module2-container-body-form-horizental-sl-form-group-forth-choose {
              width: 200px;
            }
          }

          .module2-container-body-form-horizental-sl-form-group-button2 {
            width: 100%;
            margin-top: 20px;
            margin-left: 25px;
            margin-bottom: 30px;
          }
        }
      }

      .module2-container-list {
        width: 80%;
        margin-top: 180px;
        margin-left: 35px;

        .module2-container-list-table {
          border-style: solid;
          border-color: #babcbe;
        }
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

    .module2-container{
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
        width: 100%;
        margin-left: 50px;

        .module2-container-body-form-horizental-sl {
          width: 100%;

          .module2-container-body-form-horizental-sl-form-group-first {
            margin: 50px;
            float: left;

            .module2-container-body-form-horizental-sl-form-group-first-choose {
              box-sizing: border-box;
              width: 150px;
            }
          }
          .module2-container-body-form-horizental-sl-form-group-second {
            margin: 50px;
            float: left;

            .module2-container-body-form-horizental-sl-form-group-second-choose {
              box-sizing: border-box;
              width: 150px;
            }
          }
          .module2-container-body-form-horizental-sl-form-group-third {
            margin: 50px;
            float: left;

            .module2-container-body-form-horizental-sl-form-group-third-choose {
              box-sizing: border-box;
              width: 150px;
            }
          }

          .module2-container-body-form-horizental-sl-form-group-button {
            margin: 50px;
            float: left;
          }

          .module2-container-body-form-horizental-sl-form-group-forth {
            margin: 50px;
            float: left;

            .module2-container-body-form-horizental-sl-form-group-forth-choose {
              box-sizing: border-box;
              width: 150px;
            }
          }

          .module2-container-body-form-horizental-sl-form-group-button2 {
            margin: 50px;
            float: left;
          }
        }

      }

      .module2-container-list {
        width: 100%;
        float: left;

        .module2-container-list-table {
          width: 1000px;
          margin-left: 100px;
          border-style: solid;
          border-color: #babcbe;

          .module2-container-list-table-thead {

            .module2-container-list-table-thead-tr {
              width: 100px;
            }
          }
        }
      }
    }
  }
}
</style>