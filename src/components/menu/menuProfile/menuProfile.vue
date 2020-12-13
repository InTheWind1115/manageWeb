<template>
  <div class="menu-profile-box">
    <div class="menu-profile-tricky select" v-show="dialogFlag">
      <div class="menu-profile-tricky-dialog">
        <div class="menu-profile-tricky-dialog-profile">
          <div class="menu-profile-tricky-dialog-profile-img">
            <img src="@/assets/images/njtech.jpg" alt="头像">
          </div>
          <div class="menu-profile-tricky-dialog-profile-info">
            <div class="menu-profile-tricky-dialog-profile-info-name overflow-hidden">{{$store.state.userName}}</div>
            <div class="menu-profile-tricky-dialog-profile-info-email overflow-hidden">{{$store.state.userName}}@njtech.edu.cn</div>
          </div>
        </div>
        <div class="menu-profile-tricky-dialog-logout" @click="logOut">
          退出
        </div>
      </div>
    </div>
    <div class="menu-profile select" @click="showDialog">
      <div class="menu-profile-img">
        <img src="@/assets/images/njtech.jpg" alt="头像">
      </div>
      <div class="menu-profile-info">
        <div class="menu-profile-info-name overflow-hidden">{{$store.state.userName}}</div>
      </div>
      <div class="menu-profile-tran"></div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "menuProfile",
    data() {
      return {
        dialogFlag: false
      }
    },
    methods: {
      setWidth() {
        let width = document.getElementsByClassName('menu-profile')[0].offsetWidth;
        let dialog = document.getElementsByClassName('menu-profile-tricky-dialog')[0];
        dialog.style.width = width + 10 + 'px';
      },
      showDialog() {
        this.dialogFlag = !this.dialogFlag;
      },
      logOut() {
        this.$store.state.token = '';
        this.$router.push('/login');
      }
    },
    mounted() {
      this.setWidth();
    }
  }
</script>

<style scoped lang="less">
  .menu-profile-tricky-dialog {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 5px;
    position: absolute;
    z-index: 999;
    left: 10px;
    bottom: 90px;
    padding: 10px 10px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .2);

    .menu-profile-tricky-dialog-profile {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      /*border-bottom: 1px solid #e6ecf0;*/
      padding-bottom: 5px;

      .menu-profile-tricky-dialog-profile-img {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        margin-right: 10px;

        img {
          height: 100%;
          width: 100%;
          border-radius: 25px;
        }
      }

      .menu-profile-tricky-dialog-profile-info {
        width: 60%;

        .menu-profile-tricky-dialog-profile-info-name {
          color: #14171a;
          font-weight: 600;
          font-size: 15px;
        }

        .menu-profile-tricky-dialog-profile-info-email {
          color: #657786;
          font-size: 15px;
        }
      }
    }

    .menu-profile-tricky-dialog-logout {
      position: relative;
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-top: 1px solid #e6ecf0;
      border-bottom: 1px solid #e6ecf0;
      color: #14171a;
      font-size: 15px;
      font-weight: 600;
    }

    .menu-profile-tricky-dialog-logout::after {
      content: "";
      position: absolute;
      left: 0;
      border: 10px solid #ffffff;
      border-left-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
      bottom: -30px;
    }

    .menu-profile-tricky-dialog-logout:hover {
      cursor: pointer;
      background-color: #f5f8fa;
    }
  }

  .menu-profile {
    position: absolute;
    bottom: 20px;
    height: 60px;
    width: 90%;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 10px;
    border-radius: 30px;
    box-sizing: border-box;
    background-color: #ffffff;
    margin-left: 4px;

    .menu-profile-img {
      width: 40px;
      height: 40px;
      border-radius: 20px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 20px;

      }
    }

    .menu-profile-tran {
      font-family: 'icomoon';
    }

    .menu-profile-info {
      width: 60%;
      padding: 0 5px;

      .menu-profile-info-name {
        width: 100%;
        font-size: 15px;
        color: #14171a;
        font-weight: 600;
      }
    }
  }
  .menu-profile:hover {
    background-color: #e8f5fe;
    cursor: pointer;
  }
</style>