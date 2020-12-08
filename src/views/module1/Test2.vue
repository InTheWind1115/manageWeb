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
          </tr>
          <tr class="body-show-tr-info body-show-tr">
            <td>0</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
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
          tableTd.innerHTML = `<td>0</td>
            <td>${result.name}</td>
            <td>${result.sex === 0 ? '男' : '女'}</td>
            <td>${result.userId}</td>
            <td>${result.position}</td>`
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped lang="less">

  .header {
    width: 100%;
    height: 60px;
    background-color: #41b580;
    font-size: 20px;
    line-height: 260%;
    color: white;
    text-align: left;
    padding-left: 30px;
  }

  .body-header {
    margin: 50px;
    font-size: large;
  }

  .body-header-input {
    margin-left: 400px;
    width: 300px;
  }

  .body-header-btn {
    font-size: 18px;
    float: right;
    background-color: #777777;
    color: white;
    text-align: center;
    padding: 5px 15px;
    display: inline-block;
    border-radius: 5px;
    margin-right: 600px;
  }

  .body-header-btn:hover {
    background-color: #555555;
    cursor: pointer;
  }

  .body-show {
    width: 80%;
    text-align: center;
    font-size: large;
    margin-left: 200px;
  }

  .body-show-tr td{
    width: 190px;
    border: #5c5c5c 1px solid;
  }
</style>