<template>
  <div class="login">
    <div class="login-box">
      <div class="login-box-left">
        <img src="@/assets/images/njtech.jpg" alt="南京工业大学">
      </div>

      <div class="login-box-right">
        <div class="login-box-right-header">
          <div class="login-box-right-header-title">统一身份验证</div>
          <div class="login-box-right-header-line"></div>
        </div>

        <div class="login-box-right-body">
          <div class="login-box-right-body-box1">
            <div class="login-box-right-body-username">用户名</div>
            <input class="login-box-right-body-username-input" placeholder="请输入账号"/>
            <div class="login-box-right-body-box1-hint">用户名错误</div>
          </div>
          <div class="login-box-right-body-box2">
            <div class="login-box-right-body-pwd">密码</div>
            <input class="login-box-right-body-pwd-input" placeholder="请输入密码"/>
            <div class="login-box-right-body-box2-hint">密码错误</div>
          </div>
          <span class="login-box-right-body-forget">忘记密码?</span>
        </div>

        <div class="login-box-right-footer">
          <div class="login-box-right-footer-btn">
            登录
          </div>
        </div>
      </div>
    </div>

    <div class="login-footer">Copyright © 2020 All Rights Reserved | 开发小组</div>
  </div>
</template>

<script>
  export default {
    name: "Login"
  }
</script>

<style lang="less" scoped>
  html,
  body {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
    .login {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      position: relative;
      top: 0;
      left: 0;
      background: url("~@/assets/images/school2.jpg") no-repeat;
      background-size: cover;
      background-attachment: fixed;

      .login-box {
        display: flex;
        width: 70%;
        height: 430px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.20);

        .login-box-left {
          width: 0;
          height: 100%;

          img {
            height: 100%;
            width: 100%;
          }
        }

        .login-box-right {
          position: relative;
          width: 100%;
          height: 430px;
          box-sizing: border-box;
          padding: 65px 35px;
          background-color: #ffffff;

          .login-box-right-header {
            .login-box-right-header-title {
              font-size: 20px;
              font-weight: 600;
              color: #000000;
            }

            .login-box-right-header-line {
              margin-top: 5px;
              width: 40px;
              height: 1px;
              background-color: #4d7c2c;
            }
          }

          .login-box-right-body {
            position: relative;
            width: 100%;
            box-sizing: border-box;

            .login-box-right-body-box1,
            .login-box-right-body-box2 {
              position: relative;

              .login-box-right-body-username,
              .login-box-right-body-pwd {
                margin-top: 30px;
                font-size: 13px;
              }

              .login-box-right-body-username-input,
              .login-box-right-body-pwd-input {
                width: 100%;
                height: 33px;
                font-size: 14px;
                padding-left: 0;
                outline: none;
                box-sizing: border-box;
                border: none;
                border-bottom: 1px solid #cccccc;
              }

              .login-box-right-body-box1-hint,
              .login-box-right-body-box2-hint {
                position: absolute;
                left: 0;
                bottom: -16px;
                font-size: 12px;
                color: #ed5565;
              }
            }

            .login-box-right-body-forget {
              position: absolute;
              right: 0;
              bottom: -40px;
              font-size: 12px;
              color: #4d7c2c;
            }

            .login-box-right-body-forget:hover {
              cursor: pointer;
            }
          }

          .login-box-right-footer {
            height: 34px;
            width: 100%;
            margin-top: 80px;

            .login-box-right-footer-btn {
              text-align: center;
              line-height: 34px;
              background-color: #4d7c2c;
              border-radius: 4px;
              color: #ffffff;
              font-size: 15px;
            }

            .login-box-right-footer-btn:hover {
              cursor: pointer;
            }
          }

        }
      }

      .login-footer {
        position: fixed;
        bottom: 30px;
        font-size: 13px;
      }
    }
  }

  @media only screen and (min-width: 769px) {
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    background: url("~@/assets/images/school2.jpg") no-repeat;
    background-size: cover;
    background-attachment: fixed;

    .login-box {
      display: flex;
      width: 56%;
      height: 430px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.20);

      .login-box-left {
        width: 58%;
        height: 100%;

        img {
          height: 100%;
          width: 100%;
        }
      }

      .login-box-right {
        position: relative;
        width: 42%;
        height: 430px;
        box-sizing: border-box;
        padding: 65px 35px;
        background-color: #ffffff;

        .login-box-right-header {
          .login-box-right-header-title {
            font-size: 20px;
            font-weight: 600;
            color: #000000;
          }

          .login-box-right-header-line {
            margin-top: 5px;
            width: 40px;
            height: 1px;
            background-color: #4d7c2c;
          }
        }

        .login-box-right-body {
          position: relative;
          width: 100%;
          box-sizing: border-box;

          .login-box-right-body-box1,
          .login-box-right-body-box2 {
            position: relative;

            .login-box-right-body-username,
            .login-box-right-body-pwd {
              margin-top: 30px;
              font-size: 13px;
            }

            .login-box-right-body-username-input,
            .login-box-right-body-pwd-input {
              width: 100%;
              height: 33px;
              font-size: 14px;
              padding-left: 0;
              outline: none;
              box-sizing: border-box;
              border: none;
              border-bottom: 1px solid #cccccc;
            }

            .login-box-right-body-box1-hint,
            .login-box-right-body-box2-hint {
              position: absolute;
              left: 0;
              bottom: -16px;
              font-size: 12px;
              color: #ed5565;
            }
          }

          .login-box-right-body-forget {
            position: absolute;
            right: 0;
            bottom: -40px;
            font-size: 12px;
            color: #4d7c2c;
          }

          .login-box-right-body-forget:hover {
            cursor: pointer;
          }
        }

        .login-box-right-footer {
          height: 34px;
          width: 100%;
          margin-top: 80px;

          .login-box-right-footer-btn {
            text-align: center;
            line-height: 34px;
            background-color: #4d7c2c;
            border-radius: 4px;
            color: #ffffff;
            font-size: 15px;
          }

          .login-box-right-footer-btn:hover {
            cursor: pointer;
          }
        }

      }
    }

    .login-footer {
      position: fixed;
      bottom: 30px;
      font-size: 13px;
    }
  }
  }
</style>