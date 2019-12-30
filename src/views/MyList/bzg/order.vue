<template>
  <div>
    <van-nav-bar @click-left='wantTo("my")' title="我的订单" left-arrow left-arrow></van-nav-bar>
    <van-tabs v-model="active" animated swipeable>
      <van-tab title="审核中">
        <div class="list" v-for="(item,index) in list">
          <div class="Tips" v-if="true">
            <div class="TipsLeft">
              <i class="horn"></i>
              <span>
                您的月付初审已通过，需缴纳定金
              </span>
            </div>
            <div class="TipsRight">
              <div class="btn" @click="goToDetail('orderDetail',item.id)">交定金</div>
            </div>
          </div>
          <div class="Tips" v-else>
            <div class="TipsLeft">
              <i class="horn"></i>
              <span>
                您的月付初审已通过，有合同待签
              </span>
            </div>
            <div class="TipsRight">
              <div class="btn" @click="wantTo('contract')">待签署</div>
            </div>
          </div>
          <div class="house">
            <div class="houseDetail ">
              <img class="houseImg" :src="item.with_merch_thumbnail" alt="">
              <div class="houseAbout ">
                <div class="houseTitle">
                  {{item.with_merch_title}}
                </div>
                <div class="houseAddress">
                  <van-icon name="location-o" />
                  {{item.append_address_info}}
                </div>
                <div class="housePrice">
                  <span class="money">
                    ￥ <b>{{item.append_month_capital}}</b>
                  </span>
                  × 12期
                </div>
              </div>
            </div>
            <div class="flex">
              <span class="about">提交订单申请时间</span>
              <span>{{item.append_created_at_text}}</span>
            </div>
            <div class="flex">
              <span class="about">订单申请状态</span>
              <em>
                {{item.append_order_status_text}}
              </em>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="月付中">
        内容 2
      </van-tab>
      <van-tab title="已完成">
        内容 3
      </van-tab>
      <van-tab title="被婉拒">
        内容 4
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0,
        list:[]
      }
    },
    methods: {
      get(apiUrl, getData, index) {
        this.$axios({
          url: apiUrl,
          method: 'get',
          params: getData,
          headers: {
            'XX-Token': this.$cookieStore.getCookie('token'),
            'XX-Device-Type': 'mobile',
          }
        }).then((res) => {
          console.log(res)
          this.list = res.data.data
        })
      },
    },
    mounted(){
      this.get(this.Interface.config.orderList,{
        type:1
      })
    }
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

  /deep/.van-tabs {
    .van-tabs__wrap {
      height: 100px;
      ;

      .van-tab {
        line-height: 100px;
        font-size: 30px;
        color: #333;
      }

      .van-tab--active {
        color: #F7241B;
        font-weight: bold;
      }
    }

    .van-tab__pane-wrapper {
      padding: 20px 30px;

      .list {
        width: 100%;
        border-radius: 4px;
        background: #fff;
        margin-bottom: 20px;
        .Tips {
          height: 60px;
          width: 100%;
          background: #FFE1E0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 30px;

          .TipsLeft {
            display: flex;
            align-items: center;

            .horn {
              display: block;
              width: 36px;
              height: 36px;
              background-image: url(../../../assets/img/horn.png);
              background-size: 100%;
              margin-right: 10px;
            }

            span {
              font-size: 26px;
            }
          }

          .TipsRight {
            .btn {
              height: 42px;
              padding: 0 13px;
              font-size: 24px;
              color: #fff;
              line-height: 42px;
              background: #F7241B;
              border-radius: 21px;
            }
          }
        }

        .house {
          padding: 0 30px;

          .houseDetail {
            display: flex;
            padding: 30px 0;

            .houseImg {
              width: 190px;
              height: 140px;
              flex: none;
              margin-right: 30px;
            }

            .houseAbout {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              width: 100%;

              .houseTitle {
                font-size: 30px;
                color: #1A1919;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }

              .houseAddress {
                color: #c1c1c1;
                font-size: 24px;
                display: flex;
                align-items: center;
              }

              .housePrice {
                font-size: 26px;
                color: #999;

                span {
                  color: #F7241B;

                  b {
                    font-size: 36px;
                  }
                }
              }
            }
          }

          .flex {
            height: 100px;
            align-items: center;
            border-top: 2px solid #EEEBEA;
            font-size: 26px;

            .about {
              color: #999999;
            }

            em {
              color: #F31700;
            }

          }
        }
      }
    }
  }

</style>
