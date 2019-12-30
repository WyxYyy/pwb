<template>
  <div class="RecommendListBox">
    <van-nav-bar @click-left='$router.go(-1)' title="为你推荐" left-arrow fixed @click-right="onClickRight"
      style="z-index:99999">
      <img src="../../assets/img/screen.png" class="screen" slot="right">
    </van-nav-bar>
    <div style="height:50px"></div>
    <div class="Recommend" v-if="list.length > 0 ">

      <div class="RecommendTab">

       <div class="RecommendList" v-for="item,index in list" :key="index"
        @click="goToDetail('RecommendDetail',item.id)">
        <img class="houseImg" :src="'/upload/'+item.thumbnail">
          <img class="nfORyf" v-if="item.can_monthly == 1"  src="../../assets/img/sign_yue.png" alt="">
        <img class="nfORyf" v-else src="../../assets/img/sign_nian.png" alt="">
        <!-- <img src="item.thumbnail" > -->
        <div class="RecommendListRight">
          <h4>
            <img v-if="item.can_monthly == 1"  src="../../assets/img/zhuanshi.gif" alt="">            
            {{item.title}}
          </h4>
          <h5>
            <van-icon name="location" />
            位于{{item.region_info[2].area_name}}
          </h5>
          <h6>
              <i v-for="(i,index) in item.merch_tags_arr " :key='index' v-if='index<3'>{{i}}</i>
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

            <!-- <img v-if="item.cr_examine > 0 || item.cr_examine == -1" src="../../assets/img/authen.png" alt=""> -->
              <img v-if="item.cr_examine != 0" src="../../assets/img/authen.png" alt="">

            <img v-else src="../../assets/img/noauthen.png" alt="">

          </h3>
        </div>
      </div>
        <div class="LoadMore" v-if="list.length >= 10" @click="LoadMore">
          点击加载更多
        </div>
      </div>

    </div>
    <img v-else src="../../assets/img/noData.jpg" alt="">
    <van-popup v-model="show" position="right" :overlay="false">
      <div class="Close">
        <van-icon name="cross" @click="closeEmpty" />
        <span @click="confirmSelect">
          完成
        </span>
      </div>
      <div class="typeBox" v-for="(item,index) in homeCondition">
        <div class="title">
          {{item.title}}
        </div>
        <div class="option">
          <span :class="typeSelect.k == i.k || rentSelect.k == i.k || moneySelect.k == i.k?'active':''"
            v-for="(i,index) in item.values" @click="ChoiceActive(i)">
            {{i.v}}
          </span>

        </div>
      </div>


    </van-popup>
    <van-popup class="clickPopup" :close-on-click-overlay='false' overlay v-model="isLogin">
      <van-loading color="#F7241B" size='60px' />
    </van-popup>

  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';

  export default {
    data() {
      return {
        show: false,
        typeSelect: {},
        rentSelect: {},
        moneySelect: {},
        condition: [],
        list: [],
        homeCondition: [],
        isLogin: false,
        page: 1,
        selectCity: this.$cookieStore.getCookie('city')
      }
    },
    methods: {
      onClickRight() {
        this.condition = []
        this.show = !this.show
      },
      ChoiceActive(item) {
        console.log(item)
        if (item.m == 'type') {
          this.typeSelect = item
        } else if (item.m == 'area') {
          this.rentSelect = item
        } else if (item.m == 'capital') {
          this.moneySelect = item
        }


      },
      closeEmpty() {
        console.log(123)
        // this.typeSelect = null;
        // this.rentSelect = null;
        // this.SizeSelect = null;
        this.show = false;
      },
      confirmSelect() {

        if (this.typeSelect.k == undefined && this.rentSelect.k == undefined && this.moneySelect.k == undefined) {
          this.$toast.fail({
            message: '请至少选择一个！'
          })
        } else {
          this.show = false
          this.page = 1
          this.list = []
          if (this.typeSelect.k != undefined) {
            this.condition.push(this.typeSelect.k)
          }
          if (this.rentSelect.k != undefined) {
            this.condition.push(this.rentSelect.k)
          }
          if (this.moneySelect.k != undefined) {
            this.condition.push(this.moneySelect.k)
          }
          this.isLogin = true
          this.get(this.Interface.config.AllList, {
            'condition': this.condition,
            page: this.page
          }, 1)
          console.log(this.condition)
        }
      },

      get(apiUrl, getData, index) {
        var that = this
        this.$axios({
          url: apiUrl,
          method: 'get',
          params: getData
        }).then((data) => {
          this.isLogin = false

          if (index == 1) {
            var listData = data.data.data.data
            if (listData.length == 0) {
              Toast('没有更多数据了')
            } else {
              for (var i = 0; i < listData.length; i++) {
                this.list.push(listData[i])
              }
            }

          } else if (index == 2) {
            console.log(data)
            this.homeCondition = data.data
          }

        })
      },
      LoadMore() {
        this.isLogin = true
        this.page += 1
        console.log(this.condition)
        if (this.condition == undefined) {
          this.get(this.Interface.config.AllList, {
            page: this.page,
            globalArea: this.selectCity
          }, 1)
        } else if (this.condition == 'yf') {
          this.get(this.Interface.config.AllList, {
            'monthPay': '1',
            page: this.page,
            globalArea: this.selectCity
          }, 1)
        } else {
          this.get(this.Interface.config.AllList, {
            'condition': this.condition,
            page: this.page,
            globalArea: this.selectCity
          }, 1)

        }
      }

    },
    mounted() {
      let type = this.$route.params.type;
      console.log(type)
      this.condition = type
      if (type == undefined) {
        this.get(this.Interface.config.AllList, {
          page: this.page,
          globalArea: this.selectCity
        }, 1)
      } else if (this.condition == 'yf') {
        this.get(this.Interface.config.AllList, {
          'month_pay': '1',
          page: this.page,
          globalArea: this.selectCity
        }, 1)
      } else {
        this.get(this.Interface.config.AllList, {
          'condition': this.condition,
          page: this.page,
          globalArea: this.selectCity
        }, 1)
      }
      this.get(this.Interface.config.homeCondition, '', 2)
    },
    created() {
      console.log('现在' + this.locationCity)
      // window.onscroll = function(){
      //   console.log('到底')
      // }
    }
  }

</script>

<style scoped lang='scss'>
  /*导航*/
  .RecommendListBox /deep/ .van-nav-bar {
    height: 100px;
    line-height: 100px;
    background: #fff;
    z-index: 9999999;

    .screen {
      width: 44px;
      height: 44px;

    }
  }

  .van-nav-bar__title {
    font-size: 36px;
  }

  .van-nav-bar .van-icon {
    font-size: 50px;
    color: #333333;
  }


  .Recommend {
    background: #fff;
    padding: 0 30px;

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
          display: flex;
          align-items: center;
           img{
            width: 58px;
          }
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
            padding: 1px 5px;
            font-size: 20px;
            height: 32px;
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

    .LoadMore {
      height: 100px;
      line-height: 100px;
      width: 100%;
      text-align: center;
      font-size: 28px;
    }
  }

  .van-popup--right {
    width: 100%;
    height: 100%;
    // top: 713px;
    border: 2px solid #ebebeb;
    padding: 30px;

    .Close {
      display: flex;
      font-size: 44px;
      justify-content: space-between;
      color: #333;
      margin-bottom: 40px;

      span {
        font-size: 30px;
        color: #F7241B;

      }
    }

    .typeBox {
      .title {
        font-size: 28px;
        line-height: 50px;
        color: #333;
      }

      .option {
        padding: 30px;
        display: flex;
        flex-wrap: wrap;

        span {
          display: block;
          padding: 10px 30px;
          height: 60px;
          font-size: 30px;
          background: #f3f3f3;
          color: #999;
          margin-right: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          border-radius: 100px;
          margin-bottom: 20px;
          ;
        }

        .active {
          border: 2px solid #f7241b;
          color: #f7241b;
          background: #fff;
          box-sizing: border-box;

        }
      }
    }



  }

</style>
<style lang="scss" scoped>
  .van-toast {
    font-size: 30px;
    width: auto;
    padding: 20px;
  }

  .clickPopup {
    padding: 50px;
    background: rgba(0, 0, 0, 0)
  }

</style>
