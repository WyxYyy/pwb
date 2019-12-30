<template>
  <div v-if="detail != ''">
    <van-nav-bar @click-left='$router.go(-1)' title="预约详情" left-arrow style="font-size: 20px"></van-nav-bar>
    <div class="detail">
      <div class="RecommendList">
        <img :src="detail.merch.thumbnail" alt="">
        <div class="RecommendListRight">
          <h4>{{detail.merch.title}}</h4>
          <h5>
            <van-icon name="location" />
            位于{{detail.merch.house.address}}
          </h5>
          <h6 class="flex">
            
            <span v-if="detail.merch.can_monthly == 1">
                  <b>￥{{detail.merch.monthly_money}}</b>元/月
            </span>
            <span v-else>
              <b>￥{{detail.merch.capital/10000}}</b>万/年
            </span>
            <i>含服务费</i>
          </h6>
           
        </div>
      </div>
      <div class="detailInformation">
        <div class="Modular">
          <div class=" Tips flex ">
            <span>
              预约时间
            </span>
            <em>
              {{SurplusDate}}
            </em>
          </div>
          <div class="time">
            {{detail.appoint_date_text}}
          </div>
        </div>
        <div class="Modular">
          <div class=" Tips  ">
            <span>
              联系方式
            </span>
          </div>
          <div class="call flex">
            <div class="callLeft">
             
              <span>
                电话 ： {{detail.keeper_mobile}}
              </span>
            </div>
            <i class="phone" @click="callPhone(detail.keeper_mobile)"></i>
          </div>
        </div>
        <div class="Modular">
          <div class=" Tips  ">
            <span>
              地址
            </span>
          </div>
          <div class="where">
            {{detail.merch.house.address}}
          </div>
        </div>
      </div>

    </div>
    <div class="Navigation">
      <div class="btn" @click="Navigation">
        导航路线，前去看房
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

        id: '',
        detail: '',
        SurplusDate: "",
        type:false,                 //是否是 APP
      }
    },
    methods: {
      callPhone(phoneNumber) {
        window.location.href = 'tel://' + phoneNumber
      },
      navigateWithMap(){
        // 设置目标位置坐标点和其实位置坐标点
        var dst = new plus.maps.Point(this.detail.merch.house.location); // 天安门 
        
        // 调用系统地图显示 
        // plus.maps.openSysMap(dst, '天安门', src);
        plus.maps.openSysMap(dst,this.detail.merch.title,dst);
      },
      Navigation() {
        if(this.type == false){
            window.location.href = 'http://api.map.baidu.com/geocoder?address=' + this.detail.merch.house.address +
            '&output=html&src=webapp.baidu.openAPIdemo'
        }else{
          this.navigateWithMap()
        }
        
      },
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
          this.detail = data.data.data
          this.getSurplusDate()


        })
      },
      formatDuring(mss) {
        var days = parseInt(mss / (1000 * 60 * 60 * 24));
        var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = (mss % (1000 * 60)) / 1000;
        return days + " 天 " + hours + " 小时 " + minutes + " 分钟 ";
      },
      getSurplusDate() {
        var nowDate = Date.parse(new Date())/1000 ,
            Surplus = this.detail.count_down - nowDate
          if(Surplus <= 0){
            this.SurplusDate = '已过期'
          }else{
             this.SurplusDate = this.formatDuring(Surplus*1000)
          }
        // console.log('预约时间'+ this.detail.appoint_date)
        // console.log('现在时间'+ nowDate)

        // console.log(Surplus)
      }

    },
    mounted() {
      let id = this.$route.params.id
      this.id = id
      this.get(this.Interface.config.appointDetail, {
        id: this.id
      })
      if(window.plus){
        console.log('这是APP')
        this.type = true

      }else{
        console.log('这是WEB')
        this.type = false

      }
    }
  }

</script>

<style scoped lang='scss'>
  .detail {
    padding: 0 30px;

    .RecommendList {
      margin-top: 30px;
      padding: 20px 30px;
      display: flex;
      justify-content: space-between;
      background: #fff;

      img {
        width: 190px;
        height: 140px;
        border-radius: 6px;
        display: block;
        margin-right: 30px;
      }

      .RecommendListRight {
        height: 140px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h4 {
          width: 400px;
          font-size: 30px;
          font-weight: 400;
          color: #1A1919;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        h5 {
          color: #C1C1C1;
          font-size: 24px;
          font-weight: 400;

        }

        h6 {
          align-items: center;

          span {
            font-size: 26px;
            color: #999;

            b {
              color: #F7241B;
              font-size: 32px;
            }
          }

          i {
            font-size: 22px;
            color: #BDBDBD;
          }
        }


      }
    }

    .detailInformation {
      margin-top: 30px;
      background: #fff;
      padding: 0 30px;

      .Modular {
        padding: 40px 0;
        border-bottom: 2px solid #EEEBEA;

        .Tips {
          align-items: center;
          font-size: 26px;
          margin-bottom: 25px;

          span {
            color: #C1C1C1;
          }

          em {
            color: #F7241B;
          }
        }

        .time {
          color: #333333;
          font-size: 32px;
        }

        .call {
          font-size: 32px;
          .callLeft {
            height: 70px;
            display: flex;
            color: #333;
            align-items: center;
            justify-content: space-between;
          }

          .phone {
            display: block;
            width: 70px;
            height: 70px;
            background: url(../../assets/img/yux_icon.png);
            background-size: 94px 70px;
            background-position: 0 0;
          }
        }

        .where {
          font-size: 32px;
        }
      }
    }

  }

  .Navigation {
    width: 100%;
    height: 120px;
    background: #fff;
    padding: 16px 30px;
    position: fixed;
    bottom: 0;

    .btn {
      width: 100%;
      height: 100%;
      border-radius: 44px;
      background: #F7241B;
      color: #fff;
      text-align: center;
      font-size: 32px;
      font-weight: bold;
      line-height: 88px
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
