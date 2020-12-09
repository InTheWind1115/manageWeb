<template>
  <div class="box2-2 select">
    <div class="header">
      单个用户管理
    </div>
    <div class="body">
      <div class="body-header">
        请输入人员编号：
        <input type="text" class="body-header-input" placeholder="人员编号" v-model="userId">
        <div class="body-header-select-btn" @click="getUserData">查询</div>
        权限
        <select name="" v-model="limit">
          <option :value="limit.value" v-bind:key="limit.value" v-for="limit in limits">{{limit.name}}</option>
        </select>
        <div class="body-header-insert-btn" @click="updateUserLimit">添加</div>
      </div>
      <div class="body-show">
        <table style="border-collapse: collapse" class="body-show-table">
          <tr class="body-show-tr">
            <td>ID</td>
            <td>姓名</td>
            <td>性别</td>
            <td>人员编号</td>
            <td>身份</td>
          </tr>
          <tr class="body-show-tr body-show-tr-info">
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Module2Test2",
    data() {
      return {
        limits: [
          {
            value: 4,
            name: '学生'
          },
          {
            value: 3,
            name: '教师'
          },
          {
            value: 2,
            name: '部门管理员'
          },
          {
            value: 1,
            name: '学校管理员'
          }
        ],
        limit: '',
        userId: ''
      }
    },
    created() {
      this.limit = this.limits[0].value;
    },
    methods: {
      getUserData() {
        let _this = this;
        _this.$myRequest({
          url: 'manageuserinfo',
          method: 'get',
          headers: {
            Authorization: _this.$store.state.token
          },
          params: {
            userid: _this.userId,
          }
        }).then( res => {
          console.log(res);
          let result = res.data.result;
          let tableTd = document.getElementsByClassName('body-show-tr-info')[0];
          console.log(result);
          this.$nextTick(function () {
            tableTd.innerHTML = `<td>0</td>
            <td>${result.name}</td>
            <td>${result.sex === 0 ? '男' : '女'}</td>
            <td>${result.userId}</td>
            <td>${result.position}</td>`
          })
        }).catch(err => {
          console.log(err);
        })
      },
      updateUserLimit() {
        let _this = this;
        _this.$myRequest({
          url: 'updateuserlimit',
          method: 'get',
          headers: {
            Authorization: _this.$store.state.token
          },
          params: {
            userid: _this.userId,
            limit: _this.limit
          }
        }).then( res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style lang="less">
  .box2-2 {

    .header {
      width: 100%;
      height: 60px;
      background-color: #41b580;
      font-size: 20px;
      line-height: 260%;
      color: white;
      text-align: left;
      box-sizing: border-box;
      padding-left: 30px;
    }

    .body {
      width: 800px;
      /*background-color: #42b983;*/
      margin: 0 auto;

      .body-header {
        margin-top: 20px;
        position: relative;
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 17px;

        .body-header-input {
          width: 200px;
          height: 20px;
          outline: none;
          font-size: 15px;
          text-indent: 2px;
        }

        .body-header-select-btn {
          position: absolute;
          height: 30px;
          width: 50px;
          left: 530px;
          font-size: 18px;
          background-color: #777777;
          color: white;
          text-align: center;
          display: inline-block;
          border-radius: 5px;
          &:hover {
            background-color: #555555;
            cursor: pointer;
          }
        }
        .body-header-insert-btn {
          position: absolute;
          height: 30px;
          width: 50px;
          left: 590px;
          font-size: 18px;
          background-color: #777777;
          color: white;
          text-align: center;
          display: inline-block;
          border-radius: 5px;
          &:hover {
            background-color: #555555;
            cursor: pointer;
          }
        }
      }

      .body-show {
        display: flex;
        flex-direction: column;
        margin-top: 20px;

        .body-show-tr td {
          width: 190px;
          border: #5c5c5c 1px solid;
        }
      }
    }
  }

</style>