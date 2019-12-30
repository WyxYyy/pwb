<template>
  <div>
    <van-nav-bar @click-left='wantTo("my")' title="产品详情" left-arrow style="font-size: 20px"></van-nav-bar>
    <header class="Modular">
      <div class="headerTitle">
        <img src="../../../assets/img/pwb_recommend.png" class="titleImg" alt="">
        柳巷王萍面皮租赁权
        <span>
          <i>热门商圈</i>
          <i>人流量大</i>
        </span>

      </div>
      <div class="detailData">
        <!-- 年化 -->
        <div class=" detailDataDiv">
          <b>9.9564%</b>
          <em>
            年化利率
          </em>
        </div>
        <div class=" detailDataDiv">
          <strong>12个月</strong>
          <em>
            租赁权期限
          </em>
        </div>
      </div>
      <ul class="still">
        <li>购买金额 <i>20</i> 万 </li>
        <li>剩余可买 <i>10</i> 万 </li>
        <li>起买金额 <i>1</i> 万 </li>
      </ul>
      <div class="buy">
        预约购买
      </div>
    </header>
    <div class="Modular rule">
      <div class="title">
        交易规则
      </div>
      <div class="process">
        <img class="ruleImg" src="../../../assets/img/rule.png" alt="">
        <ul class="flex">
          <li>
            <em>今日</em>
            <span>预约购买</span>
          </li>
          <li>
            <em>明日</em>
            <span>预计成交</span>
          </li>
          <li>
            <em>
              5-20
            </em>
            <span>产生收益</span>
          </li>
          <li>
            <em>2020-4-15</em>
            <span>产品到期</span>
          </li>
        </ul>
        <p>
          <van-icon color='#0081FF' size='7px' name="circle" />
          购买后不可撤销，到期前不可取消
        </p>
        <p>
          <van-icon color='#0081FF' size='7px' name="circle" />
          本金与收益按月自动到账钱包账户余额
        </p>
      </div>
    </div>
    <div class="Modular Explain">
      <div class="title">
        本金利息说明
      </div>
      <div class="msg">
        本产品16:00之前购买，次日计息，16:00之后购买，后两天开始计息，本金与利息按月回款，可提现。
      </div>
    </div>
    <div class="Modular ">
      <div class="title">
        购买流程
      </div>
      <div class="buyProcess">
        <img src="../../../assets/img/process.png" alt="">

      </div>
    </div>
    <div class="Modular archives flex">
      <span class="">
        产品档案
      </span>
      <van-icon name="arrow" />
    </div>
    <div class="Modular  problem">
      <div class="archives flex">
        <span class="">
          常见问题
        </span>
        <span>
          查看更多
          <van-icon name="arrow" />
        </span>
      </div>
      <van-collapse v-model="activeName" accordion  >
        <van-collapse-item title="购买后除了得收益还有什么福利？" title-class='problemTitle' name="1">内容</van-collapse-item>
        <van-collapse-item title="为什么买入后一直看不到收益？" title-class='problemTitle' name="2">内容</van-collapse-item>
        <van-collapse-item title="为什么要先充值余额再进行购买？" title-class='problemTitle' name="3">内容</van-collapse-item>
      </van-collapse>

    </div>
    <footer>
      <div class="service">
        <img src="../../../assets/img/content.png" @click="callService">
      </div>
      <p>万融通达担保 · 多重保障 · 收益稳健</p>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: '0'
      }
    },
    methods:{
      callService(){
        window.location.href = 'tel://' + '4009606168'
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

  .Modular {
    padding: 40px 30px;
    background: #fff;
    margin-bottom: 30px;

    .title {
      font-size: 34px;
      margin-bottom: 40px;
    }
  }

  header {
    .headerTitle {
      display: flex;
      align-items: center;
      font-size: 30px;
      font-weight: bold;

      .titleImg {
        width: 120px;
        height: 44px;
        margin-right: 15px;
      }

      span {
        padding-left: 10px;

        i {
          font-weight: 400;
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

    .detailData {
      display: flex;
      margin-top: 10px;

      .detailDataDiv:first-child {
        padding-right: 40px;
      }

      .detailDataDiv:last-child {
        padding-left: 40px;
      }

      .detailDataDiv {

        b,
        strong {
          font-size: 60px;
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

    .still {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;

      li {
        border-right: 1px solid #efefef;
        width: 33%;
        font-size: 26px;
        text-align: center;
        color: #333333;

        i {
          font-size: 40px;
          color: #F7241B;
        }
      }

      li:last-child {
        border: 0;
      }
    }

    .buy {
      margin-top: 50px;
      width: 100%;
      text-align: center;
      height: 80px;
      line-height: 80px;
      background: #0081FF;
      border-radius: 40px;
      color: #fff;
      font-size: 32px;
      font-weight: bold;

    }
  }

  .rule {
    .process {
      text-align: center;

      .ruleImg {
        width: 590px;
        height: 20px;
      }

      .flex {
        margin-top: 20px;
        ;
        margin-bottom: 40px;

        li {
          text-align: center;
          width: 19%;

          em {
            font-size: 24px;
            color: #999;
            display: block;
          }

          span {
            font-size: 30px;
          }
        }

      }

      p {
        display: block;
        text-align: left;
        margin-bottom: 25px;
        color: #999999;
        font-size: 26px;
        display: flex;
        align-items: center;

        /deep/ .van-icon {
          margin-right: 10px;
          font-size: 14px;
          font-weight: bold;
        }
      }

      p:last-child {
        margin: 0;
      }
    }
  }

  .Explain {
    .msg {
      font-size: 26px;
      line-height: 40px;
    }
  }

  .buyProcess {
    text-align: center;

    img {
      width: 100%;
    }
  }

  .archives {
    align-items: center;

    span:first-child {
      font-size: 34px;
    }

    span:last-child {
      display: flex;
      align-items: center;
      font-size: 26px;
      color: #999;

    }

    .van-icon {
      font-size: 30px;
    }
  }

  .problem {
    /deep/ .van-collapse {
      margin-top: 40px;
      border-top: 2px solid #efefef;
       .problemTitle{
         font-size: 30px;
         color: #333;
       }
      .van-collapse-item {
       
        .van-collapse-item__title{
          height: 114px;;
          display: flex;
          align-items: center;
        }

        
        .van-collapse-item__wrapper{
          .van-collapse-item__content{
          }
        }
      }
    }
  }

  footer {
    padding-top: 10px;

    .service {
      width: 280px;
      height: 70px;
      margin: 0 auto;
      margin-bottom: 30px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    p {
      color: #BABABA;
      text-align: center;
      padding-bottom: 20px;
      ;
    }
  }

</style>
