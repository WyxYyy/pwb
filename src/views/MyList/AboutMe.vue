<template>
  <div>
    <van-nav-bar @click-left='$router.go(-1)' title="关于我们" left-arrow></van-nav-bar>
  
    <img  src="../../assets/img/aboutMe.jpg" alt="">
  </div>
</template>

<script>
export default {

}
</script>
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
  .AboutMe{
      padding: 50px 30px;
      background: #fff;
      .paragraph{
          text-indent: 2em;
          font-size: 30px;
      }
  }
</style>
