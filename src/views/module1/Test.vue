<template>
  <div class="box1-1 select">
    <div class="header">
      用户群常用信息管理
    </div>
    <div class="body">
      <div class="body-header">
        身份
        <select class="selections" name="" v-model="status">
          <option :value="user.value" v-bind:key="user.value" v-for="user in users">{{user.name}}</option>
        </select>
        学院
        <select class="selections" name="" v-model="department" @change="changeAcademy">
          <option :value="department.value" v-bind:key="department.value" v-for="department in departments">{{department.name}}</option>
        </select>
        专业
        <select class="selections" name="" v-model="academy">
          <option :value="academy.value" v-bind:key="academy.value" v-for="academy in academies[selected]">{{academy.name}}</option>
        </select>
        <div class="body-header-btn" @click="getUsersData">查询</div>
      </div>
      <div class="body-show">
        <table style="border-collapse: collapse">
          <tr class="body-show-tr">
            <td>ID</td>
            <td>姓名</td>
            <td>性别</td>
            <td>人员编号</td>
            <td>身份</td>
            <td>详细信息</td>
          </tr>
          <tr  class="body-show-tr">
            <td>01</td>
            <td>权纯洋</td>
            <td>女</td>
            <td>2018210</td>
            <td>学生</td>
            <td><button>详情</button></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Test",
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
        academy: ''
      }
    },
    created() {
      this.status = this.users[0].value;
      this.department = this.departments[0].value;
      this.academy = this.academies[this.selected][0].value;
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
      }
    }
  }
</script>

<style lang="less" scoped>

  .box1-1 {
    width: 100%;
    top: 0;
    left: 0;

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

    .body {
      width: 90%;
      text-align: center;

      .body-header {
        margin: 50px;
        font-size: large;

        .selections {
          margin-left: 10px;
          margin-right: 50px;
          width: 120px;
        }

        .body-header-btn {
          font-size: 18px;
          background-color: #777777;
          color: white;
          text-align: center;
          padding: 5px 15px;
          display: inline-block;
          border-radius: 5px;
          &:hover {
            background-color: #555555;
            cursor: pointer;
          }
        }
      }

      .body-show {
        width: 70%;
        text-align: center;
        font-size: large;
        margin-left: 170px;

        .body-show-tr td{
          width: 190px;
          border: #5c5c5c 1px solid;
        }
      }
    }
  }

</style>