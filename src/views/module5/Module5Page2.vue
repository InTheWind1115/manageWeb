<template>
  <div class="box">
    <div class="header">
      历史发布表格查询
    </div>
    <div class="body">
      <table class="body-table">
        <tr>
          <td>ID</td>
          <td>表格ID</td>
          <td>发布者</td>
          <td>发布时间</td>
          <td>字段内容</td>
          <td>接收者</td>
        </tr>
        <tr>
          <td>0</td>
          <td>23241234123412341234</td>
          <td>201821017132</td>
          <td>2020-12-06</td>
          <td>姓名,性别,年龄,籍贯</td>
          <td>201821017132</td>
        </tr>
      </table>
    </div>
    <div class="foot"></div>
  </div>
</template>

<script>
  export default {
    name: "Module5Page2",
    mounted() {
      let _this = this;
      _this.$myRequest({
        url: 'formselect',
        method: 'get',
        headers: {
          Authorization: _this.$store.state.token
        },
      }).then( res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>

<style scoped>

</style>