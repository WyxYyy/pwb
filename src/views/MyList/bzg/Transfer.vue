<template>
  <div>
    <van-nav-bar @click-left='$router.go(-1)' title="租赁权转让" left-arrow ></van-nav-bar>
    <header class="flex">
        <nav @click="whoShow = 1" :class="whoShow == 1?'active':''">可转让</nav>
        <nav @click="whoShow = 2" :class="whoShow == 2?'active':''">转让中</nav>
        <nav @click="whoShow = 3" :class="whoShow == 3?'active':''">已转让</nav>
    </header>
    <div class="Tips flex">
        <span>租聘权名称</span>
        <span>可转让金额</span>
    </div>
    <div class="container" v-if="whoShow == 1" >
        <div class="list " v-for="i in 10" @click="goDetail('not','123')">
            <span>
                柳巷旺铺租赁权
            </span>
            <em>
                <b>
                    10000.00
                </b>
                <van-icon name="arrow" />
            </em>
        </div>
    </div>
    <div class="container" v-if="whoShow == 2">
        <div class="list " v-for="i in 10" @click="goDetail('ing','123')">
            <span>
                柳巷旺铺租赁权
            </span>
            <em>
                <b>
                    10000.00
                </b>
                <van-icon name="arrow" />
            </em>
        </div>
    </div>
    <div class="container" v-if="whoShow == 3">
        <div class="list " v-for="i in 10" @click="goDetail('over','123')" >
            <span>
                柳巷旺铺租赁权
            </span>
            <em>
                <b>
                    10000.00
                </b>
                <van-icon name="arrow" />
            </em>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
      data(){
          return{
              whoShow:1
          }
      },
      methods:{
          goDetail(state,id){
                this.$router.push({
                  path: `/TransferDetail`+`/${state}/${id}`,
                })
          }
      }
  }

</script>

<style scoped lang='scss'>
  /deep/ .van-nav-bar {
    height: 100px;
    line-height: 100px;
    background: #fff;
    border-bottom: 1px solid #ebebeb;

    .van-nav-bar__title {
      font-size: 36px;
    }

    .van-nav-bar__right {
      .van-nav-bar__text {
        color: #F7241B;
      }
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
  header{
      height: 88px;
      align-items: center;
      background: #fff;
      padding: 0 74px;
      nav{
          padding: 10px 0;
          color: #999999;
          font-size: 30px;
      }
      nav.active{
          font-weight: bold;
          color: #3F77E8;
          border-bottom: 4px solid #3F77E8;
      }
  }
  .Tips{
      padding: 0 30px;
      background: #F4F4F4;
      height: 80px;
      font-size: 28px;
      align-items: center;
      color: #999;
  }
    .container{
        background: #fff;
        padding: 0 30px;
        .list{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 110px;
            border-bottom: 2px solid #F4F4F4;
            span{
                font-size: 32px;
            }
            em{
                font-size: 40px;
                display: flex;
                align-items: center;
                b{
                    color: #F7241B;
                }
                .van-icon{
                    color: #999;
                    margin-left: 10px;
                }
            }
        }
        :last-child{
            border: 0;
        }
    }
</style>
