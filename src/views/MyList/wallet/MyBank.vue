<template>
    <div class="MyBank">
        <van-nav-bar @click-left='$router.go(-1)' title="银行卡" left-arrow></van-nav-bar>
        
    <div v-if="false">
        <div class="bank">
            <div class="bankList">
                <h1>中国银行</h1>
                <h3 class="flex">
                    <span>****</span>
                    <span>****</span>
                    <span>****</span>
                    <span>1234</span>
                </h3>
            </div>
        </div>
        <div class="addBank" @click="wantTo('MySecurity')">
            +添加银行卡
        </div>
    </div>
    <img v-else src="../../../assets/img/noData.jpg" alt="">
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
    .MyBank{
        position: absolute;
        width: 100%;
        height: 100%;
        background: #fff;
        .bank{
            padding: 30px;
            .bankList{
                width: 100%;
                height: 260px;
                background:  #F73030;
                border-radius: 10px;
                padding: 40px;
                color: #fff;
                h1{
                    font-weight: bold;
                    font-size: 36px;
                }
                h3{
                    font-weight: bold;
                    font-size: 50px;
                    align-items: center;
                    margin-top: 90px;
                }
            }
        }
        .addBank{
            margin: 10px auto;
            width: 630px;
            border-radius: 44px;
            border: 2px dashed #999999;
            height: 88px;
            font-size: 32px;
            text-align: center;
            line-height: 88px;
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