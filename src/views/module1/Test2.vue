<template>
  <div class="box1-2 select">
    <div class="header">
      单个用户常用信息管理
    </div>
    <div class="body">
      <div class="body-header">
        <input type="text" class="body-header-input" placeholder="人员编号" v-model="userId">
        <div class="body-header-btn" @click="getUserData">查询</div>
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
          <tr class="body-show-tr-info body-show-tr" v-show="results !== null" :key="2">
            <td>0</td>
            <td>{{results == null ? '' : results.name}}</td>
            <td>{{results == null ? '' : (results.sex === 0 ? '男' : '女')}}</td>
            <td>{{results == null ? '' : results.userId}}</td>
            <td>{{results == null ? '' : results.position}}</td>
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
          姓名：<input type="text" :value="results == null? '': results.name">
        </div>
        <div>
          专业：<input type="text" :value="results == null? '': results.academy">
        </div>
        <div>
          出生日期：<input type="text" :value="results == null? '': this.dateFormat('YYYY-mm-dd HH:MM', new Date(results.birthdate))">
        </div>
        <div>
          学院：<input type="text" :value="results == null? '': results.department">
        </div>
        <div>
          在职状况：<input type="text" :value="results == null? '': results.incumbency">
        </div>
        <div>
          手机号：<input type="text" :value="results == null? '': results.phone">
        </div>
        <div>
          身份：<input type="text" :value="results == null? '': results.position">
        </div>
        <div>
          性别：<input type="text" :value="results == null? '': (results.sex === 0 ? '男' : '女')">
        </div>
        <div>
          学号：<input type="text" :value="results == null? '': results.userId">
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
  export default {
    name: "Test2",
    data() {
      return {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
        results: null,
        resultSelected: 0,
        selected: 0,
        userId: ''
      }
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
      getUserData() {
        let _this = this;
        _this.$myRequest({
          url: 'manageuserinfo',
          method: 'get',
          headers: {
            Authorization: _this.$store.state.token
          },
          params: {
            userid: _this.userId,
          }
        }).then( res => {
          console.log(res);
          let result = res.data.result;
          _this.results = result;
          // let tableTd = document.getElementsByClassName('body-show-tr-info')[0];
          // console.log(result);
          // this.$nextTick(function () {
          //   tableTd.innerHTML = `<td>0</td>
          //   <td>${result.name}</td>
          //   <td>${result.sex === 0 ? '男' : '女'}</td>
          //   <td>${result.userId}</td>
          //   <td>${result.position}</td>
          //   <td><button>详情</button></td>`
          // })
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

  .box1-2 {
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

        .body-header-input{
          width: 200px;
          height: 20px;
          outline: none;
          font-size: 15px;
          text-indent: 2px;
        }
        .body-header-btn {
          position: absolute;
          height: 30px;
          width: 50px;
          left: 300px;
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
          width: 160px;
          border: #5c5c5c 1px solid;
        }
      }
    }
  }

</style>