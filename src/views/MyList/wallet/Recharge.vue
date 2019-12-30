<template>
  <div>
    <van-nav-bar @click-left='$router.go(-1)' title="余额充值" left-arrow></van-nav-bar>
    <!-- 未来使用 -->
    <div v-if="false">
      <div class="Recharge">
      <span class="title">
        充值金额
      </span>
      <div class="ipt">
        <span>
          ￥
        </span>
        <input type="number" v-model="moneyIndex" placeholder="请输入金额">
      </div>
      <span class="title">
        上传凭证
      </span>

      <div class="VoucherDiv">
        <div class="upload">
          <van-uploader v-model="fileList" multiple capture preview-size='90px' />
        </div>

      </div>
      <div class="btns">
        <div class="btn" v-if='fileList.length == 0 || moneyIndex == ""'>
          立即充值
        </div>
        <div class="btn active" v-else @click="wantTo('RechargeResult')">
          立即充值
        </div>
      </div>

    </div>

    <div class="Tips">
      <span>温馨提示：</span>
      <em>
        充值后可使用余额进行交易支付
      </em>
    </div>
    </div>
    

    <img v-else src="../../../assets/img/noData.jpg" alt="">
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        moneyIndex: '',
        fileList: [],
      }
    }
  }

</script>

<style lang='scss' scoped>
  .Recharge {
    padding: 40px 60px;
    background: #fff;

    .title {
      font-size: 30px;
      display: block;
      margin-top: 40px;
    }

    .ipt {
      padding: 30px 0;
      display: flex;
      align-items: center;
      border-bottom: 2px solid #DEDEDE;
      font-size: 50px;
      font-weight: bold;

      input {
        text-indent: 0.5em;
        font-size: 50px;
        border: 0;
        font-weight: 400;
      }

      input::-webkit-input-placeholder {
        color: #DEDEDE;
      }
    }


  }

  .btns {
    margin-top: 50px;
    ;

    .btn {
      width: 100%;
      height: 88px;
      border-radius: 44px;
      font-size: 32px;
      text-align: center;
      line-height: 88px;
      background: #D3D3D3;
      color: #fff;
      font-weight: bold;
    }

    .btn.active {
      background: #F7241B;
    }
  }

  .VoucherDiv {
    background-color: #FFFFff;
    margin-top: 30px;

    .Voucher {
      font-size: 26px;
      font-weight: 400;
      border-left: 4px solid red;
      padding-left: 10px;
      margin-bottom: 40px;
    }

    .upload /deep/ .van-uploader__upload {
      background: url(../../../assets/img/add.jpg);
      background-size: 100%;

      .van-uploader__upload-icon {
        font-size: 0;
      }
    }


  }

  .Tips {
    padding: 40px 60px;
    font-size: 24px;

    span {
      display: block;
      margin-bottom: 19px;
    }

    em {
      color: #999;
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