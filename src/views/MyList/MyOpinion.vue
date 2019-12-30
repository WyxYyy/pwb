<template>
  <div>
    <van-nav-bar @click-left='$router.go(-1)' title="意见反馈" left-arrow></van-nav-bar>
    <div v-if="false">
        <div class="title">
        我要反馈
      </div>
      <div class="Opinion">
        <van-field v-model="message" type="textarea" placeholder="请输入您宝贵的意见、建议或问题..." rows="10" autosize />
      </div>
      <div class="title">
        联系方式
      </div>
      <div class="phone">
        <input type="number " v-model="phone" placeholder="请留下您的手机号">
      </div>
      <div class="btns">
        <div class="btn" v-if='phone == "" || message == ""'>
          提 交
        </div>
        <div class="btn active" v-else @click="">
          提 交
        </div>
      </div>
    </div>
    <img v-else src="../../assets/img/noData.jpg" alt="">
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: '',
        phone: ''
      }
    }
  }

</script>

<style scoped lang='scss'>
  .title {
    height: 88px;
    line-height: 88px;
    padding: 0 30px;
    font-size: 32px;
  }

  .Opinion {
    background: #fff;
    width: 100%;

    /deep/ .van-cell {
      padding: 30px 30px;
      line-height: 35px;
      font-size: 30px;
    }
  }

  .phone {
    height: 100px;
    background: #fff;
    width: 100%;

    input {
      font-size: 30px;
      width: 100%;
      height: 100%;
      text-indent: 30px;
      border: 0;
    }
  }


  .btns {
    padding: 60px;

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