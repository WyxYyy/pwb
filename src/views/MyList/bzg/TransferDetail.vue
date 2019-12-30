<template>
  <div>
    <van-nav-bar @click-left='$router.go(-1)' title="转让详情" left-arrow></van-nav-bar>
    <header>
      <div class="money">
        10000.00
      </div>
      <span>
        购买租赁权(元)
      </span>
    </header>
   
    <div class="TransferDetail">
         <div class="State flex" v-if="state != 'not'">
        <span>
            状态
        </span>
        <em v-if="state == 'over'">
            转让成功    
        </em>
        <i v-else-if="state == 'ing'">
            审核中
        </i>
    </div>
      <ul class="detail">
        <li>
          <span>
            租赁权名称
          </span>
          <em>
            柳巷旺铺租赁权
          </em>
        </li>
        <li>
          <span>
            总计应收回款
          </span>
          <em>
            <b>
                150.00
            </b>
          </em>
        </li>
        <li>
          <span>
            已收回款(元)
          </span>
          <em>
            <b>
                600.00
            </b>
          </em>
        </li>
        <li>
          <span>
            剩余本金(元)
          </span>
          <em>
            <b>
                6000.00
            </b>
          </em>
        </li>
        <li>
          <span>
            剩余期限
          </span>
          <em>
            3个月
          </em>
        </li>
      </ul>
      <div class="TransferBtn" v-if="state != 'over'">
          <span v-if="state == 'not'">
              立即转让
          </span>
          <span v-else-if="state == 'ing'">
              点击撤销
          </span>
          
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {  
          state:this.$route.params.state
      } 
    },
    mounted() {
      let id = this.$route.params.id
      let state = 
      console.log(state)
      console.log(id)
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

  header {
    height: 220px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .money {
      font-size: 70px;
      color: #0081FF;
      font-weight: bold;
    }

    span {
      font-size: 26px;
      color: #999;
    }
  }

    .State{
        border-radius:6px;
        margin: 20px auto;
        width: 100%;
        align-items: center;
        height: 80px;
        padding: 0 30px;
        background: #fff;
        span{
            font-size: 32px;
        }
        em{
            color: #999999;
            font-size: 26px;
        }
        i{
            color: #F63F37;
            font-size: 26px;

        }
    }
  .TransferDetail {
    padding: 0 30px;

    .detail {
      margin: 20px auto;
      width: 100%;
      background: #fff;
      padding: 30px;

      li {
        margin-bottom: 40px;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        span {
          font-size: 26px;
          color: #999;
        }
        em{
            font-size: 30px;
            b{
                font-size: 40px;
                color: #F63F37;
            }
        }
      }

      :last-child {
        margin: 0;
      }
    }

    .TransferBtn{
        width: 630px;
        margin: 0 auto;
        height: 90px;
        text-align: center;
        line-height: 90px;
        border-radius: 45px;
        background:linear-gradient(-40deg,rgba(0,129,255,1),rgba(39,148,254,1));
        font-size: 34px;
        color: #fff;
    }
  }

</style>
