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
        let users = res.data.result;
        let table = document.getElementsByClassName('body-table')[0];
        table.innerHTML = `
            <tr class="body-table-tr">
              <td>ID</td>
              <td>表格ID</td>
              <td>发布者</td>
              <td>发布时间</td>
              <td>字段内容</td>
              <td>接收者</td>
            </tr>`;
        for (let i = 0; i < users.length; i++) {
          let date = _this.dateFormat("YYYY-mm-dd HH:MM", new Date(users[i].publishTime));
          table.innerHTML = table.innerHTML + `
                                                <tr class="body-table-tr">
                                                  <td>${i}</td>
                                                  <td>${users[i].formId}</td>
                                                  <td>${users[i].publisher}</td>
                                                  <td>${date}</td>
                                                  <td>${users[i].publishContent}</td>
                                                  <td>${users[i].receiver}</td>
                                                </tr>`
        }
      }).catch(err => {
        console.log(err);
      })
    },
    methods: {
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