<template>
  <div class="MyWallet">
    <van-nav-bar @click-left="wantTo('my')" title="我的钱包" left-arrow right-text="我的银行卡" style="font-size: 20px"
      @click-right="wantTo('MyBank')"></van-nav-bar>
    <header class="flex">
      <div class="balance">
        <span>
          账户余额(元)
        </span>
        <em>
          0.00
        </em>
      </div>
      <div class="operation">
        <div class="Recharge" @click="wantTo('Recharge')">充 值</div>
        <div class="Cash" @click="wantTo('Cash')">提 现</div>
      </div>
    </header>
    <!-- <div class="dateSelect flex">
      <div class="time">
        <span class="dataShow">
          {{dataShow}}
        </span>
        <em class="Tips">
          支出￥2000.00 &nbsp;&nbsp; 收入￥100.00
        </em>
      </div>
      <i class="select" @click="show = true"></i>
    </div>
    <van-popup v-model="show" position="bottom" >

      <van-datetime-picker v-model="currentDate" type="year-month" :max-date="nowData" :min-date="minData"
        :formatter="formatter" @cancel="show = false" @confirm="confirmSelect" />
    </van-popup> -->
    <!-- <ul class="allList">
        <li class="list flex">
            <div class="listType">
                <span class="type">
                    余额充值
                </span>
                <span class="source">
                    [余额]
                </span>
                <span class="date">
                    12-01 &nbsp; 16:35
                </span>
            </div>
            <div class="listNumber">
                <span class="zheng">
                    +100
                </span>
            </div>
        </li>
    </ul> -->

  </div>
</template>

<script>
  export default {
    data() {
      return {
        dataShow: '2018-12',
        currentDate: new Date(),
        nowData: new Date(),
        minData: new Date(2015, 10, 1),
        show:false
      }
    },
    methods: {
      formatter(type, value) {
        if (type === 'year') {
          return `${value}年`;
        } else if (type === 'month') {
          return `${value}月`
        }
        return value;
      },
      confirmSelect(){
          this.show = false
          console.log(this.currentDate)
      }
    }
  }

</script>

<style scoped lang='scss'>
  .MyWallet {
    /deep/ .van-popup {
      .van-picker__columns{
        li{
          font-size: 40px;
        }
        
      }
      .van-picker__toolbar {
        height: 80px;;
        line-height: 80px;
        div{
          font-size: 32px;
          color: #F7241B;
        }
        .van-picker__cancel{
          color: #999;
        }
      }

    }
    /deep/ .van-nav-bar__text {
      color: #F7241B;
      font-size: 26px;
    }

    header {
      padding: 60px 30px;
      background: #fff;
      width: 100%;
      align-items: center;

      .balance {
        span {
          color: #999;
          display: block;
          font-size: 30px;
          margin-bottom: 30px;
        }

        em {
          font-size: 100px;
          line-height: 100px;
        }

      }

      .operation {
        div {
          width: 143px;
          height: 58px;
          line-height: 58px;
          text-align: center;
          font-size: 30px;
          border-radius: 50px;
        }

        :first-child {
          background: #F7241B;
          color: #fff;
          margin-bottom: 20px;
        }

        :last-child {
          border: 2px solid #999;
          color: #999;
        }
      }
    }

    .dateSelect {
      height: 100px;
      width: 100%;
      padding: 16px 30px;
      align-items: center;

      .time {
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        .dataShow {
          font-size: 30px;
        }

        .Tips {
          font-size: 24px;
          color: #999;
        }
      }

      .select {
        display: block;
        width: 44px;
        height: 44px;
        background-image: url(../../../assets/img/date.png);
        background-size: 44px;
      }
    }

    .allList{
        background: #fff;
        .list{
            padding: 30px;
            border-bottom: 2px solid #EEEBEA;
            height: 177px;
            .listType{
                display: flex;
                flex-direction: column;
                height: 100%;
                justify-content: space-between;
                .type{
                    font-size: 30px;
                }
                .source{
                    font-size: 26px;
                }
                .date{
                    font-size: 24px;
                    color: #999;
                }
            }
            .listNumber{
                font-size: 34px;
                font-weight: bold;
                .active{
                    color: #F7241B;
                }
            }
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