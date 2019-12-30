<template>
  <div>
    <header class="flex">
      <nav class="navSearch">
        <input @click="wantTo('searchList')" v-model="searchCrux" @change.lazy="searchM" type="text"
          placeholder="请输入区域/街道/商圈">
        <i></i>
      </nav>
      <span @click="cancel" class="cancel">取消</span>
    </header>
    <div class="list">
      <div class="RecommendList" v-for="item,index in AllList" :key="index"
          @click="goToDetail('RecommendDetail',item.id)">
          <img class="houseImg" :src="'/upload/'+item.thumbnail">
          <img class="nfORyf" v-if="item.cr_examine == 4"  src="../../assets/img/sign_yue.png" alt="">
          <img class="nfORyf" v-else  src="../../assets/img/sign_nian.png" alt="">
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
    </div>
  </div>

</template>

<script>
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        searchCrux: '',
        AllList: [],
      }
    },
    methods: {
      searchM() {
        this.get()
        // console.log(123)
      },
      get() {
        this.$axios({
          url: this.Interface.config.search,
          method: 'get',
          params: {
            search: this.searchCrux,
          }
        }).then((data) => {
          console.log(data)
          this.AllList = data.data.data
          if (data.data.data.length == 0) {
            Toast('暂无更多数据，换个词试试')
            this.searchCrux = ''
          }
        })
      },
      cancel() {
        this.searchCrux = ''
        this.wantTo('index')
      }
    }

  }

</script>

<style scoped lang='scss'>
  header {
    height: 100px;
    width: 100%;
    padding: 0 30px;
    align-items: center;
    background: #fff;

    .navSearch {
      position: relative;

      input {
        width: 550px;
        height: 56px;
        background: #EEEEEE;
        color: #c3c3c3;
        outline: none;
        border: 0;
        text-indent: 3em;
        font-size: 24px;
      }

      input::-webkit-input-placeholder,
      textarea::-webkit-input-placeholder {
        color: #999;
      }

      i {
        background-image: url(../../assets/img/index_icons.png);
        background-size: 481px 98px;
      }

      i {
        display: block;
        width: 28px;
        height: 28px;
        position: absolute;
        top: 14px;
        left: 28px;
        background-position: -453px -10px;
      }
    }

    .cancel {
      color: #999;
      font-size: 28px;
    }
  }

  .list {
    padding: 0 30px;
    background: #fff;
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

</style>
