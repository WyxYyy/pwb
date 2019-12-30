<template>
  <div class="totalAssets">
     <van-nav-bar @click-left="wantTo('my')" title="总资产" left-arrow right-text="交易明细" 
      @click-right="wantTo('transaction')"></van-nav-bar>
    <header>
        <div class="Assets">
            <div class="AssetsTop">
                <span>资产总额(元)</span>
                <i :class="isShowAssets?'open':'shut'" @click="isShowAssets = !isShowAssets"></i>
            </div>
            <div class="AssetsIndex">
                10000.00
            </div>
        </div>
        <div class="flex Profit">
            <div>
                <span>上月收益(元)</span>
                <em>
                    100.00
                </em>
            </div>
            <div @click="wantTo('totalRevenue')">
                <span>累计收益(元) <van-icon name="arrow" /></span>
                <em>
                    1000.00
                </em>
            </div>
            <div>
                <span>待回款(元)</span>
                <em>
                    10000.00
                </em>
            </div>
        </div>
    </header>
    <div class="tab " >
        <div class="tabBtn" @click="whoShow = 1">
            <span :class="whoShow == 1 ?'active':''">
                精选
            </span>
        </div>
        <div class="tabBtn" @click="whoShow = 2">
            <span :class="whoShow == 2 ?'active':''">
                转让    
            </span>
        </div>
    </div>
    <div class="bottom">
        <ul>
            <li @click="wantTo('moneyDetail')">
                <em> 
                    柳巷旺铺租赁权
                </em>
                <span>
                    待回
                    <b>10000</b>
                    <van-icon name="arrow" />
                </span>
            </li>
            <li>
                <em>
                    柳巷旺铺租赁权
                </em>
                <span>
                    待回
                    <b>10000</b>
                    <van-icon name="arrow" />
                </span>
            </li>
            <li>
                <em>
                    柳巷旺铺租赁权
                </em>
                <span>
                    待回
                    <b>10000</b>
                    <van-icon name="arrow" />
                </span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isShowAssets:true,
            whoShow:1
        }
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
    .van-nav-bar__text{
        color: #333;
        font-size: 26px;
    }
  }
  header{
      height: 355px;
      background: #fff;
      width: 100%;
      padding: 60px 30px;
      margin-bottom: 30px;
      .Assets{

          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          .AssetsTop{
              display: flex;
              align-items: center;
                color: #999;
              i{
                  margin-left: 40px;
                  width: 36px;
                  height: 36px;
                  display: inline-block;
                  background-image: url(../../../assets/img/login.png);
                  background-size: 180px 36px;
                  
              }
              i.open{
                  transition: all linear 0.5s;
                  background-position: -144px 0;
              }
              i.shut{
                  transition: all linear 0.5s;

                  background-position: -108px 0;
              }
          } 
          .AssetsIndex{
              font-size: 70px;
              color: #0081FF;
              font-weight: bold;
          }
      }
      .Profit{
          margin-top: 30px;;
          text-align: center;
          span{
              color: #999;
              font-size: 26px;
              display: block;
              margin-bottom: 10px;;
          }
          em{
              color: #333333;
              font-size: 44px;
              font-weight: bold;
          }
      }
      
  }
  .tab{
      height: 88px;
      width: 100%;
      background: #fff;
      margin-bottom: 30px;
      display: flex;
      .tabBtn{
          width: 50%;
          height: 100%;
          font-size: 30px;
          text-align: center;
          line-height: 88px;
          span{
              padding: 8px 0;
          }

          span.active{
            color: #0081FF;
            font-weight: bold;
            border-bottom: 5px solid #0081FF;
        }
      }
      
  }
  .bottom{
      padding: 0 30px;
      height: 100%;;
      ul{
          li{
              height:90px;
              background: #fff;
              margin-bottom: 30px;
            //   box-shadow:0px 1px 15px 0px rgba(220,232,244,0.6);
              border-radius:6px;
              padding: 0 30px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              em{
                  font-size: 34px;
                  color: #333;
              }
              span{
                  font-size: 26px;
                  color: #999;
                  display: flex;
                  align-items: center;
                  b{
                      color: #f7241b;
                      font-weight: 550;
                      display: inline-block;
                      margin: 0 0.5em;;
                  }
              }
          }
      }
  }
</style>