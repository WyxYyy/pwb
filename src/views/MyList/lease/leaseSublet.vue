<template>
  <div>
    <van-nav-bar @click-left='wantTo("my")' title="我的出租/转租" left-arrow></van-nav-bar>
    <div class="container" v-if="list.length !=0">
      <div class="list" v-for="item,index in list" :key="index">
        <div class="listTop " @click="goToDetail('myHouseDetail',item.id)">
          <!--  -->
          <img class="houseImg" :src="'/upload/'+item.thumbnail" alt="">
          <img class="nfORyf" v-if="item.can_monthly == 1"  src="../../../assets/img/sign_yue.png" alt="">
        <img class="nfORyf" v-else  src="../../../assets/img/sign_nian.png" alt="">
          <div class="listAbout">
            <h1>{{item.title}}</h1>
            <h4>{{item.statusText}}</h4>
            <h2>{{item.address}}</h2>
            <h3>
              <span>{{item.house.regionText}}·{{item.house.typeText}}</span>
              &nbsp; | &nbsp;
              <span>{{item.createTimeText}}</span>
            </h3>
          </div>
        </div>
        <div class="listBtm">
          <i @click="goToDetail('changeLease',item.id)">修改</i>
          <i @click="Refresh">刷新</i>
          <i @click="LowerShelf(item.id)">下架</i>
          <i @click="goToDetail('leaseMatching',item.id)">立即匹配</i>
        </div>
      </div>
    </div>
    <img class="noDataImg" v-else src="../../../assets/img/no_data.png" alt="">
    <footer>
      <button @click="wantTo('rentalSublease')">
        我要出租/转租
      </button>
    </footer>
    <div style="height:60px"></div>
  </div>
</template>

<script>
  import {Toast} from 'vant';
  import qs from 'qs'

  export default {
    data() {
      return {
        list: []
      }
    },
    methods: {
      get(apiUrl) {
        this.$axios({
          url: apiUrl,
          method: 'get',
          headers: {
            'XX-Token': this.$cookieStore.getCookie('token'),
            'XX-Device-Type': 'mobile'
          }
        }).then((data) => {
          console.log(data)
          this.list = data.data.data.data
          this.VerificationToken(data)
        })
      },
      post(apiUri,data ) {
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
          Toast(res.data.msg)
          if(res.data.code !== 0){
              this.get(this.Interface.config.myLease)   
          }
          console.log(res)
        })
      },

      Refresh() {
        Toast('刷新成功！')
      },
      // 房屋下架
      LowerShelf(id) {
        this.post(this.Interface.config.leaseDelete,{'id':id})
        
      }
    },
    mounted() {
      this.get(this.Interface.config.myLease)
    }
  }

</script>

<style scoped lang='scss'>

  .container {
    background: #fff;
    padding: 0 30px;

    .list {
      padding: 40px 0;
      border-bottom: 2px solid #ebebeb;
      .listTop {
        display: flex;
        position: relative;
        .houseImg {
          width: 270px;
          height: 180px;
          border-radius: 4px;
          margin-right: 30px;
          display: block;
        }
        .nfORyf{
          position: absolute;
          top: 0px;
          left: 0px;
          width: 70px;
          height: 38px;
        }
        .listAbout {
          display: flex;
          justify-content: space-between;
          flex-direction: column;

          h1 {
            font-size: 32px;
            color: #1A1919;
          }

          h2 {
            color: #999999;
            font-size: 26px;
          }

          h3 {
            font-size: 26px;
            color: #999999;

            :last-child {
              color: #C2C2C2;
            }
          }

          h4 {
            color: #F7241B
          }
        }
      }

      .listBtm {
        margin-top: 30px;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        i {
          margin-right: 15px;
          display: block;
          border-radius: 30px;
          border: 2px solid rgba(238, 235, 234, 1);
          height: 60px;
          padding: 0 27px;
          line-height: 60px;
          color: #999999;
          font-size: 26px;
        }

        :last-child {
          background: #F7241B;
          color: #fff;
          border: none;
        }
      }
    }
  }

  footer {
    position: fixed;
    bottom: 0;
    height: 120px;
    background: #fff;
    width: 100%;
    padding: 16px 30px;

    button {
      width: 100%;
      height: 100%;
      background: #F7241B;
      color: #fff;
      font-size: 32px;
      font-weight: bold;
      border-radius: 44px;
      border: 0;

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
