<template>
  <div>
    <van-nav-bar @click-left='$router.go(-1)' title="实名认证" left-arrow style="font-size: 20px"></van-nav-bar>
    <div class="ApplyBzg">
      <div class="title">
        请完成本人实名信息
      </div>
      <ul class="list">
        <li>
          <input type="text" placeholder="请输入本人姓名" v-model="name">
        </li>
        <li>
          <input type="text" placeholder="请输入本人身份证号" v-model="idCard">
        </li>
        <li>
          <input type="text" placeholder="请输入本人银行卡号" v-model="bank">
        </li>
        <li>
          <input type="text" placeholder="请输入银行预留手机号" v-model="phone">
        </li>
      </ul>
      <div class="Agreement">
        <van-checkbox v-model="checked">
          同意铺旺宝
          <router-link to='ServiceAgreement'>《服务协议》</router-link>
          以及
          <router-link to='Tips'>《重要提示》</router-link>

          <img slot="icon" slot-scope="props" :src="props.checked ? icon.active : icon.inactive">
        </van-checkbox>
      </div>
      <div :class='phone && name && idCard && bank && checked?"active nextStep":"nextStep"' @click="getYZM">
        下一步
      </div>
    </div>
    <van-popup v-model="isShow" position="bottom" closeable>
      <div class="yzm">
        <div class="Tips">
          <div class="TipsTitle">
            输入短信验证码
          </div>
          <div class="TipsPhone">
            验证码已发送至您的银行预留手机号
            <em>
              {{hidePhone}}
            </em>
          </div>
          <van-password-input :value="value" :mask='false' :focused="showKeyboard" @focus="showKeyboard = true"
            :gutter='9' />
          <div class="getYzm flex">
            <span v-if="isSecond"> {{second}}s 后可重新获取 </span>
            <span v-else @click="getYZM">
              重新发送
            </span>
            <em>
              收不到验证码？
            </em>
          </div>
        </div>

        <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" extra-key='确认'
          @blur="showKeyboard = false" />
      </div>

    </van-popup>
    <van-popup class="clickPopup" :close-on-click-overlay='false' overlay v-model="isComplete">
      <van-loading color="#F7241B" size='60px' />
    </van-popup>
  </div>
</template>

<script>
  import {Toast} from 'vant';
  import qs from 'qs'
  export default {
    data() {
      return {
        checked: false,
        icon: {
          active: require('../../../../assets/img/choice_select.png'),
          inactive: require('../../../../assets/img/choice.png')
        },
        phone: '',
        name: '',
        idCard: '',
        bank: '',
        isShow: false,
        value: '',      //输入的验证码
        showKeyboard: false,
        hidePhone: '',
        isSecond: false, //是否获取验证码
        second: '',
        isComplete: false, //是否加载完成


      }
    },
    methods: {
      getYZM() {
        if (this.phone && this.name && this.idCard && this.bank && this.checked) {
          
          this.hidePhone = this.phone.replace(this.phone.substring(3, 7), "****")
          this.isShow = true
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
            this.getPhoneYZM(qs.stringify({
              username: this.phone,
              is_captcha: 0
            }))
          }
        }
      },

      onInput(key) {
        this.value = (this.value + key).slice(0, 6);
        // 确认按钮
        if (key == '确认') {
          this.isComplete = true
          // setTimeout(() => {
          //   this.isComplete = false
          //   this.wantTo('setPay')
          // }, 1000)
          this.post(this.Interface.config.Auth,{
            identity_name:this.name,
            identity_mobile:this.phone,
            identity_bankcard:this.bank,
            identity_id:this.idCard,
            code:this.value
          })
        }
      },
      onDelete() {
        this.value = this.value.slice(0, this.value.length - 1);
      },
      post(apiUri,data,type) {
        let postData = qs.stringify(data)
        this.$axios({
          'url': apiUri,
          'method': 'post',
          'data': postData,
          headers: {
            'XX-Token': this.$cookieStore.getCookie('token'),
            'XX-Device-Type': 'mobile'
          }
        }).then((res) => {
            this.isComplete = false
            Toast(res.data.msg)
            console.log(res)
            console.log(res.data.code)
            if(res.data.code == 1){
              this.wantTo('setPay')
            }
        })  
      },
    },

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

  .ApplyBzg {
    padding: 0 60px;
    background: #fff;
    position: absolute;
    width: 100%;
    height: 100%;

    .title {
      font-size: 50px;
      padding-top: 80px;
    }

    .list {
      li {
        height: 171px;
        display: flex;
        align-items: center;
        border-bottom: 2px solid #EEEBEA;

        input {
          border: 0;
          font-size: 32px;
          color: #999;
        }

        ::-webkit-input-placeholder {
          /* WebKit browsers */
          color: #999;
        }
      }
    }

    .Agreement {
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

    .nextStep {
      width: 100%;
      height: 88px;
      border-radius: 44px;
      background: #DCDCDC;
      text-align: center;
      line-height: 88px;
      color: #fff;
      font-size: 32px;
      margin-top: 80px;
      ;
    }

    .active {
      background: #F7241B;
    }


  }

  /deep/.van-popup {
    .van-icon {
      font-size: 60px;
    }

    .yzm {
      padding-top: 142px;

      .Tips {
        padding: 0 30px;

        .TipsTitle {
          font-size: 40px;
          line-height: 40px;
          margin-bottom: 30px;
        }

        .TipsPhone {
          font-size: 28px;
          color: #999;
          margin-bottom: 60px;

          em {
            color: #333;
          }
        }

        .getYzm {
          height: 123px;
          font-size: 24px;
          align-items: center;

          span {
            color: #999999;
          }

          em {
            color: #F7241B;
          }
        }
      }
    }

    .van-password-input {
      margin: 0;
      padding: 0;

      .van-password-input__security {
        height: 100px;

        li {
          width: 100px;
          height: 100px;
          font-size: 50px;
          border: 2px solid #DBDBDB;
          text-align: center;
          line-height: 100px;
        }
      }
    }

    /deep/.van-number-keyboard {
      position: relative;

      .van-number-keyboard__body {
        .van-key {
          height: 124px;
          line-height: 124px;
          font-size: 50px;
        }

        .van-key--gray {
          background: #EFEBEA;
        }
      }
    }

  }

</style>
<style lang='scss'>
  .van-toast {
    font-size: 30px;
    width: auto;
    padding: 20px;
  }

  .clickPopup {
    background: rgba(0, 0, 0, 0);
    padding: 30px;
  }

</style>
