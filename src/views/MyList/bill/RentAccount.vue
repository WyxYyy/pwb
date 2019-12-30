<template>
  <div class="RentAccount">
    <van-nav-bar
      title="交租账号"
      left-arrow
      @click-left='$router.go(-1)'
    />
    <div class="TipsDiv">
          <span class="Tips">
    提示：需要您自行转账交租，交易完成后保留截图，再返回 此页上传凭证。
    </span>
    </div>
    <div class="contentDiv">
      <div class="ShouldHand">
        <div>
          <span class="ColorGray">本月应交(元)</span>
          <span class="ColorRed">1000.00</span>
        </div>
        <div>
          <span class="ColorGray">交租账户</span>
          <em class="BankNum">
            <span>621660856666245980</span>
            <span class="Bank">
              <i></i>
              中国银行
            </span>
          </em>

        </div>
        <div>
          <span class="ColorGray">账户姓名</span>
          <span>刘先生</span>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
    <div class="VoucherDiv">
      <h1 class="Voucher">上传凭证</h1>
      <div class="upload">
        <van-uploader v-model="fileList" multiple capture	preview-size='90px'  />
      </div>
    </div>
    <div class="ButtonDiv">
      <button class="Export" @click="wantTo('uploadResult')">确定上传</button>
    </div>

  </div>

</template>

<script>
    export default {
        name: "RentAccount",
        data() {
            return {
                fileList: [],

            }
        },
        methods:{
          
        }
    }
</script>

<style scoped lang="scss">
  /*内容*/
  .TipsDiv {
    background: #F4F4F4;
    padding: 24px 30px;
    .Tips {
      color: #F7241B;
      font-size: 26px;
      font-weight: 400;
      line-height: 46px;

    }
  }
  .contentDiv {
    background-color: #FFFFff;
    padding: 0 30px;
    margin-bottom: 30px;
    .ShouldHand {
      font-size:30px;
      font-weight:400;
      div {
        border-bottom: 2px solid #EEEBEA;
        padding: 34px 0;
        display: flex;
        justify-content: space-between;
        .BankNum {
          display: flex;
          flex-direction: column;
          text-align:right;
          .Bank {
            color: #666666;
            font-size: 24px;
            font-weight: 400;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            i{
              display: inline-block;
              width: 30px;
              height: 30px;
              margin-right: 12px;
              background-image: url('../../../assets/img/bank_logo.jpg');
              background-size: 270px 60px;
              background-position: 0 0;
            }


          }
        }
      }
    }
    .ShouldHand>div :last-child{
      font-weight: bold;
      font-size: 34px;
    }
  }
  .VoucherDiv {
    background-color: #FFFFff;
    padding: 40px 30px;
    margin-bottom: 30px;

    .Voucher {
      font-size:26px;
      font-weight:400;
      border-left: 4px solid red;
      padding-left: 10px;
      margin-bottom: 40px;
    }
    .upload /deep/ .van-uploader__upload{
        background:url(../../../assets/img/add.jpg);
        background-size: 100%;
        .van-uploader__upload-icon{
          font-size: 0;          
        }
      }
    

  }
  .ButtonDiv {
    margin: 30px 30px 0 30px;
    .Export {
      width: 690px;
      height: 88px;
      background: #F7241B;
      border: none;
      border-radius:44px;
      color: #FFFFFF;
      font-size:32px;
      font-weight:bold;
      margin: 16px 0;

    }
  }
  /*图片上传插件*/
  
  /*单属性class*/
  .ColorRed {
    color: #F7241B;
  }
  .ColorGray {
    color: #999999;
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