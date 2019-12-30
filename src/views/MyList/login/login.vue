<template>
  <div class="login">
    <van-nav-bar @click-left='$router.go(-1)' left-arrow></van-nav-bar>
    <header>
      <img src="../../../assets/img/logo.png" alt="" class="logo">
    </header>
    <div class="Modular">
      <div class="about">
        <i class="phone"></i>
        账号
      </div>
      <div class="ipt">
        <input type="text" v-model="phone" placeholder="请输入您的账号">
      </div>
    </div>
    <div class="Modular">
      <div class="about">
        <i class="password"></i>
        密码
      </div>
      <div class="ipt">
        <input :type="showPassword?'text':'password'" v-model="password" placeholder="请输入您的密码">
        <i @click="showPassword = !showPassword" :class="showPassword?'noPassword':'showPassword'"></i>
      </div>
    </div>
    <div class="flex">
      <span @click="wantTo('yzmLogin')">
        使用手机验证码登录
      </span>
      <span @click="wantTo('forgetPassword')">
        忘记密码
      </span>
    </div>
    <div class="btns">
      <div class="btn" @click="post">
        登 录

      </div>
    </div>
    <div class="register">
      新用户？
      <router-link to='register'>
        立即注册
      </router-link>
    </div>
  </div>
</template>

<script>
  import qs from 'qs'
  import {
    Toast
  } from 'vant'
  export default {
    data() {
      return {
        active: 1,
        showPassword: false,
        phone: '',
        password: '',
      }
    },
    methods: {
      post() {
        let postData = qs.stringify({
          username: this.phone,
          password: this.password,
          device_type: 'mobile'
        })
        this.$axios({
          'url': this.Interface.config.login,
          'method': 'post',
          'data': postData
        }).then((res) => {
          if (res.data.code == 1) {
            Toast.success(res.data.msg);
            var token = res.data.data.token
            this.$cookieStore.setCookie('token', token)
            this.$router.push({
              path: 'my',
            })
          } else {
            Toast.fail(res.data.msg);
          }
        })
      }
    },
    
  }

</script>

<style scoped lang='scss'>
  .login {
    width: 100%;
    background: #fff;
    padding-bottom: 70px;

    input::-webkit-input-placeholder {
      color: #ACACAC;
    }

    .van-hairline--bottom::after {
      border: none;
    }

    .van-nav-bar {
      border-bottom: none;
    }

    header {
      padding: 58px;
      display: flex;
      justify-content: center;

      .logo {
        width: 160px;
        height: 160px;
        ;
      }
    }

    .Modular {
      padding: 30px;

      i {
        display: block;
        width: 36px;
        height: 36px;
        background-image: url(../../../assets/img/login.png);
        background-size: 180px 36px;
        margin-right: 10px;
      }

      i.phone {
        background-position: 0 0;
      }

      i.password {
        background-position: -36px 0;
      }

      i.showPassword {
        background-position: -108px 0;
      }

      i.noPassword {
        background-position: -144px 0;
      }

      .about {
        display: flex;
        align-items: center;
        font-size: 34px;
        padding-left: 50px;

      }

      .ipt {
        margin-top: 30px;
        width: 100%;
        height: 88px;
        border-radius: 44px;
        background: #f3f3f3;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 88px;
        padding-right: 44px;

        input {
          border: 0;
          background: #f3f3f3;
          font-size: 26px;
          color: #ACACAC;
          width: 70%;
          touch-action: none;
        }
      }
    }

    .flex {
      padding: 0 80px;
      align-items: center;
      font-size: 26px;
    }

    .btns {
      padding: 0 80px;

      .btn {
        width: 100%;
        color: #fff;
        font-size: 40px;
        font-weight: bold;
        text-align: center;
        line-height: 98px;
        margin-top: 80px;
        height: 98px;
        border-radius: 49px;
        background: rgba(247, 36, 27, 1);
        box-shadow: 0px 2px 6px 0px rgba(251, 53, 44, 0.64);
      }
    }

    .register {
      margin-top: 40px;
      font-size: 26px;
      color: #999;
      text-align: center;
      padding-bottom: 20px;

      a {
        color: #F7241B;
      }
    }
  }

</style>
<style lang="scss" scoped>
  .van-nav-bar {
    height: 100px;
    line-height: 100px;
    background: #fff;
    border-bottom: 1px solid #ebebeb;

    .van-nav-bar__title {
      font-size: 36px;
    }

    .van-icon {
      font-size: 50px;
      color: #333;
    }
  }

</style>
<style lang='scss'>
  .van-toast{
    font-size: 30px;
    width: auto;
    padding: 20px;
  }

</style>