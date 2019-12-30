<template>
  <div>
    <van-nav-bar @click-left='$router.go(-1)' title="提现结果" left-arrow></van-nav-bar>
    <div class="type">
        <div class="stateLeft">
            <i></i>
        </div>  
        <ul class="stateRight">
            <li>
                <span class="title">
                    提现申请已提交
                </span>
                <span class="content">
                    预计2018-12-11 &nbsp; 16:25到账
                </span>
            </li>
            <li>
                <span class="title active">
                    银行处理中
                </span>
                <span class="content">
                    中国银行(0023)     <em class="money">￥100.00</em>
                </span>
            </li>
            <li>
                <span class="title">到账成功</span>
            </li>
        </ul>
    </div>
    <footer>
        <div class="btn" @click="wantTo('MyWallet')">
            返回我的钱包
        </div>
    </footer>
  </div>
</template>

<script>
  export default {

  }

</script>

<style scoped lang='scss'>
  .type {
      background: #fff;
      padding: 50px 30px;
      display: flex;
      .stateLeft{
          width: 100px;
          height: 318px;
          text-align: center;
          
          i{
              display: inline-block;
              width: 40px;
              height: 318px;
              background-image: url(../../../assets/img/cash_pro.png);
              background-size: 80px 318px;
          }
      }
      .stateRight{
          width: 100%;
          height: 318px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          li{
              color: #999;
              .title{
                  font-size: 32px;
                  line-height: 32px;
                  display: block;
              }
              .title.active{
                  color: #333;
              }
              .content{
                  display: block;
                  margin-top: 19px;

                  font-size: 26px;
                .money{
                    color: #F63F37
                }
              }

          }
      }
  }
    footer{
        padding: 40px 44px;
        .btn{
            width: 100%;
            height: 80px;
            border-radius: 40px;
            border: 2px solid #F63F37;
            color: #F63F37;
            font-size: 30px;
            text-align: center;
            line-height: 80px;
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