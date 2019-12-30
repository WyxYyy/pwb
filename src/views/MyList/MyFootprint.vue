<template>
  <div class="MyFootprint">
    <van-nav-bar @click-left='wantTo("my")' title="我的足迹" left-arrow style="font-size: 20px"></van-nav-bar>
    <div v-if="list.length >= 1" class="list">
       <div class="RecommendList" v-for="item,index in list" :key="index"
        @click="goToDetail('RecommendDetail',item.id)">
        <img class="houseImg" :src="'/upload/'+item.thumbnail">
          <img class="nfORyf" v-if="item.can_monthly == 1"  src="../../assets/img/sign_yue.png" alt="">
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
      <div class="LoadMore" v-if="list.length >= 10" @click="LoadMore">
        点击加载更多
      </div>
    </div>
    <div v-else class="noData">
      <img src="../../assets/img/no_data.png" alt="">
    </div>

    <van-popup class="clickPopup" :close-on-click-overlay='false' overlay v-model="isComplete">
      <van-loading color="#F7241B" size='60px' />
    </van-popup>
  </div>
</template>

<script>
  import { Toast} from 'vant';

  export default {
    data() {
      return {
        list: [],
        page: 1,
        isComplete:false
      }
    },
    methods: {
      get(apiUrl, getData) {
        this.$axios({
          url: apiUrl,
          method: 'get',
          params: getData,
          headers: {
            'XX-Token': this.$cookieStore.getCookie('token'),
            'XX-Device-Type': 'mobile'
          }
        }).then((data) => {
          console.log(data)
          var list = data.data.data.data
          if (data.data.code == 1) {
        this.isComplete = false

            for (var i = 0; i < list.length; i++) {
              this.list.push(list[i])
            }
            if (list.length == 0) {
              Toast('没有更多数据了')
            }
          }
          this.VerificationToken(data)
        })
      },
      LoadMore() {
        this.isComplete = true
        this.page += 1
        this.get(this.Interface.config.myFootprint, {
          page: this.page
        })

      }
    },
    mounted() {
      this.get(this.Interface.config.myFootprint, {
        page: this.page
      })
    }


  }

</script>

<style scoped lang='scss'>
  .LoadMore {
    height: 100px;
    line-height: 100px;
    width: 100%;
    text-align: center;
    font-size: 28px;
  }

  .clickPopup {
    padding: 50px;
    background: rgba(0, 0, 0, 0)
  }

  .noData {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 45%;
      margin-top: -50%;
      ;
    }

  }

  .list {
    background: #fff;
    padding: 30px;

  }

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

  .RecommendList.Lower {
    opacity: 0.5;
    position: relative;

    .LowerAlready {
      display: block;
      position: absolute;
      background: #1A1919;
      color: #fff;
      width: 100px;
      height: 46px;
      border-radius: 4px;
      text-align: center;
      line-height: 46px;
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
