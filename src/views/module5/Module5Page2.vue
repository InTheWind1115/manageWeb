<template>
  <div class="box5-2">
    <div class="header">
      历史发布表格查询
    </div>
    <div class="body">
      <table class="body-table" style="border-collapse: collapse;" >
        <tr class="body-table-tr">
          <td>ID</td>
          <td>表格ID</td>
          <td>发布者</td>
          <td>发布时间</td>
          <td>字段内容</td>
          <td>接收者</td>
        </tr>
        <tr class="body-table-tr">
          <td>01</td>
          <td>23241234</td>
          <td>20187132</td>
          <td>2020-06</td>
          <td>年龄,籍贯</td>
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

<style scoped lang="less">
  .box5-2 {
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
      width: 1000px;
      /*background-color: #42b983;*/
      margin: 0 auto;

      .body-table {
        //display: flex;
        flex-direction: column;
        margin-top: 20px;
        border-collapse: collapse!important;

        .body-table-tr td {
          width: 150px;
          border: #5c5c5c 1px solid;
        }
      }
    }
  }

</style>