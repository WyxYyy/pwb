<template>
    <div>
        <van-nav-bar @click-left='$router.go(-1)' title="合同签署" left-arrow left-arrow></van-nav-bar>
        
        <footer>
            <div class="btn no">拒签</div>
            <div class="btn yes">签署</div>
        </footer>
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
  }
  footer{
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0 30px;
    bottom: 0;
    background: #fff;
    .btn{
        width: 330px;
        height: 88px;
        border-radius: 44px;
        text-align: center;
        line-height: 88px;
    }
    .btn.no{
        border:2px solid rgba(247,36,27,1);
        color: #F7241B;
    }
    .btn.yes{
        background : #F7241B;
        color: #fff;
    }
  }
</style>