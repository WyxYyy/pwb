<template>
  <div>
    <van-nav-bar @click-left='$router.go(-1)' title="包租公指南" left-arrow style="font-size: 20px"></van-nav-bar>

    <img src="../../../assets/img/bzgGuide.jpg" alt="">
  </div>
</template>

<script>
  export default {

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

    .van-nav-bar__text {
      color: #333;
      font-size: 26px;
    }
  }

</style>
