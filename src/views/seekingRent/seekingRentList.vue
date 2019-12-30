<template>
  <div class="seekingRentList">
    <van-nav-bar title="地产求租" left-arrow @click-left='$router.go(-1)' />
    <div class="list">
      <div class="seekingList flex" v-for="item in list" @click="goToDetail('siteDetail',item.id)">
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
      <div class="LoadMore" v-if="list.length >= 10"  @click="LoadMore">
        点击加载更多
      </div>
    </div>
    <van-popup class="clickPopup" :close-on-click-overlay='false' overlay v-model="isComplete">
        <van-loading  color="#F7241B" size='60px'/>
    </van-popup>
  </div>
</template>

<script>
  import { Toast} from 'vant';
  export default {
    data() {
      return {
        list: [],
        isComplete:false,
        page:1,
        selectCity:this.$cookieStore.getCookie('city')


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
            'XX-Device-Type': 'mobile'
          }
        }).then((data) => {
          this.isComplete = false
          var list = data.data.data.data
          if(data.data.code == 1 ){
            for(var i = 0 ; i < list.length ; i++){
                this.list.push(list[i])
            }
            if(list.length == 0){
                Toast('没有更多数据了') 
            }
          }
          // this.list = data.data
        })
      },
        LoadMore(){
          this.isComplete = true
          this.page += 1 
          this.get(this.Interface.config.seekingRent,{page:this.page,globalArea:this.selectCity})
          
        }
    
    },
    mounted(){
      this.get(this.Interface.config.seekingRent,{page:this.page,globalArea:this.selectCity})
    }

  }

</script>

<style>

</style>
<style lang="scss" scoped>
  .seekingRentList {
    .clickPopup{
    padding: 50px;
    background: rgba(0,0,0,0)
  }
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

    .list {
      padding: 0 30px;
      background: #fff;

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

     .LoadMore{
      height: 100px;
      line-height: 100px;
      width: 100%;
      text-align: center;
      font-size: 28px;
    }

  }

</style>
