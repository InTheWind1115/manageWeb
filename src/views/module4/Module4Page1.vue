<template>
  <div class="box4-1 select">
    <div class="header">我收到的表格</div>
    <div class="body">
      <div class="body-show"></div>
      <div class="body-footer" @click="formWrite">提交</div>
    </div>

    <a-modal
      title="详细信息"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <div>
        {{ModalText}}
      </div>
    </a-modal>
  </div>
</template>

<script>
  export default {
    name: "Module4Page1",
    data() {
      return {
        ModalText: '操作失败！',
        visible: false,
        confirmLoading: false,
        formId: '',
        formContent: '',
        websocket: null
      }
    },
    created() {
      let _this = this;
      _this.$myRequest({
        url: '/selectreceive',
        method: 'get',
        headers: {
          Authorization: _this.$store.state.token
        },
      }).then( res => {
        console.log(res.data.result[0]);
        let form = res.data.result[0];
        _this.formId = form.formId;
        let contents = form.publishContent.split(',');
        console.log(contents);
        let show = document.getElementsByClassName('body-show')[0];
        show.innerHTML = '';
        for (let i = 0; i < contents.length - 1; i++) {
          show.innerHTML = show.innerHTML + `<div class="body-show-div">
          ${contents[i]}：<input type="text" class="body-show-input" placeholder="请输入字段名称">
        </div>`
        }
      }).catch(err => {
        console.log(err);
      })
    },
    methods: {
      handleOk(e) {
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
      formWrite() {
        let _this = this;
        let inputs = document.getElementsByClassName('body-show-input');
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
            formid: _this.formId,
            formcontent: _this.formContent
          }
        }).then( res => {
          console.log(res);
          this.ModalText = res.data.message;
          this.visible = true;
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style lang="less">

  .box4-1 {
    .header {
      width: 100%;
      height: 60px;
      background-color: #41b580;
      font-size: 20px;
      line-height: 260%;
      color: white;
      text-align: left;
      padding-left: 30px;
      box-sizing: border-box;
    }

    .body {
      width: 800px;
      /*background-color: #42b983;*/
      margin: 0 auto;

      .body-show-div {
        flex-direction: column;
        margin-top: 20px;

        .body-show-input {
          width: 200px;
          height: 20px;
          outline: none;
          font-size: 15px;
          text-indent: 2px;
          margin-bottom: 20px;
        }
      }

      .body-footer {
        position: absolute;
        height: 30px;
        width: 50px;
        left: 610px;
        font-size: 18px;
        line-height: 30px;
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
  }

</style>