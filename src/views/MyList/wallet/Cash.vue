<template>
  <div>
    <van-nav-bar @click-left='$router.go(-1)' title="余额提现" left-arrow></van-nav-bar>
    <div v-if="false">
          <div class="selectBank">
          <span class="title">
            到账银行卡
          </span>
          <div class="bankInformation">
            <i></i>
            <span>
              中国银行储蓄卡(1234)
            </span>
            <em>
              2小时到账
            </em>
          </div>
        </div>
        <div class="Cash">
          <div class="title">
            提现金额
          </div>
          <div class="ipt">
            <span>
              ￥
            </span>
            <input type="number" v-model="CashMoney" placeholder="请输入金额">
          </div>
          <div class="flex">
            <span>
              可用余额 {{moneyIndex}}元
            </span>
            <em @click="CashMoney = moneyIndex">
              全部提现  
            </em>
          </div>
          <div v-if="withdraw" class="btn">
            确认提现
          </div>
          <div v-else class="btn active" @click="wantTo('CashResult')">
            确认提现
          </div>
        </div>
    </div>
    

    <img v-else src="../../../assets/img/noData.jpg" alt="">
  </div>
</template>

<script>
  export default {
    data(){
      return{
        moneyIndex:'100.00',
        CashMoney:''
      }
    },
    computed:{
      withdraw(){
        return this.CashMoney == '' || (parseFloat(this.CashMoney) > parseFloat(this.moneyIndex))
      }
    }
  }

</script>

<style scoped lang='scss'>
  .title {
    font-size: 30px;
  }

  input::-webkit-input-placeholder {
    color: #DEDEDE;
  }

  .selectBank {
    height: 170px;
    padding: 30px 60px;
    display: flex;
    flex-direction: column;
    background: #fff;
    justify-content: space-between;
    margin-bottom: 30px;

    .bankInformation {
      display: flex;
      align-items: center;

      i {
        display: block;
        width: 30px;
        height: 30px;
        margin-right: 12px;
        background-image: url(../../../assets/img/bank_logo.jpg);
        background-size: 504px 112px;
      }

      span {
        font-size: 26px;
      }

      em {
        display: block;
        margin-left: 20px;
        font-size: 22px;
        color: #999;
      }
    }
  }

  .Cash {
    padding: 60px;
    padding-bottom: 30px;
    background: #fff;

    .ipt {
      margin-top: 20px;
      padding: 40px 0;
      display: flex;
      align-items: center;
      border-bottom: 2px solid #EFEFEF;

      span {
        font-size: 50px;
        font-weight: bold;
      }

      input {
        font-size: 50px;
        line-height: 50px;
        text-indent: 0.5em;
        border: 0;
      }
    }
    .flex{
      padding: 20px 0;
      font-size: 26px;
      span{
        color: #999;
      }
      em{
        color: #F7241B;
      }
    }
    .btn{
      margin-top: 40px;
      width: 100%;
      height: 88px;
      border-radius: 44px;
      background: #D3D3D3;
      color: #FFFFFF;
      font-size: 32px;
      text-align: center;
      line-height: 88px;
      font-weight: bold;
    }
    .btn.active{
      background: #F7241B;
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