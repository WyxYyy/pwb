<template>
  <div class="MyBill">
    <van-nav-bar @click-left='$router.go(-1)' title="我的账单" left-arrow right-text="我的合同" style="font-size: 20px"
      @click-right="wantTo('MyConstract')">
    </van-nav-bar>
    <div v-if="false">
      <header>
        <div class="flex">
          <div class="Tips">
            <span>
              本月应交(元)
            </span>
            <em>
              交租日
              <i>
                10-16
              </i>
            </em>
          </div>
          <div class="price">
            ￥1000.00
          </div>
        </div>
        <div class="flex btns">
          <button class="payRent" @click="wantTo('RentAccount')">我要交租</button>
          <button class="Renewal" @click="wantTo('Renewal')">我要续租</button>
        </div>
      </header>
      <div class="tab">
        <van-tabs v-model="active" title-active-color='#F7241B' title-inactive-color='#333333'>
          <van-tab title="交租计划">
            <div class="tabTitle flex">
              <span>交租日期</span>
              <span>应交金额</span>
              <span>状态</span>
            </div>
            <div class="planList">
              <div class="time">
                2018年
              </div>
              <div class="list flex">
                <span>
                  09月16日
                </span>
                <span>
                  841.67
                </span>
                <span class="complete">
                  已交
                </span>
              </div>
              <div class="list flex">
                <span>
                  09月16日
                </span>
                <span>
                  841.67
                </span>
                <span>
                  待交
                </span>
              </div>
              <div class="list flex">
                <span>
                  09月16日
                </span>
                <span>
                  841.67
                </span>
                <span>
                  待交
                </span>
              </div>
              <div class="list flex">
                <span>
                  09月16日
                </span>
                <span>
                  841.67
                </span>
                <span>
                  待交
                </span>
              </div>
              <div class="list flex">
                <span>
                  09月16日
                </span>
                <span>
                  841.67
                </span>
                <span>
                  待交
                </span>
              </div>
            </div>
            <div class="planList">
              <div class="time">
                2019年
              </div>
              <div class="list flex">
                <span>
                  09月16日
                </span>
                <span>
                  841.67
                </span>
                <span class="complete">
                  已交
                </span>
              </div>
              <div class="list flex">
                <span>
                  09月16日
                </span>
                <span>
                  841.67
                </span>
                <span>
                  待交
                </span>
              </div>
              <div class="list flex">
                <span>
                  09月16日
                </span>
                <span>
                  841.67
                </span>
                <span>
                  待交
                </span>
              </div>
              <div class="list flex">
                <span>
                  09月16日
                </span>
                <span>
                  841.67
                </span>
                <span>
                  待交
                </span>
              </div>
              <div class="list flex">
                <span>
                  09月16日
                </span>
                <span>
                  841.67
                </span>
                <span>
                  待交
                </span>
              </div>
            </div>


          </van-tab>
          <van-tab title="月付详情">
            <div class="monthlyState">
              月付状态：审核通过
            </div>
            <div class="Modular">
              <div class="monthlyTitle">
                月付信息
              </div>
              <div class="flex">
                <span>
                  月付项目
                </span>
                <em>
                  房屋租聘
                </em>
              </div>
              <div class="flex">
                <span>
                  月付项目
                </span>
                <em>
                  房屋租聘
                </em>
              </div>
              <div class="flex">
                <span>
                  月付项目
                </span>
                <em>
                  房屋租聘
                </em>
              </div>
            </div>
            <div class="Modular">
              <div class="monthlyTitle">
                申请人信息
              </div>
              <div class="flex">
                <span>
                  月付项目
                </span>
                <em>
                  房屋租聘
                </em>
              </div>
              <div class="flex">
                <span>
                  月付项目
                </span>
                <em>
                  房屋租聘
                </em>
              </div>
              <div class="flex">
                <span>
                  月付项目
                </span>
                <em>
                  房屋租聘
                </em>
              </div>
            </div>
          </van-tab>

        </van-tabs>
      </div>
    </div>
    <img v-else src="../../../assets/img/noData.jpg" alt="">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0,
      }
    },
    

  }

</script>

<style scoped lang='scss'>
  .MyBill {
    /deep/ .van-nav-bar__text {
      color: #F7241B;
      font-size: 26px;
    }

    header {
      height: 296px;
      padding: 30px;
      background: #fff;
      align-items: center;
      margin-bottom: 30px;

      .Tips {
        span {
          font-size: 34px;
          line-height: 50px;
          display: block;
        }

        em {
          font-size: 24px;
          color: #999;

          i {
            color: #333;
          }
        }
      }

      .price {
        color: #F7241B;
        font-size: 54px;
        font-weight: bold;
      }

      .btns {
        margin-top: 60px;

        button {
          width: 335px;
          height: 88px;
          border: 0;
          border-radius: 44px;
          font-size: 32px;
        }

        button.payRent {
          background: #F7241B;
          color: #fff;
        }

        button.Renewal {
          border: 2px solid rgba(247, 36, 27, 1);
          background: #fff;
          color: #F7241B;
        }
      }
    }

    .tab {

      /deep/ .van-tabs {
        // top
        .van-tabs__wrap {
          height: 100px;

          .van-tabs__nav {
            align-items: center;

            .van-tab span {
              font-size: 34px;
              font-weight: bold;
            }
          }
        }

        //bottom
        .van-tabs__content {
          .tabTitle {
            padding: 0 70px;
            align-items: center;
            height: 80px;
            font-size: 26px;
          }

          .planList {
            .time {
              height: 40px;
              padding: 0 30px;
              line-height: 40px;
              font-size: 24px;
              background: #E4E4E4;
            }

            .list {
              height: 80px;
              background: #fff;
              align-items: center;
              border-bottom: 2px solid #EEEBEA;
              padding: 0 70px;
              font-size: 26px;

              .complete {
                color: #999999;
              }
            }
          }

          .monthlyState {
            height: 80px;
            padding: 0 30px;
            line-height: 80px;

          }

          .Modular {
            padding: 0 30px;
            margin-bottom: 30px;
            background: #fff;

            .monthlyTitle {
              height: 90px;
              line-height: 90px;
              font-size: 30px;
            }

            .flex {
              height: 88px;
              border-bottom: 2px solid #EEEBEA;
              align-items: center;
              font-size: 26px;

              span {
                color: #999;
              }
            }
          }

        }
      }
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
