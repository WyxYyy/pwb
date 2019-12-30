<template>
  <div class="moneyDetail">
    <van-nav-bar @click-left='$router.go(-1)' title="资产详情" left-arrow left-arrow right-text="合同"></van-nav-bar>
    <header>
      <div class="flex">
        <nav>
          <span>
            购买金额(元)
          </span>
          <b>
            10000
          </b>
        </nav>
        <nav>
          <span>
            已回款(元)
          </span>
          <b>
            8000
          </b>
        </nav>
        <nav>
          <span>
            待回款(元)
          </span>
          <b class="active">
            101100
          </b>
        </nav>
      </div>
        <div class="LeaseDetail"  v-if="isLeaseDetail" >
            <div class="LeaseDetail_list">
                <span>
                    收益利率
                </span>
                <span>
                    9.90%
                </span>
            </div>
            <div class="LeaseDetail_list">
                <span>
                    购买期限
                </span>
                <span>
                    6个月
                </span>
            </div>
        </div>
        <div class="isLeaseDetail" @click="isLeaseDetail = !isLeaseDetail">
            租赁权详情
            <van-icon name="arrow-up" v-if="isLeaseDetail" />
            <van-icon name="arrow-down" v-else />
        </div>
    </header>
    <div class="Tips">
      <span>回款日期</span>
      <span>回款金额</span>
      <span>状态</span>
    </div>
    <div class="Modular">
      <div class="dateYear">
        2018年
      </div>
      <ul>
        <li>
          <span class="dateMonth">
            09月16日
          </span>
          <span class="Amount">
            841.67
          </span>
          <span class="isReturnNo">
            待回
          </span>
        </li>
        <li>
          <span class="dateMonth">
            09月16日
          </span>
          <span class="Amount">
            841.67
          </span>
          <span class="isReturnYes">
            已回
          </span>
        </li>
        <li>
          <span class="dateMonth">
            09月16日
          </span>
          <span class="Amount">
            841.67
          </span>
          <span class="isReturnNo">
            待回
          </span>
        </li>
      </ul>
    </div>
    <div class="Remarks">
      注：回款计划仅提供测算，实际回款金额以每月回款金额为准。

    </div>
  </div>
</template>

<script>
  export default {
      data(){
          return{
              isLeaseDetail:false
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

  header {
    width: 100%;
    padding: 30px;
    background: #fff;
    padding-bottom: 0;
    .flex {

      nav {
        text-align: center;

        span {
          font-size: 26px;
          color: #999;
          display: block;
        }

        b {
          font-size: 44px;
        }

        b.active {
          color: #F7241B;
        }
      }
    }
    .LeaseDetail{
        .LeaseDetail_list{
            height: 66px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 26px;
            border-bottom: 2px solid #EEEBEA;
            
        }
    }
    .isLeaseDetail{
        transition: all 1s;

        height: 62px;
        line-height: 62px;
        text-align: center;
    }
  }

  .Tips {
    height: 80px;
    display: flex;
    align-items: center;

    span {
      display: block;
      width: 33%;
      text-align: center;
      font-size: 30px;
    }
  }

  .Modular {
    .dateYear {
      height: 40px;
      padding: 0 30px;
      font-size: 24px;
      line-height: 40px;
      background: #E4E4E4;
    }

    ul {
      background: #fff;

      li {
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        border-bottom: 2px solid #EEEBEA;

        span {
          display: inline-block;
          width: 33%;
          text-align: center;
          font-size: 26px;
          color: #333;

        }

        .isReturnYes {
          color: #999;
        }

        .isReturnNo {
          color: #0081FF;
        }
      }

      li:last-child {
        border: 0;
      }
    }
  }

  .Remarks {
    height: 108px;
    line-height: 108px;
    font-size: 24px;
    padding: 0 30px;
    color: #999999;
  }

</style>
