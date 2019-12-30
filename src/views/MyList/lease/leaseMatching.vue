<template>
  <div>
    <van-nav-bar @click-left='$router.go(-1)' title="匹配信息" left-arrow></van-nav-bar>
    <div v-if="lists.length >= 1">
      <header class="flex">
        <span>
          排序规则
        </span>
        <span>
          按匹配度排序 <i></i>
        </span>
      </header>
      <ul class="lists">
        <li v-for="item,index in lists" :key="index" class="flex" @click="goToDetail('siteDetail',item.id)">
          <div class="information">
            <span class="title">
              {{item.title}}
            </span>
            <span class="typeDate">
              {{item.district}} · {{item.shop_type}}
              &nbsp; | &nbsp;
              {{item.create_time.timestamp}}
            </span>
          </div>
          <div class="understandMore">
            了解更多
          </div>
        </li>

      </ul>
    </div>
    <div v-else class="noData">
        <img src="../../../assets/img/no_data.png" alt="">
    </div>
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        lists: [],
        id: '',

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
          this.lists = data.data.data
        })
      },
    },
    mounted() {
      let id = this.$route.params.id
      this.id = id
      this.get(this.Interface.config.leaseMatching, {
        id: id
      })
    }
  }

</script>

<style scoped lang='scss'>
.noData {
     position: absolute;
     width: 100%;
     height: 100%;
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
      padding: 30px 0;
      width: 100%;
      align-items: center;
      border-bottom: 2px solid #EEEBEA;

      .understandMore {
        border: 2px solid rgba(247, 36, 27, 1);
        border-radius: 28px;
        width: 155px;
        height: 56px;
        color: #F7241B;
        line-height: 56px;
        text-align: center;
        font-size: 28px;
      }

      .information {
        .title {
          font-size: 32px;
          font-weight: bold;
          display: block;
          margin-bottom: 30px;
        }

        .typeDate {
          font-size: 26px;
          color: #999;
          font-weight: 400;
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
