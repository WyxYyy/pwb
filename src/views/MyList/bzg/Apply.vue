<template>
  <div>
    <van-nav-bar @click-left='wantTo("my")' title="在线申请" left-arrow style="font-size: 20px"></van-nav-bar>
    <div class="top">
      <img src="../../../assets/img/guide_buy.png" class="guide" alt="">
      <div class="ApplyTitle">
        申请成为包租公
      </div>
      <ul>
        <li>
          <span>
            购买金额
          </span>
          <div class="flex">
            <input type="number" placeholder="请输入您的意向购买金额" v-model="intention">
            <i>元</i>
          </div>
        </li>
        <li>
          <span>
            联系人
          </span>
          <input type="text" placeholder="我们怎么称呼您" v-model="name">
        </li>
        <li>
          <span>
            手机号
          </span>

          <input type="number" placeholder="您的联系方式" v-model="phone">
        </li>
        <li>
          <span>
            验证码
          </span>
          <div class="flex">
            <input type="number" placeholder="请输入验证码" v-model="yzm">
            <em v-if="isSecond" @click="getYzm">
              获取验证码
            </em>
            <em v-else>
              {{second}}s
            </em>
          </div>

        </li>
      </ul>
    </div>
    <div class="bottom">
        <div  :class="intention != '' && name != '' && phone != '' && yzm != ''?'active btn':'btn' ">
            确认申请
        </div>
        <div class="Tips">
            有问题？ 
            <i></i>
            <em>
                联系客服
            </em>
        </div>
    </div>
  </div>
</template>

<script>
import {
    Toast
  } from 'vant';
  import qs from 'qs'
  export default {
    data() {
      return {
        intention: '',
        name: '',
        phone: '',
        yzm: '',
        isSecond: true,
        second: '',
      }
    },
    methods: {
      getYzm: function () {
        var reg = 11 && /^((13|14|15|16|17|18)[0-9]{1}\d{8})$/;
        if (this.phone == '') {

          Toast.fail('请输入手机号码');

        } else if (!reg.test(this.phone)) {
          Toast.fail('手机格式不正确，请重新输入');
          this.phone = ''
        } else {
          // 短信验证码
          if (this.isSecond == true) {
            this.isSecond = false;
            this.second = 60;
            let timer = setInterval(() => {
              this.second--;
              if (this.second <= 0) {
                this.isSecond = true;
                clearInterval(timer);
              }
            }, 1000);
            this.getPhoneYZM(qs.stringify({
              username: this.phone
            }))
          }
        }
      },
    }
  }

</script>

<style scoped lang='scss'>
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

    .van-nav-bar__text {
      color: #333;
      font-size: 26px;
    }
  }

  .top {
    background: #fff;
    padding: 0 30px;

    .guide {
      margin: 30px 0;
    }

    .ApplyTitle {
      margin-top: 50px;
      font-size: 50px;
      line-height: 1;
    }

    ul {
      margin-top: 30px;

      li {
        display: flex;
        align-items: center;
        height: 110px;
        border-bottom: 2px solid #EEEBEA;
        font-size: 30px;

        span {
          font-size: 30px;
          display: block;
          width: 170px;
          flex: none;
        }

        input {
          border: 0;
          font-size: 30px;
        }
        ::-webkit-input-placeholder { /* WebKit browsers */
            color: #999;
        }
        .flex {
          width: 100%;
          align-items: center;

          em {
            color: #F7241B;
          }
        }
      }

      :last-child {
        border: 0;
      }
    }
  }
  .bottom{
    padding: 60px 30px;
    .btn{
        width: 100%;
        height: 88px;
        border-radius: 44px;
        background: #BFBFBF;
        color: #fff;
        text-align: center;
        line-height: 88px;
        font-size: 40px;
        font-weight: bold;  
    }
    .btn.active{
        background: #F7241B;
    }
    .Tips{
        margin-top: 30px;
        font-size: 30px;
        display: flex;
        align-items: center;    
        justify-content: center;
        i{
            display: inline-block;
            width: 30px;
            height: 30px;
            background: url(../../../assets/img/customer.png);
            background-size: 100%;
            margin: 0 5px;
        }
        em{
            color:#F7241B;
        }
    }
  }

</style>
