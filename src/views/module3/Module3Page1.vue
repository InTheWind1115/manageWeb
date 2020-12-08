<template>
<div class="box">
  <div class="header">
    向单个用户发送表格
  </div>
  <div class="body">
    <div class="body-header">
      请输入人员编号：
      <input type="text" class="body-header-input" placeholder="人员编号" v-model="userId">
      <div class="body-header-insert-btn" @click="formToUser">发布</div>
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
  name: "Module3Page1",
  data() {
    return {
      userId: '',
      formContent: ''
    }
  },
  methods: {
    formToUser() {
      let _this = this;
      let inputs = document.getElementsByClassName('body-show-input');
      let inputStr = '';
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value !== '')
          inputStr += inputs[i].value + ",";
      }
      _this.formContent = inputStr;
      _this.$myRequest({
        url: 'formtouser',
        method: 'get',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VyIjoie1wiaWRcIjpudWxsLFwidXNlcm5hbWVcIjpcIjIwMTgyMTAxNzEzMlwiLFwicGFzc3dvcmRcIjpudWxsLFwic3RhdHVzXCI6bnVsbCxcInJvbGVzXCI6W3tcImlkXCI6MyxcInJvbGVOYW1lXCI6XCJST0xFX0FETUlOXCIsXCJyb2xlRGVzY1wiOlwiREVQQVJUTUVOVFwifV19IiwianRpIjoiT0RVd056UTVORFF0WW1GaU15MDBOREExTFdJMFpXRXROalEyTm1FeU5XWmtaVE5tIiwiZXhwIjoxNjA3NDA2MTIxfQ.XaGWJXugsuk8VrbTxnt3vBSq1aB5zOGJECbPZkQHVZEWXfv9wlgZ5tJm39ZTvZJy8t3ehu8gIe-D71J2GvJlZSUW8wQQ-m3n4AgwEo70YmuANpBnU0-yvLHUjNEWWgFFPB5ASAMLML7zxZi2bx-rYYDqvM1wCuHWobzaH3HPDmm4VfW_yDisvJdc3mtO-PLL0_Mnia_U67gz-YwdsVN5Lum_lyCs29exl1SC9PQpoZcsWBe4Amcw79ZGmQaXCKvtuZdXTuvZFzPKOh-UfsCinoFRoram1SY1b2_uds2_SYeDp4MYoty5nIlzB9_UUabtqJcM_d2TI-b2ymwC2LTiSA'
        },
        params: {
          userid: _this.userId,
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

<style scoped>

  .body-header-insert-btn {
    cursor: pointer;
  }

</style>