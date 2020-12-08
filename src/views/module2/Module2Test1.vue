<template>
  <div class="box select">
    <div class="header">
      用户群常用信息管理
    </div>
    <div class="body">
      <div class="body-header">
        身份
        <select name="" v-model="status">
          <option :value="user.value" v-bind:key="user.value" v-for="user in users">{{user.name}}</option>
        </select>
        学院
        <select name="" v-model="department" @change="changeAcademy">
          <option :value="department.value" v-bind:key="department.value" v-for="department in departments">{{department.name}}</option>
        </select>
        专业
        <select name="" v-model="academy">
          <option :value="academy.value" v-bind:key="academy.value" v-for="academy in academies[selected]">{{academy.name}}</option>
        </select>
        <div class="body-header-btn" @click="getUsersData">查询</div>
        权限
        <select name="" v-model="limit">
          <option :value="limit.value" v-bind:key="limit.value" v-for="limit in limits">{{limit.name}}</option>
        </select>
        <div class="body-header-insert-btn" @click="updateUsersLimit">添加</div>
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
    name: "Module2Test1",
    data() {
      return {
        selected: 0,
        users: [
          {
            value: -1,
            name: "全部"
          },
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
          },
        ],
        status: '',
        departments: [
          {
            value: -1,
            name: '全部'
          },
          {
            value: '计算机科学与技术学院',
            name: '计算机科学与技术学院'
          },
          {
            value: '马克思主义学院',
            name: '马克思主义学院'
          },
        ],
        department: '',
        academies: [
          [
            {
              value: -1,
              name: '全部'
            },
          ],
          [
            {
              value: -1,
              name: '全部'
            },
            {
              value: '计算机科学与技术',
              name: '计算机科学与技术'
            },
            {
              value: '软件工程',
              name: '软件工程'
            }
          ],
          [
            {
              value: -1,
              name: '全部'
            },
            {
              value: '马克思主义基本原理',
              name: '马克思主义基本原理'
            },
            {
              value: '马克思主义哲学',
              name: '马克思主义哲学'
            }
          ]
        ],
        academy: '',
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
        limit: ''
      }
    },
    created() {
      this.status = this.users[0].value;
      this.department = this.departments[0].value;
      this.academy = this.academies[this.selected][0].value;
      this.limit = this.limits[0].value;
    },
    methods: {
      changeAcademy() {
        let department = this.department;
        let _this = this;
        if (department === -1) {
          _this.selected = 0;
        } else if (department === '计算机科学与技术学院') {
          _this.selected = 1;
        } else if (department === '马克思主义学院') {
          _this.selected = 2;
        }
        _this.academy = _this.academies[_this.selected][0].value;
      },
      getUsersData() {
        let _this = this;
        _this.$myRequest({
          url: 'manageusersinfo',
          method: 'get',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VyIjoie1wiaWRcIjpudWxsLFwidXNlcm5hbWVcIjpcIjIwMTgyMTAxNzEzMlwiLFwicGFzc3dvcmRcIjpudWxsLFwic3RhdHVzXCI6bnVsbCxcInJvbGVzXCI6W3tcImlkXCI6MyxcInJvbGVOYW1lXCI6XCJST0xFX0FETUlOXCIsXCJyb2xlRGVzY1wiOlwiREVQQVJUTUVOVFwifV19IiwianRpIjoiT0RVd056UTVORFF0WW1GaU15MDBOREExTFdJMFpXRXROalEyTm1FeU5XWmtaVE5tIiwiZXhwIjoxNjA3NDA2MTIxfQ.XaGWJXugsuk8VrbTxnt3vBSq1aB5zOGJECbPZkQHVZEWXfv9wlgZ5tJm39ZTvZJy8t3ehu8gIe-D71J2GvJlZSUW8wQQ-m3n4AgwEo70YmuANpBnU0-yvLHUjNEWWgFFPB5ASAMLML7zxZi2bx-rYYDqvM1wCuHWobzaH3HPDmm4VfW_yDisvJdc3mtO-PLL0_Mnia_U67gz-YwdsVN5Lum_lyCs29exl1SC9PQpoZcsWBe4Amcw79ZGmQaXCKvtuZdXTuvZFzPKOh-UfsCinoFRoram1SY1b2_uds2_SYeDp4MYoty5nIlzB9_UUabtqJcM_d2TI-b2ymwC2LTiSA'
          },
          params: {
            status: _this.status,
            department: _this.department,
            academy: _this.academy
          }
        }).then( res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      },
      updateUsersLimit() {
        let _this = this;
        _this.$myRequest({
          url: 'updateuserslimit',
          method: 'get',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VyIjoie1wiaWRcIjpudWxsLFwidXNlcm5hbWVcIjpcIjIwMTgyMTAxNzEzMlwiLFwicGFzc3dvcmRcIjpudWxsLFwic3RhdHVzXCI6bnVsbCxcInJvbGVzXCI6W3tcImlkXCI6MyxcInJvbGVOYW1lXCI6XCJST0xFX0FETUlOXCIsXCJyb2xlRGVzY1wiOlwiREVQQVJUTUVOVFwifV19IiwianRpIjoiT0RVd056UTVORFF0WW1GaU15MDBOREExTFdJMFpXRXROalEyTm1FeU5XWmtaVE5tIiwiZXhwIjoxNjA3NDA2MTIxfQ.XaGWJXugsuk8VrbTxnt3vBSq1aB5zOGJECbPZkQHVZEWXfv9wlgZ5tJm39ZTvZJy8t3ehu8gIe-D71J2GvJlZSUW8wQQ-m3n4AgwEo70YmuANpBnU0-yvLHUjNEWWgFFPB5ASAMLML7zxZi2bx-rYYDqvM1wCuHWobzaH3HPDmm4VfW_yDisvJdc3mtO-PLL0_Mnia_U67gz-YwdsVN5Lum_lyCs29exl1SC9PQpoZcsWBe4Amcw79ZGmQaXCKvtuZdXTuvZFzPKOh-UfsCinoFRoram1SY1b2_uds2_SYeDp4MYoty5nIlzB9_UUabtqJcM_d2TI-b2ymwC2LTiSA'
          },
          params: {
            status: _this.status,
            department: _this.department,
            academy: _this.academy,
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

<style scoped lang="less">

  .body-header-btn:hover {
    cursor: pointer;
  }

  .body-header-insert-btn {
    cursor: pointer;
  }

</style>