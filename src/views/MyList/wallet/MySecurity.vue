<template>
  <div class="MySecurity">
    <van-nav-bar @click-left='$router.go(-1)' title="安全验证" left-arrow></van-nav-bar>
    <div class="Tips">
        <h1>
            验证支付密码
        </h1>
        <h5>
            请输入支付密码，以添加银行卡
        </h5>
        <!-- 密码输入框 -->
        <van-password-input :value="value" :gutter='9' :focused="showKeyboard" @focus="showKeyboard = true" />
        <h6>忘记密码？</h6>
    </div>
    

    <!-- 数字键盘 -->
    <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        showKeyboard: true
      }
    },


    methods: {
      onInput(key) {
        this.value = (this.value + key).slice(0, 6);
      },
      onDelete() {
        this.value = this.value.slice(0, this.value.length - 1);
      }
    }
  }

</script>

<style scoped lang='scss'>
  .MySecurity {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;

    .Tips{
        padding: 0 30px;
        padding-top: 150px;
        h1{
            font-size: 50px;
            line-height: 50px;
            margin-bottom: 25px;
        }
        h5{
            font-size: 28px;
            color: #999;
            margin-bottom: 165px;
        }
        /deep/ .van-password-input{
            margin: 0;
            ul{
                height: 100px;
                justify-content: space-between;
                li{
                    border: 2px solid #DBDBDB;
                }  
            }
            
        }
        h6{
            margin-top: 60px;
            text-align: center;
            font-size: 24px;
            color: #F7241B;
            font-weight: 400;
        }
    }
    /deep/ .van-number-keyboard{
        .van-hairline{
            height: 124px;
            line-height: 124px;
            font-size: 50px;
            
        }
        .van-key--gray{
            background: #EFEBEA;
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