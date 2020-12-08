<template>
  <div class="box select">
    <div class="header">
      向多个用户发送表格
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
        <div class="body-header-btn" @click="formToUsers">发布</div>
      </div>
      <div class="body-show">
        <input type="text" class="body-show-input" placeholder="请输入字段名称">
        <input type="text" class="body-show-input" placeholder="请输入字段名称">
        <input type="text" class="body-show-input" placeholder="请输入字段名称">
        <input type="text" class="body-show-input" placeholder="请输入字段名称">
        <input type="text" class="body-show-input" placeholder="请输入字段名称">
        <input type="text" class="body-show-input" placeholder="请输入字段名称">
        <input type="text" class="body-show-input" placeholder="请输入字段名称">
        <input type="text" class="body-show-input" placeholder="请输入字段名称">
        <input type="text" class="body-show-input" placeholder="请输入字段名称">
        <input type="text" class="body-show-input" placeholder="请输入字段名称">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Module3Page2",
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
      formToUsers() {
        let _this = this;
        let inputs = document.getElementsByClassName('body-show-input');
        let inputStr = '';
        for (let i = 0; i < inputs.length; i++) {
          if (inputs[i].value !== '')
            inputStr += inputs[i].value + ",";
        }
        _this.formContent = inputStr;
        _this.$myRequest({
          url: 'formtousers',
          method: 'get',
          headers: {
            Authorization: _this.$store.state.token
          },
          params: {
            status: _this.status,
            academy: _this.academy,
            department: _this.department,
            formcontent: _this.formContent
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

</style>