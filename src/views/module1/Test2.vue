<template>
  <div class="box1-2 select">
    <div class="header">
      单个用户常用信息管理
    </div>
    <div class="body">
      <div class="body-header">
        <input type="text" class="body-header-input" placeholder="人员编号" v-model="userId">
        <div class="body-header-btn" @click="getUserData">查询</div>
      </div>
      <div class="body-show">
        <table style="border-collapse: collapse" class="body-show-table">
          <tr class="body-show-tr">
            <td>ID</td>
            <td>姓名</td>
            <td>性别</td>
            <td>人员编号</td>
            <td>身份</td>
            <td>详细信息</td>
          </tr>
          <tr class="body-show-tr">
            <td>01</td>
            <td>权纯洋</td>
            <td>女</td>
            <td>2018210</td>
            <td>学生</td>
            <td><button>详情</button></td>
          </tr>
          <tr class="body-show-tr-info body-show-tr"></tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Test2",
    data() {
      return {
        userId: ''
      }
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
      }
    }
  }
</script>

<style lang="less">

  .box1-2 {
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

        .body-header-input{
          width: 200px;
          height: 20px;
          outline: none;
          font-size: 15px;
          text-indent: 2px;
        }
        .body-header-btn {
          position: absolute;
          height: 30px;
          width: 50px;
          left: 300px;
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
          width: 160px;
          border: #5c5c5c 1px solid;
        }
      }
    }
  }

</style>