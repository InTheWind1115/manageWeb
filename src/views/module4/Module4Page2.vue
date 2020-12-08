<template>
  <div class="box">
    <div class="header">表格填写情况查询</div>
    <div class="body">
      <div class="body-header">
        请输入要查询的表格ID：
        <input type="text" v-model="formId">
      </div>
      <div class="body-show"></div>
      <div class="body-footer" @click="aboutWrite">查询</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Module4Page2",
    data() {
      return {
        formId: ''
      }
    },
    methods: {
      aboutWrite() {
        let _this = this;
        _this.$myRequest({
          url: 'aboutform',
          method: 'get',
          headers: {
            Authorization: _this.$store.state.token
          },
          params: {
            formid: _this.formId
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