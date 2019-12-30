<template>
  <div>
    <van-nav-bar @click-left='$router.go(-1)' title="匹配信息" left-arrow></van-nav-bar>
    <header class="flex">
      <span>
        排序规则
      </span>
      <span>
        按匹配度排序 <i></i>
      </span>
    </header>
    <ul class="lists">
      <li v-for="item in list" class="flex" @click="goToDetail('RecommendDetail',item.id)">
        <div class=" listTop">
          <img :src="'/upload/'+item.thumbnail" alt="">
          <div class="listAbout">
            <h1>{{item.title}}</h1>
            <h2>{{item.house.street}}</h2>
            <h3>
              <span>{{item.city}}·{{item.house.type}}</span>
              &nbsp; | &nbsp;
              <span>08-21</span>
            </h3>
          </div>
        </div>

        <i class="right"></i>

      </li>

    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          list:[],
          id:''
      }
    },
    methods:{
      get(apiUrl,postData) {
        this.$axios({
          url: apiUrl,
          method: 'get',
          params: postData,
          headers: {
            'XX-Token': this.$cookieStore.getCookie('token'),
            'XX-Device-Type': 'mobile'
          }
        }).then((data) => {
          console.log(data)
          this.list = data.data.data
        })
      },
    },
    mounted(){
      let id = this.$route.params.id
      this.id = id
      this.get(this.Interface.config.siteSelectionMatching,{'id':id})
    }
  }

</script>

<style scoped lang='scss'>
  header {
    height: 70px;
    align-items: center;
    padding: 0 30px;

    span {
      font-size: 24px;

      i {
        display: inline-block;
        margin-left: 12px;
        width: 26px;
        height: 26px;
        background-image: url(../../../assets/img/match.png);
        background-size: 50px 26px;
      }
    }
  }

  .lists {
    background: #fff;
    padding: 0 30px;
    width: 100%;

    li {
      border-bottom: 2px solid #EEEBEA;
      align-items: center;
      padding: 30px 0;

      .listTop {
        display: flex;


        img {
          width: 190px;
          height: 140px;
          border-radius: 4px;
          margin-right: 30px;
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
        }
      }

      i.right {
        display: block;
        width: 20px;
        height: 26px;
        background-image: url(../../../assets/img/match.png);
        background-size: 50px 26px;
        background-position: -30px 0;
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