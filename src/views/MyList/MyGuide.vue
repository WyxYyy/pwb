<template>
  <div>
    <van-nav-bar @click-left='$router.go(-1)' title="月付指南" left-arrow style="font-size: 20px"></van-nav-bar>

      <img class="MyGuide" src="../../assets/img/guide.jpg" alt="">
  </div>
</template> 

<script>
export default {

}
</script>

<style scoped lang='scss'>
    .MyGuide{
        width: 100%;
        height: 100%;
        display: block;
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