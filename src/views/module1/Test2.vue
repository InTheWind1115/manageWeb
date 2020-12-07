<template>
  <div class="box select">
    <div class="header">
      单个用户常用信息管理
    </div>
    <div class="body">
      <div class="body-header">
        <input type="text" class="body-header-input" placeholder="人员编号" v-model="userId">
        <div class="body-header-btn" @click="getUserData">查询</div>
      </div>
      <div class="body-show">
        <table style="border-collapse: collapse">
          <tr class="body-show-tr">
            <td>ID</td>
            <td>姓名</td>
            <td>性别</td>
            <td>人员编号</td>
            <td>身份</td>
          </tr>
          <tr class="body-show-tr">
            <td>01</td>
            <td>权纯洋</td>
            <td>女</td>
            <td>2018210</td>
            <td>学生</td>
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
            Authorization: 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VyIjoie1wiaWRcIjpudWxsLFwidXNlcm5hbWVcIjpcIjIwMTgyMTAxNzEzMlwiLFwicGFzc3dvcmRcIjpudWxsLFwic3RhdHVzXCI6bnVsbCxcInJvbGVzXCI6W3tcImlkXCI6MyxcInJvbGVOYW1lXCI6XCJST0xFX0FETUlOXCIsXCJyb2xlRGVzY1wiOlwiREVQQVJUTUVOVFwifV19IiwianRpIjoiT0RVd056UTVORFF0WW1GaU15MDBOREExTFdJMFpXRXROalEyTm1FeU5XWmtaVE5tIiwiZXhwIjoxNjA3NDA2MTIxfQ.XaGWJXugsuk8VrbTxnt3vBSq1aB5zOGJECbPZkQHVZEWXfv9wlgZ5tJm39ZTvZJy8t3ehu8gIe-D71J2GvJlZSUW8wQQ-m3n4AgwEo70YmuANpBnU0-yvLHUjNEWWgFFPB5ASAMLML7zxZi2bx-rYYDqvM1wCuHWobzaH3HPDmm4VfW_yDisvJdc3mtO-PLL0_Mnia_U67gz-YwdsVN5Lum_lyCs29exl1SC9PQpoZcsWBe4Amcw79ZGmQaXCKvtuZdXTuvZFzPKOh-UfsCinoFRoram1SY1b2_uds2_SYeDp4MYoty5nIlzB9_UUabtqJcM_d2TI-b2ymwC2LTiSA'
          },
          params: {
            userid: _this.userId,
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

<style scoped lang="less">

  .header {
    width: 100%;
    height: 60px;
    background-color: #536847;
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