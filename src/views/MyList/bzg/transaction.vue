<template>
  <div class="transaction">
    <van-nav-bar @click-left="wantTo('my')" title="交易明细" left-arrow>
      <span class="headerRight" @click="screen" slot="right">筛选<img src="../../../assets/img/arrow_lower.png" /></span>
    </van-nav-bar>
    <div class="monthModular">
      <div class="month">
        <span class="monthDate">
          2018-12
        </span>
        <p>
          支出 ￥2000.00
          &nbsp;&nbsp;
          收入 ￥100.00
        </p>
      </div>
      <ul>
        <li class="flex Record">
          <div class="RecordAbout">
            <span class="title">
              余额充值
            </span>
            <span class="purpose">
              [余额]
            </span>
            <em class="time">
              12-01 16:35
            </em>
          </div>
          <span class="RecordIndex">+1000</span>
        </li>
        <li class="flex Record">
          <div class="RecordAbout">
            <span class="title">
              余额充值
            </span>
            <span>
              [余额]
            </span>
            <em class="time">
              12-01 16:35
            </em>
          </div>
          <span class="RecordIndex">-1000</span>
        </li>
        <li class="flex Record">
          <div class="RecordAbout">
            <span class="title">
              余额充值
            </span>
            <span>
              [余额]
            </span>
            <em class="time">
              12-01 16:35
            </em>
          </div>
          <span class="RecordIndex active">+1000.00</span>
        </li>
      </ul>
    </div>

    <van-popup v-model="show" position="top" :style="{ height: '135px' }" >
        <ul class="screen">
            <li v-for="item,index in screenList" :key="index" @click="screenCondition(index)" :class="whoActive == index?'active':''">{{item}}</li>
        </ul>
    </van-popup>
  </div>
</template>

<script>
  import {
    Popup
  } from 'vant';
  export default {
    data() {
      return {
        show: false,
        screenList:[
            '全部',
            '充值',
            '提现',
            '交租',
            '买入卖出',
            ''
        ],
        whoActive:0
      }
    },
    methods: {
      screen() {
        console.log(123)
        this.show = !this.show
      },
      screenCondition(index){
          console.log(index)
          this.whoActive = index;
          this.show = false
      }
    }
  }

</script>

<style lang='scss' scoped>
    /deep/ .van-popup {
        padding: 50px 30px;
        .screen{
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li{
                width: 220px;
                height: 70px;
                border-radius:35px;
                font-size: 30px;
                border:2px solid rgba(210,210,210,1);
                text-align: center;
                line-height: 70px;
                margin-bottom: 30px;;
            }
            li.active{
                border: 0;
                background: #F7241B;
                color: #fff;
            }
            li:last-child{
                opacity: 0;
            }
        }
    }
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

    .headerRight {
      font-size: 26px;

      img {
        width: 20px;
        margin-left: 10px;
        ;
      }
    }
  }

  .monthModular {
    .month {
      padding: 16px 30px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: 100px;

      span {
        font-size: 30px;
        color: #333;
      }

      p {
        font-size: 24px;
        color: #999;
      }
    }

    .Record {
      height: 177px;
      width: 100%;
      padding: 30px;
      background: #fff;
      border-bottom: 2px solid #EEEBEA;

      .RecordAbout {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .title {
          font-size: 30px;
        }
      }

      .RecordIndex {
        font-size: 34px;
        font-weight: bold;
      }

      .RecordIndex.active {
        color: #F7241B;
      }
    }

    .Record:last-child {
      border: 0;
    }

  }

</style>
