<template>
  <div class="box select">
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
        <table>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
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
      },
      updateUserLimit() {
        let _this = this;
        _this.$myRequest({
          url: 'updateuserlimit',
          method: 'get',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VyIjoie1wiaWRcIjpudWxsLFwidXNlcm5hbWVcIjpcIjIwMTgyMTAxNzEzMlwiLFwicGFzc3dvcmRcIjpudWxsLFwic3RhdHVzXCI6bnVsbCxcInJvbGVzXCI6W3tcImlkXCI6MyxcInJvbGVOYW1lXCI6XCJST0xFX0FETUlOXCIsXCJyb2xlRGVzY1wiOlwiREVQQVJUTUVOVFwifV19IiwianRpIjoiT0RVd056UTVORFF0WW1GaU15MDBOREExTFdJMFpXRXROalEyTm1FeU5XWmtaVE5tIiwiZXhwIjoxNjA3NDA2MTIxfQ.XaGWJXugsuk8VrbTxnt3vBSq1aB5zOGJECbPZkQHVZEWXfv9wlgZ5tJm39ZTvZJy8t3ehu8gIe-D71J2GvJlZSUW8wQQ-m3n4AgwEo70YmuANpBnU0-yvLHUjNEWWgFFPB5ASAMLML7zxZi2bx-rYYDqvM1wCuHWobzaH3HPDmm4VfW_yDisvJdc3mtO-PLL0_Mnia_U67gz-YwdsVN5Lum_lyCs29exl1SC9PQpoZcsWBe4Amcw79ZGmQaXCKvtuZdXTuvZFzPKOh-UfsCinoFRoram1SY1b2_uds2_SYeDp4MYoty5nIlzB9_UUabtqJcM_d2TI-b2ymwC2LTiSA'
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

<style scoped>

  .body-header-select-btn:hover {
    cursor: pointer;
  }

  .body-header-insert-btn {
    cursor: pointer;
  }

</style>