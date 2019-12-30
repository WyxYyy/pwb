<template>
    <div>
        <van-nav-bar @click-left='$router.go(-1)' title="操作结果" left-arrow left-arrow></van-nav-bar>
        <div class="Result">
            <div class="success"  v-if="true">
                <img src="../../../assets/img/success.png" class="imgResult" alt="">
                <div class="titleResult">
                    交易成功
                </div>
                <div class="Price">
                    {{money}}
                </div>
            </div>   
        </div>
        <div class="bottom">
            <div class="btn" @click="wantTo('order')">
                返回我的订单
            </div>    
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            money: this.$route.params.money,

        }
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
  }
  .Result{
    padding: 60px 0 ;
    background: #fff;
    .success,.fail{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img.imgResult{
        width: 72px;
        height: 72px;
    }
    .titleResult{
        font-size: 30px;
        margin-top: 30px;
        margin-bottom: 20px;
        line-height: 1;
    }.Price{
        line-height: 1;
        font-size: 60px;
        font-weight: bold;  
    }
  }
  .bottom{
      padding: 40px 44px;   
      .btn{
          width: 100%;
          height: 88px;
          border-radius: 44px;
          text-align: center;
          line-height: 88px;
          border: 2px solid #F7241B;
          color: #F7241B;
          font-size: 30px;
      } 
  }
  
</style>    