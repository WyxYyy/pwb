<template>
  <div>
      <!-- 海报 -->
    <div class="back" @click="wantTo('index')" >
        <van-icon name="arrow-left" />
    </div>
    <img v-if="what == 'yf'" src="../../assets/img/yfPoster.png" alt="">
    <img v-else-if="what == 'mf'" src="../../assets/img/mfPoster.png" alt="">
  </div>
</template>

<script>
export default {
    data(){
        return{
            what:""
        }
    },
    mounted(){
        let what = this.$route.params.what
        console.log(what)
        this.what = what
    }

}
</script>

<style scoped lang='scss'>
    .back{
        position: fixed;
        top: 50px;
        left: 50px;
        /deep/ .van-icon{
            font-size: 50px;
            color: #fff;
        }
    }
</style>