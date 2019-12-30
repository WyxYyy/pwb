<template>
  <div>
    <van-nav-bar @click-left='$router.go(-1)' title="选择城市" left-arrow  style="z-index:99999">
    </van-nav-bar>
    <v-distpicker type="mobile" @selected='selectCity'></v-distpicker>
  </div>


</template>

<script>
  import VDistpicker from 'v-distpicker'

  export default {
    data() {
      return {

      }
    },
    components: {
      VDistpicker
    },
    methods: {
      selectCity(e) {

        this.$cookieStore.setCookie('city', e.city.value)
        this.wantTo('index')

      }
    }
  }

</script>

<style lang='scss' scoped>
/deep/ .van-nav-bar {
    height: 100px;
    line-height: 100px;
    background: #fff;
    z-index: 9999999;

   
  }

  .van-nav-bar__title {
    font-size: 36px;
  }

  .van-nav-bar .van-icon {
    font-size: 50px;
    color: #333333;
  }
  /deep/.distpicker-address-wrapper{

    .address-header{
        li{
            font-size: 32px;
        }
    }
    .address-container{
        li{
            padding: 0 30px;
            font-size: 32px;
            height: 80px;
            line-height: 80px;
        }
    }
  }

</style>
