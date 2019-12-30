<template>
  <div class="riskTips">
    <van-nav-bar @click-left='$router.go(-1)' title="风险提示" left-arrow left-arrow></van-nav-bar>
    <header>
      风险提示书
    </header>
    <div class="content">
      <h1>
        致尊敬的铺旺宝平台用户：
      </h1>
      <div class="Article">
        鉴于房屋租赁交易过程中，可能面临多种风险因素，铺旺宝平台特此温馨提示，在进行房屋租赁交易前，请您仔细阅读以下风险内容。本风险提示书经您签署，即视为您已详细了解并理解本风险提示书的全部内容，对其中提示的风险均有足够的认识，并自愿承担参与房屋租赁可能面临的风险及法律责任：
      </div>
      <ol>
        <li class="Article">
          <span class="title">
            1.政策风险：
          </span>
          因网络房屋租赁是基于当前的国家宏观政策及相关法律法规所设计。如国家宏观政策（如财政政策、货币政策、行业政策、地区发展政策）以及市场相关法律法规发生变化，可能会导致面临损失。
        </li>
        <li class="Article">
          <span class="title">
            2. 流动性风险：
          </span>
          在房屋租赁期间，租赁各方无正当理由及合法依据不得提出终止。
        </li>
        <li class="Article">
          <span class="title">
            3. 流标风险：
          </span>
          如自信息发布并开始接受投标时起至约定的投标截止日止，项目仍未满标，根据相关法律法规以及政策，该项目存在流标的风险。
        </li>
        <li class="Article">
          <span class="title">
            4. 不可抗力风险：
          </span>
          因战争、自然灾害、重大政治事件、电脑病毒爆发等不可抗力，以及其他不可预见的意外事件，或其他可能导致面临损失的任何风险。
        </li>
      </ol>
      <div class="Article">
        您在做出决定、签署各项协议之前应全面阅读本《风险提示书》，并认真阅读铺旺宝平台内各项协议以及公布的各项规则的全部内容。同时，您需要了解相关项目的基本情况、风险与收益状况，铺旺宝平台提供的各种信息及资料仅供参考，您应独立判断并自行作出决策，并承担可能的风险。您知悉铺旺宝平台仅作为房屋租赁信息中介机构进行信息发布，不对您及/或您的任何交易提供任何担保，包括但不限于明示、默示或法定的担保。
      </div>
      <div class="Article">
        您知悉铺旺宝平台仅作为房屋信息中介机构，相关人员不得从事或者接受委托从事下列活动：
      </div>
      <ol>
        <li class="Article">
          1、捏造散布涨价信息，或者与房地产开发经营单位串通捂盘惜售、炒卖房号，操纵市场价格;
        </li>
        <li class="Article">
          2、对交易当事人隐瞒真实的房屋交易信息，低价收进高价卖(租)出房屋赚取差价; 
        </li>
        <li class="Article">
          3、以隐瞒、欺诈、胁迫、贿赂等不正当手段招揽业务，诱骗消费者交易或者强制交易;
        </li>
        <li class="Article">
          4、泄露或者不当使用委托人的个人信息或者商业秘密，谋取不正当利益;
        </li>
        <li class="Article">
          5、为交易当事人规避房屋交易税费等非法目的，就同一房屋签订不同交易价款的合同提供便利;
        </li>
        <li class="Article">
          6、改变房屋内部结构分割出租;
        </li>
        <li class="Article">
          7、为不符合交易条件和禁止交易的房屋提供经纪服务; 
        </li>
        <li class="Article">
          8、法律、法规禁止的其他行为。
        </li>
      </ol>
      <div class="flex">
        <div class="btn no" @click="$router.go(-1)">不同意</div>
        <div class="btn yes" @click="post">同意</div>
      </div>
    </div>
  </div>
</template>

<script>
  import qs from 'qs'
 import { Toast } from 'vant';
  export default {
    data() {
      return {
        id: this.$route.params.id
      }
    },
    methods: {
      post() {
        let postData = qs.stringify({
            house_id:this.id
        })
        this.$axios({
          'url': this.Interface.config.newhandsel,
          'method': 'post',
          'data': postData,
          headers: {
            'XX-Token': this.$cookieStore.getCookie('token'),
            'XX-Device-Type': 'mobile'
          }
        }).then((res) => {
          if(res.data.code == 1){
              this.wantTo('order')
          }else{
            Toast.fail(res.data.msg);

          }
        })
      }
    },
    mounted() {

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

  .riskTips {
    background: #fff;
  }

  header {
    font-size: 50px;
    padding: 30px;
    text-align: center;
  }

  .content {
    padding: 0 30px;

    h1 {
      font-size: 34px;
      font-weight: bold;
    }

    .Article {
      padding: 10px 0;
      text-indent: 2em;
      font-size: 30px;
      line-height: 36px;

      .title {
        font-weight: bold;

      }
    }

    .flex {
      height: 100px;
      align-items: center;

      .btn {
        height: 88px;
        border-radius: 44px;
        width: 300px;
        text-align: center;
        line-height: 88px;
        font-size: 40px;
      }

      .btn.no {
        border: 2px solid #F7241B;
        color: #F7241B;
      }

      .btn.yes {
        background: #F7241B;
        color: #fff;
      }
    }
  }

</style>
