<template>
  <div>
    <div style="height:50px"></div>
    <van-nav-bar @click-left='$router.go(-1)' left-arrow fixed>
      <i slot="right" class="share"></i>
    </van-nav-bar>
    <header>
      <h1>
        站内通知消息标题
      </h1>
      <em>
        2019-05-21 10:00
      </em>
    </header>
    <div class="Article">

      恭喜您！续约申请已成功提交，通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容...
      恭喜您！续约申请已成功提交，通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容...
      恭喜您！续约申请已成功提交，通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容...
      恭喜您！续约申请已成功提交，通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容...
      恭喜您！续约申请已成功提交，通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容...
      恭喜您！续约申请已成功提交，通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容...



    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang='scss' scoped>
  

  header {
    background: #fff;
    padding: 0 30px;
    ;
    padding-top: 50px;

    h1 {
      font-size: 50px;
      display: block;
    }

    em {
      color: #999;
      font-size: 26px;
    }
  }

  .Article {
    padding: 50px 30px;
    font-size: 32px;
    background: #fff;
    line-height: 50px;
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