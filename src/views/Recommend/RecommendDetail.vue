<template>
  <div class="RecommendDetail" v-if="listDetail != null">
    <van-nav-bar @click-left='wantTo("index")' left-arrow fixed>
    </van-nav-bar>
    <!-- 轮播 -->
    <div class="swiper">
      <van-swipe :autoplay="3000" indicator-color="red">
        <van-swipe-item v-for="item,index in listDetail.house.house.more.photos" :key='index'>
          <img :src="'/upload/'+item.url" alt="">
        </van-swipe-item>

      </van-swipe>
    </div>
    <div class="Housing">

      <div class="HousingHeader">
        <div class="payMode">
          <img class="nfORyf" v-if="listDetail.house.can_monthly == 1" src="../../assets/img/sign_yue.png" alt="">
          <img class="nfORyf" v-else src="../../assets/img/sign_nian.png" alt="">
          <img class="nfyz" v-if="listDetail.house.can_monthly == 1" src="../../assets/img/bargan.png" alt="">

          <!-- <img v-if="listDetail.house.cr_examine > 0 || listDetail.house.cr_examine == -1"
            src="../../assets/img/authen.png" alt=""> -->
          <img v-if="listDetail.house.cr_examine != 0" src="../../assets/img/authen.png" alt="">
          <img v-else src="../../assets/img/noauthen.png" alt="">
        </div>
        <div class="title">
          <img v-if="listDetail.house.can_monthly == 1" src="../../assets/img/zhuanshi.gif" alt="">
          {{listDetail.house.title}}
        </div>
        <div class="Label" v-if="listDetail.house.merch_tags_arr.length>0">
          <i v-for="item in listDetail.house.merch_tags_arr">{{item}}</i>
        </div>
        <div class="moneyDetail ">
          <!-- 年租金 -->
          <div v-if="listDetail.house.can_monthly == 1" class="price moneyDetailList">
            <span v-if="listDetail.house.monthly_money > 1000 ">
              <b>{{listDetail.house.monthly_money}}</b>元
            </span>
            <span v-else>
              <b>面议</b>
            </span>
            <em>
              月租金
            </em>
          </div>
          <div class=" moneyDetailList" v-else>
            <span v-if="listDetail.house.capital > 5000">
              <b>{{listDetail.house.capital/10000}}</b>万
            </span>
            <span v-else>
              <b>面议</b>
            </span>
            <em>
              年租金
            </em>
          </div>

          <div class="price moneyDetailList">
            <span>
              <b>{{listDetail.house.house.area}}</b>m&sup2;
            </span>
            <em>
              面积
            </em>
          </div>


        </div>


        <div class="information flex">
          <!-- 发布时间 -->
          <span>
            发布于{{listDetail.house.create_time}}
          </span>
          <!-- 预约数量 -->
          <span>
            已有{{listDetail.house.appointCount}}人预约
          </span>
          <!-- 浏览数量 -->
          <span>
            已有{{listDetail.house.hits}}人浏览
          </span>


        </div>
      </div>
      <ul class="HousingAbout">
        <li>
          <span>房源面积 :</span>
          <b v-if="listDetail.house.house.area">{{listDetail.house.house.area}}m<sup>2</sup></b>
          <b v-else>暂无</b>
        </li>
        <li>
          <span>面 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 宽 :</span>
          <b v-if="listDetail.house.house.surface_width">{{listDetail.house.house.surface_width}}</b>
          <b v-else>暂无</b>

        </li>
        <li>
          <span>房源类型 :</span>
          <b v-if="listDetail.house.house.type">{{listDetail.house.house.type}} </b>
          <b v-else>暂无</b>

        </li>
        <li>
          <span>楼 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 层 :</span>
          <b v-if="listDetail.house.house.floor">{{listDetail.house.house.floor}}</b>
          <b v-else>暂无</b>

        </li>
        <li>
          <span>付款方式 :</span>
          <!-- <>{{listDetail.house.house.pay_type}}</b> -->
          <b v-if="listDetail.house.can_monthly == 0">
            年付
          </b>
          <b v-else>
            月付
          </b>

        </li>
        <li>
          <span>电 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 压 :</span>
          <b v-if="listDetail.house.house.voltage">{{listDetail.house.house.voltage}}</b>
          <b v-else>暂无</b>

        </li>
        <li>
          <span>商业属性 :</span>
          <b v-if="listDetail.house.house.business_attributes">{{listDetail.house.house.business_attributes}}</b>
          <b v-else>暂无</b>

        </li>
        <li>
          <span>产权性质 :</span>
          <b v-if="listDetail.house.house.nature_property_rights">{{listDetail.house.house.nature_property_rights}}</b>
          <b v-else>暂无</b>

        </li>
        <li>
          <span>装修状况 :</span>
          <b v-if="listDetail.house.house.decoration_status">{{listDetail.house.house.decoration_status}}</b>
          <b v-else>暂无</b>

        </li>
        <li>
          <span>房屋租史 :</span>
          <b v-if="listDetail.house.house.history_housing_rent">{{listDetail.house.house.history_housing_rent}}</b>
          <b v-else>暂无</b>
        </li>
      </ul>
      <div class="HousingWhere">
        <div class="title">
          <b>{{listDetail.house.title}}</b>
          <span>{{listDetail.house.house.street}}</span>
        </div>
        <div class="mapBox">
          <baidu-map class="map" :center="listDetail.house.house.location" :zoom="15">
            <bm-marker :position="listDetail.house.house.location" :dragging="true" animation="BMAP_ANIMATION_BOUNCE"
              :icon='mapIcon' :offset="{width:-10,height:-25}"></bm-marker>
            <!--  :icon="{url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif', size: {width: 300, height: 157}}" -->
          </baidu-map>
        </div>

      </div>
    </div>
    <!-- 可复用的模块 -->
    <div class="Modular">
      <div class="title flex">
        <span>
          <i></i>
          配套设施
        </span>
      </div>
      <div class="content">
        <ol v-if="listDetail.house.house.facilities_info.length != 0">
          <li v-for="t in listDetail.house.house.facilities_info">
            <!-- 电梯 -->
            <!-- <i class="Elevator"></i> -->
            <img :src="t.config" alt="">
            <span>{{t.dict_name}}</span>
          </li>

        </ol>
        <span class="noAbout" v-else>
          暂无采集该房屋配套信息。
        </span>
      </div>
    </div>
    <div class="Modular">
      <div class="title flex">
        <span>
          <i></i>
          房源描述</span>
      </div>
      <div class="content describe">
        <div v-if="listDetail.house.description">
          {{listDetail.house.description}}
        </div>
        <span class="noAbout" v-else>
          房屋光线充足实际可用面积大，周围商铺较多人员流动量广，紧邻公交站，接近市中心。
        </span>
      </div>
    </div>
    <div class="Modular">
      <div class="title flex">
        <span>
          <i></i>
          官方描述</span>
      </div>
      <div class="content describe">
        <div v-if="listDetail.house.house.desc">
          {{listDetail.house.house.desc}}
        </div>
        <span class="noAbout" v-else>
          该房屋产权明晰，房源真实有效,绝无虚假!报价为房东真实报价。
        </span>
      </div>
    </div>
    <div class="Modular">
      <div class="title flex">
        <span>
          <i></i>
          历史经营</span>
      </div>
      <div class="content describe">
        <div v-if="listDetail.house.house.operate">
          {{listDetail.house.house.operate}}
        </div>
        <span class="noAbout" v-else>
          暂无采集该房屋历史租赁信息。
        </span>
      </div>
    </div>
    <div class="Modular">
      <div class="title flex">
        <span>
          <i></i>
          其他房源推荐
        </span>
        <em @click="wantTo('RecommendList')">
          更多
          <van-icon name="arrow" />
        </em>
      </div>
      <div class="content">
        <div class="RecommendList" v-for="item,index in list" :key="index" @click="newDetail(item.id)">
          <img class="houseImg" :src="'/upload/'+item.thumbnail">
          <img class="nfORyf" v-if="item.can_monthly == 1" src="../../assets/img/sign_yue.png" alt="">
          <img class="nfORyf" v-else src="../../assets/img/sign_nian.png" alt="">

          <!-- <img src="item.thumbnail" > -->
          <div class="RecommendListRight">
            <h4>
              <img v-if="item.can_monthly == 1" src="../../assets/img/zhuanshi.gif" alt="">
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
                  <b>￥{{item.monthly_money}}</b>万/月
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

      </div>
    </div>
    <footer class="flex">
      <div class="Collection" @click="loginClick('Collection')">
        <i :class="isCollection == 0?'':'isLike'"></i>
        收藏
      </div>
      <button v-if="listDetail.house.can_monthly == 1" @click="loginClick('Apply')" class="callZX">
        申请月付
      </button>
      <button v-else class="callZX" @click="loginClick('callPhone')">
        电话咨询
      </button>
      <button class="appointment" @click="loginClick('appointment')">
        预约看房
      </button>
    </footer>
    <div class="first">
      <van-popup v-model="show" position="bottom" closeable>
        <div class="title">
          请填写约看信息
        </div>
        <ul>
          <li>
            <span>约看时间</span>
            <div class="AboutSeeing flex" @click="selectDate">
              <div class="left">
                <em>
                  {{nextDay}}
                </em>&nbsp;
                <i v-if="isIime">
                  明天
                </i>

              </div>
              <van-icon name="arrow" />
            </div>
          </li>
          <li>
            <span>个人信息</span>
            <div class="AboutSeeing">
              <input type="text" v-model="name" placeholder="您的姓名">
            </div>
            <div class="AboutSeeing">
              <input type="number" v-model="phone" placeholder="您的手机号码">
            </div>

          </li>

        </ul>
        <div class="footer">
          <button @click="makeAppointment">
            立即预约
          </button>
        </div>
      </van-popup>
    </div>
    <div class="two">
      <van-popup v-model="selectTime" position="bottom">
        <van-datetime-picker v-model="currentDate" type="date" @cancel=" selectTime=false" @confirm="confirmTime"
          :min-date="now" :max-date="maxDate" />
      </van-popup>
    </div>
    <div style="height:60px;"></div>
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';
  import {
    Dialog
  } from 'vant';
  import qs from 'qs'
  export default {
    data() {
      return {


        mapIcon: {
          url: require('../../assets/img/mapCover.png'),
          size: {
            width: 30,
            height: 30
          }
        },
        show: false,
        nextDay: '',
        selectTime: false,
        currentDate: new Date(),
        now: new Date(), //现在的时间
        maxDate: '', //最远选多久
        isIime: true, //是否显示明天
        id: '', //id
        listDetail: null,
        token: this.$cookieStore.getCookie('token'),
        isCollection: 0,
        list: [],
        name: '',
        phone: '',
        selectCity: this.$cookieStore.getCookie('city')
      }
    },
    methods: {
      // 
      getDate() {
        var day = new Date();
        day.setTime(day.getTime() + 24 * 60 * 60 * 1000);
        var nextDay = (day.getMonth() + 1) + "月" + day.getDate() + "日";
        this.nextDay = nextDay
        // console.log(this.GetDateStr(1))
        this.maxDate = new Date(this.GetDateStr(7))
      },
      GetDateStr(AddDayCount) {
        var dd = new Date();
        dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
        var y = dd.getFullYear();
        var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1); //获取当前月份的日期，不足10补0
        var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
        return y + "-" + m + "-" + d;
      },
      confirmTime() {

        this.selectTime = false;
        var day = this.currentDate
        day.setTime(day.getTime());
        var nextDay = (day.getMonth() + 1) + "月" + day.getDate() + "日";

        this.nextDay = nextDay

        this.isIime = false


      },
      selectDate() {
        this.selectTime = !this.selectTime;

      },
      get(apiUrl, getData, index) {
        this.$axios({
          url: apiUrl,
          method: 'get',
          params: getData,
          headers: {
            'XX-Token': this.$cookieStore.getCookie('token', ''),
            'XX-Device-Type': 'mobile'
          }
        }).then((data) => {
          console.log(data)
          if (data.data.code == 1) {
            if (index == 1) {
              this.listDetail = data.data.data
              this.isCollection = data.data.data.isLike
              this.get(this.Interface.config.AllList, {
                'house_id': this.id,
                globalArea: this.selectCity,
                region: data.data.data.house.region
              }, 2)
            } else if (index == 2) {
              this.list = data.data.data.data
            } else if (index == 3) {
              var isAuth = data.data.data.is_auth
              if(isAuth == 0){
                Dialog.confirm({
                  title: '身份认证',
                  message: '您还未进行四要素认证，是否前往认证'
                }).then(() => {
                  this.wantTo('ApplyBzg')
                })
              }else{
                 this.goToDetail('riskTips',this.id)
              }
            }
          }
        })
      },
      post(data, apiUri, type) {
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

          if (type == 'Collection') {
            this.get(this.Interface.config.listDetail, {
              'id': this.id
            }, 1)
          } else if (type == 'appointment') {
            if (res.data.code == 1) {
              this.$router.push({
                name: 'MyAppointment',
              })
            }

          }
        })
      },
      loginClick(Which) {
        if (this.token == null) {
          Toast("您还未登录，立即去登录")
          this.$router.push({
            name: 'login',
          })
        } else if (Which == 'callPhone') {
          this.callPhone()
        } else if (Which == 'Collection') {
          this.Collection()
        } else if (Which == 'appointment') {
          this.appointment()
        } else if (Which == 'Apply') {
          this.Apply()
        }
      },
      callPhone() {
        window.location.href = 'tel://' + this.listDetail.phone
      },
      appointment() {
        this.show = !this.show
      },
      makeAppointment() {
        var time = parseInt(this.currentDate.getTime() / 1000);
        this.post({
            appoint_date: time,
            house_id: this.id,
            user_name: this.name,
            user_phone: this.phone
          },
          this.Interface.config.appoint,
          'appointment'
        )
      },
      Collection() {
        this.post({
            house_id: this.id,
            type: 1
          },
          this.Interface.config.isCollection,
          'Collection'
        )
      },
      newDetail(newID) {
        this.getDate()
        if (newID == undefined) {
          let id = this.$route.params.id
          this.id = id
        } else {
          this.id = newID
        }
        this.get(this.Interface.config.listDetail, {
          'id': this.id
        }, 1)
        document.documentElement.scrollTop = 0
        mui.scrollTo(0, 1);
      },
      Apply() {
        this.get(this.Interface.config.isAuth,'',3)
        // this.wantTo('riskTips')

      }

    },
    mounted() {
      this.newDetail()



    },
  }

</script>


<style lang='scss' scoped>
  .RecommendDetail {


    /*导航*/
    .van-nav-bar {
      height: 100px;
      line-height: 100px;
      background: rgba(0, 0, 0, 0);

      .van-nav-bar__title {
        font-size: 36px;
      }

      .van-icon {
        font-size: 50px;
        color: #fff;
      }

      .van-nav-bar__right {

        .share {
          display: inline-block;
          width: 44px;
          height: 44px;
          background-image: url(../../assets/img/RecommendDetailIcons.png);
          background-size: 176px 44px;
          background-position: -44px 0;
          vertical-align: middle;

        }
      }

    }

    .van-hairline--bottom::after {
      border: 0;

    }

    // 轮播
    .swiper {
      /deep/ .van-swipe {
        height: 560px;

        img {
          width: 100%;
          height: 560px;
        }
      }


      /deep/ .van-swipe__indicator {
        width: 12px;
        height: 12px;
        margin-right: 28px;
      }
    }

    .Housing {
      background: #fff;
      padding: 0 30px;
      width: 100%;

      .payMode {
        display: flex;

        img {
          margin-right: 10px;
          ;
          height: 40px;
          ;
        }

        .nfORyf {
          width: 70px;
          height: 40px;
        }

        .nfyz {
          width: 130px;
          height: 40px;
        }
      }

      .HousingHeader {
        border-bottom: 2px solid #ebebeb;
        padding: 30px 0;

        .title {
          color: #1A1919;
          font-size: 40px;
          display: flex;
          align-items: center;
          margin-top: 20px;

          img {
            width: 68px;
          }
        }

        .Label {
          display: flex;
          padding: 10px 0;
          flex-wrap: wrap;

          i {
            display: inline-block;
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

        .moneyDetail {
          height: 152px;
          margin-top: 30px;
          padding: 30px 0;
          display: flex;
          align-items: center;
          border-top: 2px solid #efefef;
          border-bottom: 2px solid #efefef;

          .moneyDetailList {
            width: 49.5%;
            text-align: center;
            border-right: 2px solid #efefef;

            span {
              font-size: 28px;
              color: #F7241B;
              height: 100%;
              font-weight: bold;

              b {
                font-size: 60px;
              }
            }

            em {
              display: block;
              font-size: 24px;
              color: #999999;
            }
          }

          :last-child {
            border: 0;
          }

        }


        .information {
          color: #999999;
          font-size: 24px;
          margin-top: 30px;
        }
      }

      .HousingAbout {
        padding: 40px 0;
        display: flex;
        flex-wrap: wrap;
        border-bottom: 2px solid #ebebeb;

        li {
          display: block;
          font-size: 28px;
          width: 50%;
          margin-bottom: 20px;
          display: flex;

          span {
            color: #999;
            display: block;
            margin-right: 37px;
          }

          b {
            font-weight: 400;
          }
        }
      }

      .HousingWhere {
        padding: 30px 0;

        .title {
          b {
            font-size: 34px;
            font-weight: 400;
            display: block;
            margin-bottom: 18px;
          }

          span {
            color: #999;
            font-size: 24px;
          }
        }

        .mapBox {
          margin-top: 40px;
          width: 100%;
          height: 250px;

          .map {
            width: 100%;
            height: 100%;

          }


        }
      }
    }

    .Modular {
      padding: 30px;
      background: #fff;
      margin-top: 30px;

      .title {

        align-items: center;
        color: #999;
        font-size: 26px;
        display: flex;
        padding-bottom: 10px;

        span {
          display: flex;
          height: 26px;
          line-height: 24px;

          i {
            display: block;
            width: 4px;
            height: 100%;
            background: #F7241B;
            margin-right: 10px;
          }

        }
      }

      .describe {
        padding: 30px 0;
        font-size: 28px;
      }

      .content {
        .noAbout {
          color: #999;
        }

        ol {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          padding: 0 25px;

          li {
            width: 25%;
            padding: 20px 0;
            text-align: center;

            img {
              display: block;
              width: 54px;
              margin: 0 auto;
              margin-bottom: 20px;
              height: 54px;
            }

            span {
              font-size: 24px;
            }
          }
        }

        .description {
          padding-top: 40px;

          li {
            margin-bottom: 40px;
            font-size: 24px;

            b {
              font-weight: 400;

            }
          }
        }

        .seeMore {
          width: 230px;
          height: 80px;
          border: 2px solid #F7241B;
          color: #F7241B;
          text-align: center;
          line-height: 80px;
          font-size: 26px;
          margin: 0 auto;
          border-radius: 6px;
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
            width: 70px;
            height: 40px;
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

              img {
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

      }
    }

    footer {
      height: 120px;
      padding: 0 30px;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 2px solid #EFEFEF;

      .Collection {
        font-size: 24px;
        color: #999;

        i {
          display: block;
          width: 44px;
          height: 44px;
          background-image: url(../../assets/img/RecommendDetailIcons.png);
          background-size: 176px 44px;
          background-position: -88px 0;
        }

        i.isLike {
          background-position: -132px 0;
        }
      }

      button {
        width: 290px;
        height: 88px;
        border-radius: 44px;
        border: 0;
        font-size: 34px;

      }

      .callZX {
        border: 2px solid #F7241B;
        color: #F7241B;
        background: #fff;
      }

      .appointment {
        background: #F7241B;
        color: #fff;
      }
    }

    .first /deep/ .van-popup {
      .van-popup__close-icon {
        font-size: 44px;
        top: 33px;
        right: 33px;
      }

      .title {
        height: 100px;
        box-shadow: 0px 2px 4px 0px rgba(191, 191, 191, 0.4);
        font-size: 34px;
        text-align: center;
        line-height: 100px;
      }

      ul {
        padding: 0 30px;

        li {
          padding-top: 50px;

          span {
            display: block;
            font-size: 30px;
            margin-bottom: 20px;
            color: #333333;
          }

          .AboutSeeing {
            border-bottom: 2px solid #EFEFEF;
            height: 100px;
            color: #999;
            align-items: center;

            .left {

              em {
                font-size: 40px;
                color: #333333;
              }
            }

            /deep/ .van-icon {
              font-size: 30px;
            }

            input {
              font-size: 30px;
              border: 0;
              height: 100%;
              width: 100%;
            }
          }
        }
      }

      .footer {

        width: 100%;
        height: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #EFEFEF;

        button {
          width: 480px;
          height: 88px;
          border-radius: 44px;
          background: #F7281F;
          color: #fff;
          font-weight: bold;
          border: 0;
          font-size: 32px;
        }
      }
    }

    .two {
      /deep/ .van-picker {
        .van-picker__toolbar {
          height: 100px;
          line-height: 100px;

          .van-picker__cancel,
          .van-picker__confirm {
            color: #F7241B;
            font-size: 30px;
          }
        }

        .van-picker__columns {
          .van-picker-column__item {
            font-size: 32px;
          }
        }
      }
    }
  }

</style>
<style lang="scss">
  .van-dialog {
    .van-dialog__header {
      height: 100px;
      line-height: 50px;
      font-size: 40px;
    }

    .van-dialog__footer--buttons {
      .van-button--large {
        height: 100px;
        font-size: 30px;
      }

      .van-dialog__confirm,
      .van-dialog__confirm:active {
        color: #F7241B;
      }
    }

  }

</style>
