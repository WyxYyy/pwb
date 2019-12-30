<template>
  <div class="my">
    <!-- 头部俩功能 -->
    <header>
      <i class="select" @click="clickLogin('MySelect')"></i>
      <i class="news" @click="clickLogin('newsList')"></i>
    </header>
    <!-- 用户 -->
    <div class="user">
      <img src="../assets/img/head.png" alt="" class="head">
      <div class="isLogin msgs" v-if="isLogin">
        <b>
          {{name}}
        </b>
      </div>
      <div class="isLoginFalse msgs" v-else>
        <b @click="clickLogin('login')">登录/注册</b>
        <span>未登录 立即去登录></span>
      </div>
    </div>
    <ul class="MyList flex">
      <li class="myWallet" @click="clickLogin('MyWallet')">
        <i></i>
        我的钱包
      </li>
      <li class="myOrder" @click="clickLogin('order')">
        <i></i>
        我的订单
      </li>
      <li class="myCooperation" @click="callPhone(phone)">
        <i></i>
        我要合作
      </li>
    </ul>
    <!-- 四个功能列表 -->
    <!-- <ul class="MyList flex">
      <li class="Collection" >
        <i></i>
        <span>我的收藏</span>
      </li>
      <li class="appointment" @click="clickLogin('MyAppointment')">
        <i></i>
        <span>我的预约</span>
      </li>
      <li class="footprint" @click="clickLogin('MyFootprint')">
        <i></i>
        <span>我的足迹</span>
      </li>
      <li class="evaluate" @click="clickLogin('MyEvaluation')">
        <i></i>
        <span>我的评价</span>
      </li>
    </ul> -->
    <!-- 月付指南 -->
    <div class="guide" @click="clickLogin('MyGuide')">
      <img src="../assets/img/guide.png" alt="">

    </div>
    <div class="function">
      <div class="functionList">
        <div class="title flex">
          <span>
            包租公
          </span>
        </div>
        <ul class="allFn bzg" >
          <li @click="wantTo('bzgList')">
            <i class="bzgProject"></i>
            <span>旺铺推荐</span>
          </li>
          <li @click="clickLogin('totalAssets')">
            <i class="bzgAssets"></i>
            <span>总资产</span>
          </li>
          <li @click="clickLogin('leaseSublet')">
            <i class="bzgGuide"></i>
            <span>产品指南</span>
          </li>
          <li @click="clickLogin('Transfer')">
            <i class="bzgGuide"></i>
            <span>租赁转让</span>
          </li>

        </ul>
      </div>
      <div class="functionList">
        <div class="title flex">
          <span>
            我的服务
          </span>
        </div>
        <!-- 小功能 -->
        <ul class="allFn">
          <li @click="clickLogin('MyCollection')">
            <i class="Collection"></i>
            <span>我的收藏</span>
          </li>
          <li  @click="clickLogin('MyAppointment')">
            <i class="appointment"></i>
            <span>我的预约</span>
          </li>
          <li @click="clickLogin('leaseSublet')">
            <i class="lease"></i>
            <span>出租/转租</span>
          </li>
          <li @click="clickLogin('siteSelection')">
            <i class="site"></i>
            <span>我的选址</span>
          </li>
          <li @click="clickLogin('MyConstract')">
            <i class="contract"></i>
            <span>我的合同</span>
          </li>
          <li  @click="clickLogin('MyFootprint')">
            <i class="footprint"></i>
            <span>我的足迹</span>
          </li>
          <li  @click="clickLogin('MyEvaluation')">
            <i class="evaluate"></i>
            <span>我的评价</span>
          </li>
          <li v-clipboard:copy="sysAppIds" v-clipboard:success="onCopy" v-clipboard:error="onError">
            <i class="wx"></i>
            <span>官方微信</span>
          </li>
          <li @click="wantTo('MyOpinion')">
            <i class="Opinion"></i>
            <span>意见反馈</span>
          </li>
          <li @click="callPhone(phone)">
            <i class="service"></i>
            <span>联系客服</span>
          </li>
          <li @click="AboutMe">
            <i class="about"></i>
            <span>关于我们</span>
          </li>
          
       
        </ul>
      </div>
  
    </div>


    <footerBar whoShow=3></footerBar>
    <div style="height:50px;"></div>
  </div>
</template>

<script>
  import footerBar from '@/components/footerBar'
  import {
    Dialog
  } from 'vant';
  export default {
    components: {
      footerBar,
    },
    data() {
      return {
        isLogin: false,
        sysAppIds: '铺旺宝',
        name: '',
        phone: '400-960-6168',
        token: this.$cookieStore.getCookie('token'),
      }
    },
    methods: {
      AboutMe() {
        window.location.href = 'https://www.yuefula.com/web/mobile/index'
      },
      // 复制成功
      onCopy(e) {
        Dialog.alert({
          title: '提示',
          message: ' 微信搜索“铺旺宝”关注公众号'
        })
      },
      callPhone(phoneNumber) {
        window.location.href = 'tel://' + phoneNumber
      },
      // 复制失败
      onError(e) {
        alert("失败");
      },
      clickLogin(where) {
        if (!this.isLogin) {
          this.$router.push({
            name: 'login',
          })
        } else {
          this.wantTo(where)
        }
      },
      checkLogin() {
        if (this.token != null) {
          var result = this.$axios({
            url: this.Interface.config.getUser,
            method: 'get',
            sync: true,
            headers: {
              'XX-Token': this.token,
              'XX-Device-Type': 'mobile'
            }

          }).then((data) => {

            if (data.data.code == 1) {
              this.name = data.data.data.user_nickname
              this.isLogin = true
            }
          })
        }
        this.isLogin = false
      },
      // getUser(){
      //   if(this.token != ''){
      //     // -----------

      //     this.$axios({
      //     url: this.Interface.config.getUser,
      //     method: 'get',
      //     headers: {
      //       'XX-Token': this.token,
      //       'XX-Device-Type': 'mobile'
      //     }
      //   }).then((data) => {

      //     console.log(data) 
      //     this.name = data.data.data.user_nickname
      //     this.VerificationToken(data)
      //   })

      //     // -------------
      //   }
      // }
    },
    mounted() {
      // this.getUser()
      this.checkLogin()
      console.log(this.token)
    }

  }

</script>

<style scoped lang='scss'>
  .my {
    background: #fff;

    header {
      display: flex;
      justify-content: flex-end;
      height: 100px;
      align-items: center;
      padding: 0 30px;

      i {
        width: 44px;
        height: 44px;
        background-image: url(../assets/img/my_icons.png);
        background-size: 336px 228px;
        margin-left: 30px;
      }

      i.select {
        background-position: -200px -179px;
      }

      i.news {
        background-position: -244px -179px;
      }
    }

    .user {
      padding: 0 30px;

      display: flex;
      align-items: center;

      img.head {
        width: 120px;
        height: 120px;
      }

      .msgs {
        margin-left: 30px;

        b {
          font-size: 44px;
          font-weight: bold;
          display: block;
        }

        span {
          font-size: 28px;
          color: #999;

          i {
            color: #F7241B
          }
        }
      }
    }

    .MyList {
      padding: 13px 69px;
      margin-top: 60px;

      li {
        text-align: center;
          font-size: 30px;

        i {
          display: block;
          width: 66px;
          height: 66px;
          margin: 0 auto;
          margin-bottom: 10px;
          background-image: url(../assets/img/main_icons.png);
          background-size: 198px 66px;
        }

        span {
          font-size: 28px;
        }
      }

      .myWallet i {
        background-position: 0 0;
      }

      .myOrder i {
        background-position: -66px 0;
      }

      .myCooperation i {
        background-position: -132px 0;
      }
    }

    .guide {
      padding: 17px 30px;
      width: 100%;

      img {
        width: 100%;
        height: 150px;
        display: block;
        border-radius: 6px;
        background: linear-gradient(56deg, rgba(247, 109, 26, 1) 0%, rgba(247, 69, 61, 1) 38%, rgba(247, 36, 27, 1) 100%);
      }
    }

    .function {
      padding: 0 30px;

      .functionList {

        .title {
          margin: 25px 0;
          align-items: center;

          span {
            font-size: 36px;
          }

          em {
            font-size: 26px;
            color: #999;

            i {
              color: #F7241B;
            }
          }
        }

        .allFn.bzg {
          justify-content: space-between;
          li {
            i {
              background-image: url(../assets/img/assets_icons.png);
              background-size: 168px 56px;
            }

            i.bzgProject {
              background-position: 0 0;
            }

            i.bzgAssets {
              background-position: -56px 0;
            }

            i.bzgGuide {
              background-position: -112px 0;
            }
          }
        }

        .allFn {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;

          li {
            width: 25%;
            height: 160px;
            text-align: center;
            display: flex;
            flex-flow: column;
            justify-content: center;
            ;

            i {
              display: block;
              width: 56px;
              height: 56px;
              background-image: url(../assets/img/service_icons.png);
              background-size: 224px 168px;
              margin: 0 auto;
              margin-bottom: 20px;
            }
            i.Collection{
              background-position: 0 0;
            }
            i.appointment{
              background-position: -56px 0 ;
            }
            i.lease {
              background-position: -112px 0 ;
            }
            i.site {
              background-position: -168px 0;
            }
            i.contract {
              background-position: 0 -56px;
            }
            i.footprint{
              background-position: -56px -56px;
            }
            i.evaluate{
              background-position: -112px -56px;
            }
            i.wx{
              background-position: -168px -56px;
            }
            i.Opinion{
              background-position: 0 -112px;
            }
            i.service{
              background-position: -56px -112px;
            }
            i.about{
              background-position: -112px -112px;
            }
            span {
              font-size: 28px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }

        .more {
          li {
            i {
              width: 50px;
              height: 50px;
            }
          }
        }
      }
    }

  }

</style>

<style lang='scss'>
  .van-dialog {
    border-radius: 20px;

    .van-dialog__header {
      font-size: 40px;
      line-height: 40px;
      margin-bottom: 20px;
      ;
    }

    .van-dialog__content {
      .van-dialog__message {
        font-size: 32px;
        line-height: 50px;
      }
    }

    .van-dialog__footer {
      height: 100px;
      line-height: 100px;

      .van-button__text {
        font-size: 35px;
        line-height: 50px;
        color: #F7241B;
      }
    }

  }

  .van-toast {
    font-size: 30px;
    width: auto;
    padding: 20px;
  }

</style>
