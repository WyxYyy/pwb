<template>
  <div>
    <van-nav-bar @click-left='wantTo("my")' title="包租公" left-arrow style="font-size: 20px"></van-nav-bar>
    <div class="bzg">
      <div class="header">
        <img class="Recommend" src="../../../assets/img/pwb_recommend.png" alt="">
        <div class="title">
          柳巷旺铺租赁权
        </div>
        <div class="detail">
          <div class="interest ">
            <span>
              <b>9.9564</b>%
            </span>
            <em>年化利率</em>
          </div>
          <div class="date">
            <span>
              <b>12</b>个月
            </span>
            <em>
              租赁权期限
            </em>
          </div>
        </div>
        <div class="appointment">
          立即预约，赚取收益
        </div>
      </div>
      <div class="poster" @click="wantTo('bzgGuide')">
        <img src="../../../assets/img/guide_buy.png" alt="">
      </div>
      <div class="listBox">
        <div class="listTitle">
          <b>
            年度精选
          </b>
          <em>
            收益稳健 值你信赖
          </em>
        </div>
        <div class="list" v-for="item,index in list">
          <div class="listTop">
            柳巷旺铺租赁权
            <span>
              <i>热门商圈</i>
              <i>人流量高</i>
            </span>
          </div>
          <div class="listDetail flex">
            <div class="listDetailData">
              <!-- 年化 -->
              <div class=" listDetailDataDiv">
                <b>9.9564%</b>
                <em>
                  年化利率
                </em>
              </div>
              <div class=" listDetailDataDiv">
                <strong>12个月</strong>
                <em>
                  租赁权期限
                </em>
              </div>

            </div>
            <div class="gotoBuy" @click="wantTo('bzgDetail')">
              去购买
            </div>
          </div>
        </div>
      </div>
      <div class="listBox">
        <div class="listTitle">
          <b>
            租赁权转让  
          </b>
          <em>
            收益稳健 值你信赖
          </em>
        </div>
        <div class="list" v-for="item,index in list">
          <div class="listTop">
            柳巷旺铺租赁权
            <span>
              <i>热门商圈</i>
              <i>人流量高</i>
            </span>
          </div>
          <div class="listDetail flex">
            <div class="listDetailData">
              <!-- 年化 -->
              <div class=" listDetailDataDiv">
                <b>9.9564%</b>
                <em>
                  年化利率
                </em>
              </div>
              <div class=" listDetailDataDiv">
                <strong>12个月</strong>
                <em>
                  租赁权期限
                </em>
              </div>

            </div>
            <div class="gotoBuy" @click="wantTo('bzgDetail')">
              去购买
            </div>
          </div>
        </div>
      </div>
      <footer>
          <div class="footerTitle">
              铺旺宝 · 包租公
          </div>
          <p>万融通达担保 · 多重保障 · 收益稳健</p>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
      data(){
          return{
              list:[{},{}]
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

    .van-nav-bar__text {
      color: #333;
      font-size: 26px;
    }
  }

  .bzg {
    padding: 30px;

    .header {
      width: 100%;
      height: 367px;
      background: #fff;
      border-radius: 6px;
      position: relative;
      padding: 0 30px;
      padding-top: 66px;

      .Recommend {
        width: 130px;
        height: 50px;
        position: absolute;
        top: 0;
        left: 0;
      }

      .title {
        font-size: 36px;
        text-align: center;
      }

      .detail {
        display: flex;
        padding-top: 30px;
        justify-content: space-around;

        div {
          text-align: center;

          span {
            font-weight: bold;
            font-size: 26px;
            color: #F7241B;
            display: block;

            b {
              font-size: 50px;
            }
          }

          em {
            font-size: 26px;
            color: #999;
          }
        }
      }

      .appointment {
        margin-top: 15px;
        ;
        width: 100%;
        height: 80px;
        background: #0081FF;
        text-align: center;
        line-height: 80px;
        color: #fff;
        font-size: 30px;
        border-radius: 40px;
        font-weight: bold;
      }
    }

    .poster {
      width: 100%;
      height: 150px;
      margin: 30px 0;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .listBox {
      .listTitle {
        padding: 30px 0;

        b {
          font-size: 36px;
          font-weight: 550;
        }

        em {
          font-size: 26px;
          color: #999;
        }
      }

      .list {
        padding: 40px 30px;
        border-radius: 6px;
        width: 100%;
        height: 230px;
        background: #fff;
        margin-bottom: 20px;;

        .listTop {
          font-size: 30px;
          display: flex;
          align-items: center;

          span {
            padding-left: 10px;

            i {
              display: inline-block;
              width: 98px;
              height: 30px;
              text-align: center;
              font-size: 20px;
              background: #F6F6F6;
              margin-left: 10px;
            }
          }

        }

        .listDetail {
          align-items: center;
          margin-top: 30px;

          .listDetailData {
            display: flex;

            .listDetailDataDiv:first-child {
              border-right: 2px solid #efefef;

              padding-right: 40px;
            }

            .listDetailDataDiv:last-child {
              padding-left: 40px;
            }

            .listDetailDataDiv {

              b,
              strong {
                font-size: 44px;
                font-weight: bold;
              }

              b {
                color: #F7241B;
              }

              strong {
                color: #333;
              }

              em {
                font-size: 26px;
                color: #999;
                display: block;
              }
            }
          }

          .gotoBuy {
            border: 3px solid #0081FF;
            border-radius: 30px;
            height: 60px;
            text-align: center;
            line-height: 60px;
            color: #0081FF;
            font-size: 28px;
            font-weight: bold;
            width: 156px;
          }
        }
      }
    }
    footer{
        margin-top: 90px;
        .footerTitle{
            color: #999;
            font-size: 36px;
            text-align: center;
            margin-bottom: 10px;;
        }
        p{
            color: #BABABA;
            text-align: center;
            padding-bottom: 20px;;
        }
    }
  }

</style>
