<template>
  <div class="box2-1 select">
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
        权限
        <select class="selections" name="" v-model="limit">
          <option :value="limit.value" v-bind:key="limit.value" v-for="limit in limits">{{limit.name}}</option>
        </select>
        <div class="body-header-insert-btn" @click="updateUsersLimit">添加</div>
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
        </table>
      </div>
    </div>

    <a-modal
      title="详细信息"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <div>
        {{ModalText}}
      </div>
    </a-modal>
  </div>
</template>

<script>
  export default {
    name: "Module2Test1",
    data() {
      return {
        ModalText: '操作失败！',
        visible: false,
        confirmLoading: false,
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
      handleOk(e) {
        this.confirmLoading = true;
        setTimeout(() => {
          this.visible = false;
          this.confirmLoading = false;
        }, 100);
        e;
      },
      handleCancel(e) {
        console.log('Clicked cancel button');
        this.visible = false;
        e;
      },
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
            Authorization: _this.$store.state.token
          },
          params: {
            status: _this.status,
            department: _this.department,
            academy: _this.academy
          }
        }).then( res => {
          console.log(res);
          let users = res.data.result;
          let table = document.getElementsByClassName('body-show-table')[0];
          table.innerHTML = `
            <tr class="body-show-tr">
              <td>ID</td>
              <td>姓名</td>
              <td>性别</td>
              <td>人员编号</td>
              <td>身份</td>
            </tr>`;
          for (let i = 0; i < users.length; i++) {
            table.innerHTML = table.innerHTML + `
                                                <tr class="body-show-tr">
                                                  <td>${i}</td>
                                                  <td>${users[i].name}</td>
                                                  <td>${users[i].sex === 0? '男' : '女'}</td>
                                                  <td>${users[i].userId}</td>
                                                  <td>${users[i].position}</td>
                                                </tr>`
          }
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
            Authorization: _this.$store.state.token
          },
          params: {
            status: _this.status,
            department: _this.department,
            academy: _this.academy,
            limit: _this.limit
          }
        }).then( res => {
          console.log(res);
          this.ModalText = res.data.message;
          this.visible = true;
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style lang="less">

  .box2-1 {

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

        .selections {
          width: 115px;
        }

        .body-header-btn {
          position: absolute;
          height: 30px;
          width: 50px;
          left: 645px;
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
          left: 698px;
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