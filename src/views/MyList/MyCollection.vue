<template>
  <div class="MyCollection">
    <van-nav-bar @click-left='wantTo("my")' title="我的收藏" left-arrow style="font-size: 20px"></van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="出租">
        <div v-if="lease.length > 0">
          <div class="list" v-for="item in lease">
            <div :class=" item.status == '禁用'?'lower':''">
              <div class="RecommendList" @click="goToDetail('RecommendDetail',item.id)">
                <img class="houseImg" :src="'/upload/'+item.thumbnail">
                <img class="nfORyf" v-if="item.can_monthly == 1" src="../../assets/img/sign_yue.png" alt="">
                <img class="nfORyf" v-else src="../../assets/img/sign_nian.png" alt="">

                <!-- <img src="item.thumbnail" > -->
                <div class="RecommendListRight">
                  <h4>{{item.title}}</h4>
                  <h5>
                    <van-icon name="location" />
                    位于{{item.region_info[2].area_name}}
                  </h5>
                  <h6>
                    <i v-for="(i,index) in item.marks" :key='index' v-if='index<3'> {{i.landmark_name}}</i>

                  </h6>
                  <h3 class="flex">
                    <span v-if="item.can_monthly == 1">
                      <em v-if="item.monthly_money > 1000">
                        <b>￥{{item.monthly_money}}</b>元/月
                      </em>
                      <em v-else>
                        <b>
                          面议
                        </b>
                      </em>
                    </span>
                    <span v-else>
                      <em v-if="item.capital > 1000">
                        <b>￥{{item.capital/10000}}</b>万/年
                      </em>
                      <em v-else>
                        <b>
                          面议
                        </b>
                      </em>
                    </span>
                    <img v-if="item.cr_examine != 0" src="../../assets/img/authen.png" alt="">
                    <!-- <img v-if="item.cr_examine > 0 || item.cr_examine == -1" src="../../assets/img/authen.png" alt=""> -->
                    <img v-else src="../../assets/img/noauthen.png" alt="">

                  </h3>

                </div>
              </div>

              <div class="btns">
                <em class="btnsCancel" @click="cancel(item.id,1)">取消收藏</em>
                <em class="btnsContact" @click="callPhone(item.update_time)">电话联系</em>
                <em class="btnsAppointment">立即预约</em>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="noData">
          <img src="../../assets/img/no_data.png" alt="">
        </div>
      </van-tab>

      <van-tab title="选址">
        <div v-if="site.length >= 1">
          <div class="list" v-for="item in site">
            <div class="seekingList flex" @click="goToDetail('siteDetail',item.id)">
              <div class="seekingListLeft">
                <h2>
                  {{item.title}}
                </h2>
                <span>
                  {{item.district}} · {{item.shop_type}} | {{item.create_time.timestamp}}
                </span>
              </div>
              <div class="seekingListRight">
                了解更多
              </div>
            </div>
          </div>
        </div>

        <div v-else class="noData">
          <img src="../../assets/img/no_data.png" alt="">
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import qs from 'qs'
  export default {
    data() {
      return {
        active: 0,
        lease: [],
        site: []
      }
    },
    methods: {

      get(apiUrl) {
        this.$axios({
          url: apiUrl,
          method: 'get',
          headers: {
            'XX-Token': this.$cookieStore.getCookie('token'),
            'XX-Device-Type': 'mobile',

          }
        }).then((data) => {
          console.log(data)
          this.lease = data.data.data.house.data
          this.site = data.data.data.tenant.data
          this.VerificationToken(data)
        })
      },
      callPhone(phone) {
        window.location.href = 'tel://' + phone
      },
      cancel(id, type) {
        this.post({
            house_id: id,
            'type': type
          },
          this.Interface.config.isCollection, )
      },
      post(data, apiUri) {
        let postData = qs.stringify(data)
        this.$axios({
          'url': apiUri,
          'method': 'post',
          'data': postData,
          headers: {
            'XX-Token': this.$cookieStore.getCookie('token'),
            'XX-Device-Type': 'mobile'
          }
        }).then((res) => {

          this.get(this.Interface.config.myCollection)

        })
      },
    },
    mounted() {
      this.get(this.Interface.config.myCollection)

    }
  }

</script>

<style scoped lang='scss'>
  .MyCollection /deep/.van-tabs {
    .noData {

      padding: 200px 0;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 45%;
        ;
      }

    }

    .van-tabs__wrap {
      height: 100px;
      border-bottom: 2px solid #ebebeb;

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

    .van-tabs__content {
      background: #fff;
      padding: 0 30px;

    }
  }

  .list {
    border-bottom: 1px solid #F4F4F4;

    .RecommendList {
      height: 257px;
      padding: 30px 0 0 0;
      display: flex;
      width: 100%;
      position: relative;

      .nfORyf {
        position: absolute;
        top: 30px;
        left: 0;
        z-index: 999;
        width: 70px;
        height: 38px;
      }

      .houseImg {
        width: 270px;
        height: 180px;
        border-radius: 6px;
        display: block;
        margin-right: 30px;
      }

      .RecommendListRight {
        height: 100%;
        width: 55%;
        // border-bottom: 1px solid #ebebeb;

        h4 {
          font-size: 32px;
          font-weight: 400;
          color: #1A1919;
          margin-bottom: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        h5 {
          color: #999;
          font-size: 26px;
          font-weight: 400;
          margin-bottom: 10px;

        }

        h6 {
          display: flex;
          margin-bottom: 10px;
          flex-wrap: wrap;

          i {
            display: block;
            padding: 1px 10px;
            font-size: 22px;
            height: 36px;
            border-radius: 10px;
            color: #FB918D;
            letter-spacing: 2px;
            font-weight: 400;
            border: 2px solid #FB918D;
            margin-right: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
          }
        }

        h3 {
          align-items: center;

          img {
            width: 120px;
            height: 40px;
            ;
            margin: 0;
            margin-bottom: 0px;
          }
        }

        span {
          display: block;
          font-size: 24px;

          b {
            color: #F7241B;
            font-size: 40px;
          }
        }


      }
    }

    .btns {

      display: flex;
      padding-bottom: 40px;
      justify-content: flex-end;

      em {
        display: block;
        width: 160px;
        height: 60px;
        margin-left: 20px;
        text-align: center;
        line-height: 60px;
        border-radius: 30px;
        border: 2px solid #ebebeb;
        color: #999;
        font-size: 26px;
      }
    }

    .seekingList {
      width: 100%;
      height: 148px;
      border-bottom: 2px solid #EEEBEA;
      align-items: center;

      .seekingListLeft {

        h2 {
          font-size: 32px;
          font-weight: bold;
          line-height: 90px;
        }

        span {
          color: #999;
          font-size: 26px;
        }
      }

      .seekingListRight {
        width: 155px;
        height: 56px;
        color: #F7241B;
        border: 2px solid #F7241B;
        border-radius: 28px;
        text-align: center;
        line-height: 56px;
        font-family: Microsoft YaHei;

      }
    }
  }

  .list .lower {
    opacity: 0.5;
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
