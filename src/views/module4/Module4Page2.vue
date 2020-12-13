<template>
  <div class="box4-2 select">
    <div class="header">表格填写情况查询</div>
    <div class="body">
      <div class="body-header">
        请输入要查询的表格ID：
        <input type="text" v-model="formId" class="body-header-input" placeholder="表格ID">
        <div class="body-header-btn" @click="aboutWrite">查询</div>
        <a-button type="primary" @click="btnExport">生成Excel</a-button>
      </div>
      <div class="body-show">
        <table style="border-collapse: collapse" class="body-show-table">
          <tr class="body-show-tr">
            <td>ID</td>
            <td>表格ID</td>
            <td>填写人员编号</td>
            <td>填写时间</td>
            <td>内容</td>
          </tr>
        </table>
      </div>
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
      btnExport() {
        console.log(this.xlsx);
        let table = document.getElementsByClassName('body-show-table')[0];
        let sheet = this.xlsx.utils.table_to_sheet(table);
        this.openDownloadDialog(this.sheet2blob(sheet), '下载.xlsx');
      },
      sheet2blob(sheet, sheetName) {
        let _this = this;
        sheetName = sheetName || 'sheet1';
        var workbook = {
          SheetNames: [sheetName],
          Sheets: {}
        };
        workbook.Sheets[sheetName] = sheet; // 生成excel的配置项

        var wopts = {
          bookType: 'xlsx', // 要生成的文件类型
          bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
          type: 'binary'
        };
        var wbout = _this.xlsx.write(workbook, wopts);
        var blob = new Blob([s2ab(wbout)], {
          type: "application/octet-stream"
        }); // 字符串转ArrayBuffer
        function s2ab(s) {
          var buf = new ArrayBuffer(s.length);
          var view = new Uint8Array(buf);
          for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
          return buf;
        }
        return blob;
      },
      openDownloadDialog(url, saveName) {
        if (typeof url == 'object' && url instanceof Blob) {
          url = URL.createObjectURL(url); // 创建blob地址
        }
        var aLink = document.createElement('a');
        aLink.href = url;
        aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
        var event;
        if (window.MouseEvent) event = new MouseEvent('click');
        else {
          event = document.createEvent('MouseEvents');
          event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        }
        aLink.dispatchEvent(event);
      },
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
          let users = res.data.result;
          let table = document.getElementsByClassName('body-show-table')[0];
          table.innerHTML = `
            <tr class="body-show-tr">
              <td>ID</td>
              <td>表格ID</td>
              <td>填写人员编号</td>
              <td>填写时间</td>
              <td>内容</td>
            </tr>`;
          for (let i = 0; i < users.length; i++) {
            let date = _this.dateFormat("YYYY-mm-dd HH:MM", new Date(users[i].writeTime));
            table.innerHTML = table.innerHTML + `
                                                <tr class="body-show-tr">
                                                  <td>${i}</td>
                                                  <td>${users[i].formId}</td>
                                                  <td>${users[i].writer}</td>
                                                  <td>${date}</td>
                                                  <td>${users[i].writeContent}</td>
                                                </tr>`
          }
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

  .box4-2 {
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
      width: 800px;
      margin: 0 auto;

      .body-header {
        margin-top: 20px;
        height: 30px;
        width: 100%;
        font-size: 17px;

        .body-header-input {
          width: 200px;
          height: 20px;
          outline: none;
          font-size: 15px;
          text-indent: 2px;
        }

        .body-header-btn {
          font-size: 18px;
          background-color: #777777;
          color: white;
          text-align: center;
          padding: 5px 15px;
          display: inline-block;
          border-radius: 5px;
          margin-left: 10px;
          &:hover {
            background-color: #555555;
            cursor: pointer;
          }
        }
      }

      .body-show {
        margin-top: 20px;

        .body-show-table {
          text-align: center;
          font-size: large;

          .body-show-tr td{
            width: 190px;
            border: #5c5c5c 1px solid;
          }
        }
      }
    }
  }


</style>