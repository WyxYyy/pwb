<template>
  <div>
    <van-nav-bar @click-left='wantTo("my")' title="我的预约" left-arrow style="font-size: 20px"></van-nav-bar>
    <div v-if="list.length >= 1" class="lists">
      <div class="list" v-for="item,index in list" :key="index" @click="goToDetail('MyAppointmentDetail',item.id)">
        <div class="timeType flex">
          <span>
            预约时间：{{item.appoint_date}}
          </span>
          <em v-if="item.status == 0">
            等待房管确认
          </em>
          <em v-else>
            房管已确认
          </em>
        </div>
        <div class="RecommendList">
          <img :src="'/upload/'+item.merch.thumbnail" alt="">
          <div class="RecommendListRight">
            <h4>
              {{item.merch.title}}
            </h4>
            <h5>
              <van-icon name="location" />
              位于{{item.merch.region_info[2].area_name}}
            </h5>
               <h3 class="flex">
              <span v-if="item.can_monthly == 0">
                <em v-if="item.capital > 1000">
                  <b>￥{{item.capital/10000}}</b>万/年
                </em>
                <em v-else>
                  <b>
                    面议
                  </b>
                </em>
              </span>
              <span v-else>
                <em v-if="item.monthly_money > 1000">
                  <b>￥{{item.monthly_money}}</b>元/月
                </em>
                <em v-else>
                  <b>
                    面议
                  </b>
                </em>
              </span>
              <img v-if="item.cr_examine != 0" src="../../assets/img/authen.png" alt="">
              <!-- <img v-if="item.merch.cr_examine > 0 || item.merch.cr_examine == -1" src="../../assets/img/authen.png" alt=""> -->
              <img v-else src="../../assets/img/noauthen.png" alt="">

            </h3>

          </div>
        </div>
      
      </div>
      
    </div>
    <div v-else class="noData">
        <img src="../../assets/img/no_data.png" alt="">
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list:[]
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
            if(data.data.code == 1){
              this.list = data.data.data.data
            }
            this.VerificationToken(data)
        })
      },
    },
    mounted(){
      this.get(this.Interface.config.myAppoint)
    }
  }

</script>
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
<style lang='scss' scoped>
 .noData{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
      img{
        width: 45%;
        margin-top: -50%;;
      }
      
    }
  .lists {
    padding: 0 30px;
    background: #fff;

    .list {
      border-bottom: 1px solid #F4F4F4;

      .timeType {
        font-size: 26px;
        padding-top: 40px;

        span {
          color: #999;
        }

        em {
          color: #F7241B;
        }
      }

      .RecommendList {
        padding: 30px 0;
        display: flex;

        img {
          width: 190px;
          height: 140px;
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

        em.active {
          background: #F7241B;
          color: #fff;
          border: 0;
        }
      }
    }
  }

</style>
