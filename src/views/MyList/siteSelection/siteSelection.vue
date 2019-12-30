<template>
  <div>
    <van-nav-bar @click-left='wantTo("my")' title="我的选址" left-arrow></van-nav-bar>
    <div class="container" v-if="list.length != 0">
      <div class="list" v-for="item,index in list" :key="index" >
        <div class="listAbout" @click="goToDetail('MySiteDetail',item.id)">
          <h1>{{item.title}}</h1>
          <h3>
            <span>{{item.district}}·{{item.area_min}}-{{item.area_max}}平米</span>
            &nbsp; | &nbsp;
            <span>{{item.create_time.timestamp}}</span>
          </h3>
        </div>
        <div class="listBtm">
          <i @click="LowerShelf(item.id)">下架</i>
          <i @click="goToDetail('siteMatching',item.id)">立即匹配</i>
        </div>
      </div>

    </div>
    <img class="noDataImg" v-else src="../../../assets/img/no_data.png" alt="">

    <footer>
      <button @click="wantTo('siteSelect')">
        我要选址
      </button>
    </footer>
     <van-popup class="clickPopup" :close-on-click-overlay='false' overlay v-model="isComplete">
        <van-loading  color="#F7241B" size='60px'/>
    </van-popup>
  </div>
</template>

<script>
  import qs from 'qs'
    import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
          list:[],
          isComplete:false
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
          this.isComplete = false
          console.log(data)
          var list = data.data.data.data
          for(var i = 0 ; i < list.length ; i++ ){
              this.list.push(list[i])
          }
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
              this.get(this.Interface.config.mySiteSelection)
          }
          console.log(res)
        })
      },
      LowerShelf(id) {
        this.post(this.Interface.config.siteSelectionDelete,{'id':id})
      }
    },
    mounted(){
        this.get(this.Interface.config.mySiteSelection)
        console.log(this.$cookieStore.getCookie('token'))
    }
  }

</script>

<style scoped lang='scss'>
  .container {
    background: #fff;
    padding: 0 30px;

    .list {
      padding: 40px 0;
      border-bottom: 2px solid #f4f4f4;

      .listAbout {
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        h1 {
          font-size: 34px;
          color: #1A1919;
          font-weight: bold;
          line-height: 34px;
          margin-bottom: 30px;
        }

        h3 {
          font-size: 26px;
          color: #999999;

        }
      }

      .listBtm {
        margin-top: 30px;
        display: flex;
        justify-content: flex-end;

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

    :last-child {
      border: none;
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
      border: none;
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
