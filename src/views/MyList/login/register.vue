<template>
  <div class="login">
    <van-nav-bar @click-left='$router.go(-1)' left-arrow></van-nav-bar>
    <header>
      注册铺旺宝账户
    </header>
    <div class="Modular">
      <div class="about">
        <i class="phone"></i>
        手机号
      </div>
      <div class="ipt">
        <input type="number" v-model="phone" placeholder="请输入您的手机号">
      </div>
    </div>
    <div class="Modular">
      <imgYzm v-on:getUnique="getUnique"></imgYzm>
    </div>
    <div class="Modular">
      <div class="about">
        <i class="yzm"></i>
        验证码
      </div>
      <div class="ipt">
        <input type='text' v-model="yzm" maxlength="6" placeholder="请输入验证码">
        <span class="active" v-if="isSecond"> {{second}}s </span>
        <span class="active" v-else @click="grtYzm">获取验证码</span>
      </div>
    </div>
    <div class="Modular">
      <div class="about">
        <i class="password"></i>
        密码
      </div>
      <div class="ipt">
        <input :type="showPassword?'text':'password'" v-model="password" placeholder="密码由6-16位数字，字母组成">
        <i @click="showPassword = !showPassword" :class="showPassword?'noPassword':'showPassword'"></i>
      </div>
    </div>
    <div class="Agreement">
      <van-checkbox v-model="checked">
        同意铺旺宝
        <router-link to='ServiceAgreement'>《服务协议》</router-link>
        以及
        <router-link to='Tips'>《重要提示》</router-link>

        <img slot="icon" slot-scope="props" :src="props.checked ? icon.active : icon.inactive">
      </van-checkbox>
    </div>
    <div class="btns">
      <div class="btn" @click="register">
        注 册
      </div>
    </div>
  </div>
</template>

<script>
  import qs from 'qs'
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        active: 1,
        showPassword: false,
        phone: '',
        password: '',
        yzm: '',
        isSecond: false, //是否获取验证码
        second: '',
        checked: false,
        icon: {
          active: require('../../../assets/img/choice_select.png'),
          inactive: require('../../../assets/img/choice.png')
        },
        emitData:'',      //从子组件传过来的

      }
    },
    methods: {

      grtYzm: function () {

        var reg = 11 && /^((13|14|15|16|17|18)[0-9]{1}\d{8})$/;
        if (this.phone == '') {
          Toast.fail('请输入手机号码');
        } else if (!reg.test(this.phone)) {
          Toast.fail('手机格式不正确，请重新输入');
          this.phone = ''
        } else {
          // 短信验证码
          if (this.isSecond == false) {
            this.isSecond = true;
            this.second = 60;
            let timer = setInterval(() => {
              this.second--;
              if (this.second <= 0) {
                this.isSecond = false;
                clearInterval(timer);
              }
            }, 1000);
            // this.post(2,this.Interface.config.getYZM)

            this.getPhoneYZM( qs.stringify({
                username : this.phone,
                unique_id : this.emitData.unique_id,
                captcha_code : this.emitData.captcha_code,
                session_id :  this.$cookieStore.getCookie('session')

              }))
          }

        }
      },

      register() {
        if (this.checked == false) {
          Toast('请同意铺旺宝《服务协议》以及《重要提示》')
        } else {
          this.post(1, this.Interface.config.register)
        }
      },
      post(index, url) {
        var postData;
        if (index == 1) {
          postData = qs.stringify({
            username: this.phone,
            password: this.password,
            verification_code: this.yzm,
            device_type: 'mobile'
          })
        }

        this.$axios({
          'url': url,
          'method': 'post',
          'data': postData
        }).then((res) => {
          Toast(res.data.msg);
          console.log(res)
          if (index == 1) {
            if (res.data.code == 1) {
              Toast.success(res.data.msg);
              var token = res.data.data
              this.$cookieStore.setCookie('token', token)
              this.$router.push({
                path: 'my',
              })
            }
          }
        })
      },
      getUnique(emitData) {

        console.log(emitData)
        this.emitData = emitData
      }
    }
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

    .van-nav-bar {
      border-bottom: none;
    }

    header {
      padding: 58px;
      font-size: 50px;
      padding-bottom: 30px;
      ;

      .logo {
        width: 140px;
        height: 140px;
        ;
      }
    }

    .Modular {
      padding: 30px;

      .active {
        font-size: 26px;
        color: #F7241B;
      }

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

      i.yzm {
        background-position: -72px 0;
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
          ;
        }
      }
    }

    .Agreement {
      padding: 0 88px;
      margin: 40px 0;

      /deep/ .van-checkbox {
        .van-checkbox__icon {
          width: 30px;
          height: 30px;
        }

        .van-checkbox__label {
          font-size: 24px;
          color: #999;

          a {
            color: #F7241B;
          }
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
      margin-top: 30px;
      ;

      .btn {
        width: 100%;
        color: #fff;
        font-size: 40px;
        font-weight: bold;
        text-align: center;
        line-height: 98px;
        height: 98px;
        border-radius: 49px;
        background: rgba(247, 36, 27, 1);
        box-shadow: 0px 2px 6px 0px rgba(251, 53, 44, 0.64);
      }
    }

    .register {
      margin-top: 50px;
      font-size: 26px;
      color: #999;
      text-align: center;

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
  .van-toast {
    font-size: 30px;
    width: auto;
    padding: 20px;
  }

</style>
