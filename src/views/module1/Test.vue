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
        <table style="border-collapse: collapse" class="body-show-table">
          <tr class="body-show-tr">
            <td>ID</td>
            <td>姓名</td>
            <td>性别</td>
            <td>人员编号</td>
            <td>身份</td>
            <td>详细信息</td>
          </tr>
          <tr class="body-show-tr" v-for="(result, i) in results" :key="result.id">
            <td>{{i}}</td>
            <td>{{result.name}}</td>
            <td>{{result.sex === 0 ? '男' : '女'}}</td>
            <td>{{result.userId}}</td>
            <td>{{result.position}}</td>
            <td><a-button type="primary" @click="showModal(i)">详情</a-button></td>
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
        <div>
          姓名：<input type="text" :value="results[0] == null? '': results[resultSelected].name">
        </div>
        <div>
          专业：<input type="text" :value="results[0] == null? '': results[resultSelected].academy">
        </div>
        <div>
          出生日期：<input type="text" :value="results[0] == null? '': this.dateFormat('YYYY-mm-dd HH:MM', new Date(results[resultSelected].birthdate))">
        </div>
        <div>
          学院：<input type="text" :value="results[0] == null? '': results[resultSelected].department">
        </div>
        <div>
          在职状况：<input type="text" :value="results[0] == null? '': results[resultSelected].incumbency">
        </div>
        <div>
          手机号：<input type="text" :value="results[0] == null? '': results[resultSelected].phone">
        </div>
        <div>
          身份：<input type="text" :value="results[0] == null? '': results[resultSelected].position">
        </div>
        <div>
          性别：<input type="text" :value="results[0] == null? '': (results[resultSelected].sex == 0 ? '男' : '女')">
        </div>
        <div>
          学号：<input type="text" :value="results[0] == null? '': results[resultSelected].userId">
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
  export default {
    name: "Test",
    data() {
      return {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
        results: [],
        resultSelected: 0,
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
      handleOk(e) {
        this.ModalText = 'The modal will be closed after two seconds';
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
      showModal(e) {
        this.visible = true;
        this.resultSelected = e;
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
          _this.results = users;
        }).catch(err => {
          console.log(err);
        })
      },
      dateFormat(fmt, date) {
        let ret;
        const opt = {
          "Y+": date.getFullYear().toString(),        // 年
          "m+": (date.getMonth() + 1).toString(),     // 月
          "d+": date.getDate().toString(),            // 日
          "H+": date.getHours().toString(),           // 时
          "M+": date.getMinutes().toString(),         // 分
          "S+": date.getSeconds().toString()          // 秒
          // 有其他格式化字符需求可以继续添加，必须转化成字符串
        };
        for (let k in opt) {
          ret = new RegExp("(" + k + ")").exec(fmt);
          if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
          }
        }
        return fmt;
      }
    }
  }
</script>

<style lang="less">

  .box1-1 {
    width: 100%;
    top: 0;
    left: 0;

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