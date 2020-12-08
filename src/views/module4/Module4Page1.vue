<template>
  <div class="box">
    <div class="header">我收到的表格</div>
    <div class="body">
      <table class="body-table">
        <tr>
          <td>姓名</td>
          <input type="text" class="body-table-input">
        </tr>
        <tr>
          <td>年龄</td>
          <input type="text" class="body-table-input">
        </tr>
        <tr>
          <td>家庭住址</td>
          <input type="text" class="body-table-input">
        </tr>
      </table>
      <div class="body-footer" @click="formWrite">提交</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Module4Page1",
    data() {
      return {
        formId: '',
        formContent: ''
      }
    },
    methods: {
      formWrite() {
        let _this = this;
        let inputs = document.getElementsByClassName('body-table-input');
        let inputStr = '';
        for (let i = 0; i < inputs.length; i++) {
          if (inputs[i].value !== '')
            inputStr += inputs[i].value + ",";
        }
        _this.formContent = inputStr;
        _this.$myRequest({
          url: 'formwrite',
          method: 'get',
          headers: {
            Authorization: _this.$store.state.token
          },
          params: {
            // formid: _this.formId,
            formid: '51613149939226558107',
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

  .body-footer:hover {
    cursor: pointer;
  }

</style>