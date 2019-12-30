<template>
  <div>
    <van-nav-bar  title="设置支付密码" left-arrow style="font-size: 20px"></van-nav-bar>
    <div class="setPay">
      <div class="title">
        设置6位支付密码
      </div>
      <div class="Tips">
        此密码将成为月付达人所有交易支付密码
      </div>
      <div class="whatPay">
        什么是支付密码？
      </div>
      <van-password-input :value="value" :mask='false' :focused="showKeyboard" @focus="showKeyboard = true"
        :gutter='9' />
      <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" extra-key='确认'
        @blur="showKeyboard = false" />

    </div>
  </div>
</template>

<script>
  import qs from 'qs'
  import {Toast} from 'vant';

  export default {
    data() {
      return {
        value: '',
        showKeyboard: false,
      }

    },
    methods: {
      
      onInput(key) {
        if (key == '确认') {
          if(this.value.length < 6){
              Toast('请输入完整的密码')
            
          }else{
            this.post(this.Interface.config.setPayPassword,{
            pay_password:this.value
          })
          }
          
        }else{
          this.value = (this.value + key).slice(0, 6);

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
           Toast(res.data.msg)
          if(res.data.code == 1){
            //  this.wantTo('index') 
            this.$router.go(-2)
          }
        })  
      },
    }
  }

</script>

<style lang='scss' scoped>
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

  .setPay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 0 60px;

    .title {
      font-size: 50px;
      line-height: 50px;
      padding-top: 80px;
    }

    .Tips {
      color: #999;
      font-size: 28px;
      line-height: 28px;
      margin-top: 28px;
    }

    .whatPay {
      color: #F7241B;
      font-size: 24px;
      margin-top: 59px;
      margin-bottom: 80px;
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
    /deep/ .van-number-keyboard {
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
