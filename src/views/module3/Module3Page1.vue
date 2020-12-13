<template>
<div class="box3-1 select">
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
  name: "Module3Page1",
  data() {
    return {
      ModalText: '操作失败！',
      visible: false,
      confirmLoading: false,
      userId: '',
      formContent: ''
    }
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
          Authorization: _this.$store.state.token
        },
        params: {
          userid: _this.userId,
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

<style scoped lang="less">

  .box3-1 {
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
      /*background-color: #42b983;*/
      margin: 0 auto;

      .body-header {
        margin-top: 20px;
        position: relative;
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 17px;

        .body-header-input {
          width: 200px;
          height: 20px;
          outline: none;
          font-size: 15px;
          text-indent: 2px;
        }

        .body-header-insert-btn {
          position: absolute;
          height: 30px;
          width: 50px;
          left: 400px;
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

        .body-show-input {
          width: 200px;
          height: 20px;
          outline: none;
          font-size: 15px;
          text-indent: 2px;
          margin-bottom: 20px;
        }
      }
    }
  }

  .body-header-insert-btn {
    cursor: pointer;
  }

</style>