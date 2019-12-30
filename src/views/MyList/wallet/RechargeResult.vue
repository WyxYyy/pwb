<template>
  <div class="RechargeResult">
    <van-nav-bar @click-left='$router.go(-1)' title="余额充值" left-arrow right-text="完成" style="font-size: 20px"
      @click-right="wantTo('My')">
      </van-nav-bar>
    <div class= "Recharge">
        <img src="../../../assets/img/success.png" class="type" alt="">
        <span class="typeText">
            上传成功，等着吧！
        </span>
        <b class="moneyIndex">
            100.00
        </b>
    </div>
    <footer class="flex">
        <div class="btn" @click="wantTo('MyWallet')">
            返回我的钱包
        </div>
        <div class="btn" @click="wantTo('MyBill')">
            返回我的账单
        </div>
    </footer>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang='scss' scoped>
    .RechargeResult{
        /deep/ .van-nav-bar__text {
            color: #F7241B;
            font-size: 26px;
        }
        .Recharge{
            padding: 60px 0;
            background: #fff;
            justify-content: center;
            text-align: center;
            .type{
                width: 72px;
                height: 72px;
                margin-bottom: 30px;
            }
            .typeText{
                font-size: 30px;
                display: block;
                margin-bottom: 10px;;
            }
            .moneyIndex{
                font-size: 56px;
                line-height: 56px;
            }
        }
        footer{
            padding: 40px 45px;
            align-items: center;
            .btn{
                width: 315px;
                height: 80px;
                border: 2px solid #F7241B;
                color: #F7241B;
                text-align: center;
                line-height: 80px;
                font-size: 30px;
                border-radius: 40px;
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