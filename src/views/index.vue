<template>
  <div class="index">
    <header class="flex">
      <nav @click="wantTo('selectCity')" v-if="locationCity != '定位失败'" class="ChoiceAddress">
        {{selectCity}}
        <i></i>
      </nav>
      <nav @click="wantTo('selectCity')" v-else class="ChoiceAddress">
        太原
        <i></i>
      </nav>
      <nav class="navSearch">
        <input @click="wantTo('searchList')" type="text" placeholder="请输入区域/街道/商圈">
        <i></i>
      </nav>
      <nav class="navNews" @click="wantTo('newsList')">
        <i></i>
      </nav>
    </header>
    <div style="height:64px"></div>
    <!-- 轮播 -->
    <div class="swiper">
      <van-swipe :autoplay="3000" indicator-color="red">
        <van-swipe-item v-for="item,index in headerImg" :key='index'>
          <img :src="item.src" @click="wantTo(item.wantTo,{what:item.what})">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 分类列表 -->
    <div class="typeHouse flex">
      <div class="typeHouseList" @click="wantTo('RecommendList',{type:'1002'})">
        <i></i>
        <span>写字楼</span>
      </div>
      <div class="typeHouseList" @click="wantTo('RecommendList',{type:'1001'})">
        <i class="shops"></i>
        <span>商 铺</span>
      </div>
      <!-- 月付地产指的是全部 -->
      <div class="typeHouseList" @click="wantTo('RecommendList',{type:'yf'})">
        <i class="all"></i>
        <span>月付地产</span>
      </div>
    </div>
    <!-- 公告 -->
    <div class="Notice">
      <div class="flex">
        <b class="NoticeTitle">
          <img src="../assets/img/notice.png" alt="">
        </b>
        <div class="NoticeBox">
          <ul ref="con1">
            <div :class="{anim:animate}">
              <li v-for="(item,index) in newsList" :key="index" v-if='index<10'>
                {{item.post_excerpt}}
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <!-- 列表 -->
    <div class="typeList">
      <div class="flex typeListBig">
        <div @click="wantTo('RecommendList',{type:'1001'})"></div>
        <div @click="wantTo('RecommendList',{type:'1002'})"></div>
      </div>
      <div class="flex typeListSmall">
        <div @click="wantTo('RecommendList',{type:'1003'})"></div>
        <div @click="wantTo('RecommendList',{type:'1004'})"></div>
        <div @click="wantTo('RecommendList',{type:'1005'})"></div>
      </div>
    </div>
    <!-- 优质房源 -->
    <div class="Sublet">
      <div class="title flex">
        <div class="titleLeft">
          <span>优质房源</span>
          <em>个人房源，官方审核，安全可靠</em>
        </div>
        <div class="titleRight" @click="wantTo('RecommendList')">
          更多 <i></i>
        </div>
      </div>
      <div class="SubletSwiper" v-if="wellList.length != 0">
        <van-swipe @change="onChange" :autoplay="4000" indicator-color="red">
          <van-swipe-item v-for="item,index in wellList" :key="index" @click="goToDetail('RecommendDetail',item.id)">
            <img :src="'/upload/'+item.thumbnail">
            <div class="SubletSwiperTitle">
              <h3>
                {{item.title}}
                <img class="yue_nian" v-if="item.can_monthly == 1"  src="../assets/img/sign_yue.png">
                <img class="yue_nian" v-else src="../assets/img/sign_nian.png">

              </h3>
              <h5 class="flex">
                <span>
                  {{item.house.street}}
                </span>
                <span v-if="item.monthly_money >1000">
                  <b>￥{{parseInt(item.monthly_money) }}</b> 元/月
                </span>
                <span v-else>
                  <b>
                    面议
                  </b>
                </span>
              </h5>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <img v-else class="noData" @click="wantTo('rentalSublease')" src="../assets/img/rent.png" alt="">
    </div>
    <!-- 选址求租 -->
    <div class="seeking">
      <div class="title flex">
        <div class="titleLeft">
          <span>选址求租</span>
          <em>个人发布，快速找到求租伙伴</em>
        </div>
        <div class="titleRight" @click="wantTo('seekingRentList')">
          更多 <i></i>
        </div>
      </div>
      <div v-if="seekingList.length != 0">
        <div class="seekingList flex" v-for="item,index in seekingList" :key="index"
          @click="goToDetail('siteDetail',item.id)">
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
      </div>

      <img v-else class="noData" @click="wantTo('siteSelect')" src="../assets/img/site.png" alt="">
    </div>
    <!-- 为你推荐 -->
    <div class="Recommend">
      <div class="title flex">
        <div class="titleLeft">
          <span>为你推荐</span>
          <em>精挑细选，总有一套适合您</em>
        </div>
        <div class="titleRight" @click="wantTo('RecommendList')">
          更多 <i></i>
        </div>
      </div>
      <div class="RecommendTab" v-if="AllList.length != 0">
        <div class="RecommendList" v-for="item,index in AllList" :key="index"
          @click="goToDetail('RecommendDetail',item.id)">
          <img class="houseImg" :src="'/upload/'+item.thumbnail">
          <img class="nfORyf" v-if="item.can_monthly == 1"  src="../assets/img/sign_yue.png" alt="">
          <img class="nfORyf" v-else  src="../assets/img/sign_nian.png" alt="">
          <!-- <img src="item.thumbnail" > -->
          <div class="RecommendListRight">
            <h4> 
                <img v-if="item.can_monthly == 1"  src="../assets/img/zhuanshi.gif" alt="">
               {{item.title}}
            </h4>
            <h5>
              <van-icon name="location" />
              位于{{item.region_info[2].area_name}}
            </h5>
            <h6 v-if="item.merch_tags_arr.length > 0">
              <!-- <i v-for="(i,index) in item.marks" :key='index' v-if='index<3'> {{i.landmark_name}}</i> -->
              <i v-for="(i,index) in item.merch_tags_arr " :key='index' v-if='index<3'>{{i}}</i>
            </h6>
            <h3 class="flex">
              <span v-if="item.can_monthly == 1">
                <em v-if="item.monthly_money > 1000">
                  <b>￥{{parseInt(item.monthly_money) }}</b>元/月
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
              
              <!-- <img v-if="item.cr_examine > 0 || item.cr_examine == -1" src="../assets/img/authen.png" alt=""> -->
              <img v-if="item.cr_examine != 0" src="../assets/img/authen.png" alt="">

              <img v-else src="../assets/img/noauthen.png" alt="">

            </h3>
          </div>
        </div>

      </div>
      <img v-else class="noData" src="../assets/img/recommend.png" alt="">
    </div>
    <div class="Baseline">
      <div class="Line"></div>
      <span>
        我是有底线的~
      </span>
    </div>


    <footerBar whoShow=1></footerBar>
    <div class="Progress" v-if="downloadStatus && downloadPercent <100">
      <!--  -->
      <van-circle v-model="newDownloadPercent" :rate="downloadPercent" :speed="10" :text="downloadPercent+'%'" />
    </div>
    <van-popup class="clickPopup" :close-on-click-overlay='false' overlay v-model="isComplete">
      <van-loading color="#F7241B" size='60px' />
    </van-popup>
  </div>
</template>

<script>
  import footerBar from '@/components/footerBar'
  import BMap from 'BMap'
  export default {
    data() {
      return {
        headerImg: [{
            src: require('../assets/img/banner1.png'),
            wantTo: '',
            what: ''
          }, {
            src: require('../assets/img/banner4.png'),
            wantTo: '',
            what: ''
          }, {
            src: require('../assets/img/banner5.png'),
            wantTo: 'poster',
            what: 'yf',
          }, {
            src: require('../assets/img/banner6.png'),
            wantTo: 'poster',
            what: 'mf'
          },

        ],
        AllList: [], //底部列表
        current: 0,
        newsList: [], //新闻列表
        animate: false, //是否滚动     
        intNum: undefined,
        seekingList: [], //求租列表
        wellList: [], //优质列表
        newDownloadPercent: 0,
        isComplete: false, //是否加载完成
        selectCity: this.$cookieStore.getCookie('city')
      }
    },
    components: {
      footerBar,
    },
    methods: {
      // 定位
      dz() {
        console.log('开始走')
        var that = this
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function getinfo(position) {
          let city = position.address.city; //获取城市信息       
          let province = position.address.province;
          // console.log(city+'--'+province)
          console.log(position)
          that.$cookieStore.setCookie('city', city) //将城市名称保存到locationCity中
          that.selectCity = city
          that.getData()
        }, function (e) {
          console.log('定位失败')

          that.locationCity = '定位失败'
          that.selectCity = '太原市'

          that.getData()
        }, {
          provider: 'baidu',
        });
      },
      onChange(index) {
        this.current = index;
      },
      // 消息滚动
      scroll() {
        this.animate = true; // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
        setTimeout(() => { //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
          this.newsList.push(this.newsList[0]); // 将数组的第一个元素添加到数组的
          this.newsList.shift(); //删除数组的第一个元素
          this.animate = false; // margin-top 为0 的时候取消过渡动画，实现无缝滚动
        }, 1000)
      },
      get(apiUrl, getData, index) {
        var that = this
        this.$axios({
          url: apiUrl,
          method: 'get',
          params: getData
        }).then((data) => {
          this.isComplete = false
          var list = data.data.data
          if (index == 1) {
            that.newsList = list
            this.scroll()
          } else if (index == 2) {
            that.AllList = list.data
            console.log(data)
          } else if (index == 3) {
            that.seekingList = list.data
          } else if (index == 4) {
            this.wellList = list.data
          }
        })

      },
        getData(){
          // 信息滚动
          this.get(this.Interface.config.latestAnnouncement, null, 1)
          setInterval(this.scroll, 2000)
          // 底部列表
          this.get(this.Interface.config.AllList, {
            globalArea: this.selectCity
          }, 2)
          // 求租
          this.get(this.Interface.config.seekingRent, {
            globalArea: this.selectCity
          }, 3)
          // 优质
          this.get(this.Interface.config.AllList, {
            recommended: 1,
            globalArea: this.selectCity
          }, 4)

      },
      
    },
 
    created() {
      console.log(this.selectCity)
      if (this.selectCity == null) {
        this.dz()
      }else{
        this.getData()
      }
    },
    mounted() {
      this.isComplete = true
      setTimeout(() => {
        this.getAppVersion(this.Interface.config.downloadApp)
      }, 2500);

    },
  }

</script>

<style scoped lang='scss'>
  .clickPopup {
    padding: 50px;
    background: rgba(0, 0, 0, 0)
  }

  .noData {
    padding: 80px 0;
    width: 100%;
  }

  .Baseline {
    text-align: center;
    padding: 100px 0;
    height: 60px;
    background: #f4f4f4;
    color: #bfbfbf;
    margin-bottom: 60px;
    margin-top: -4px;
    position: relative;

    span {
      display: block;
      padding: 5px;
      z-index: 999;
      background: #f4f4f4;
      position: absolute;
      font-size: 26px;

      left: 50%;
      margin-left: -100px;
      ;
      top: 50%;
      margin-top: -26px;
      ;
    }

    .Line {
      width: 80%;
      height: 2px;
      background: #d7d7d7;
      position: absolute;
      left: 10%;
      top: 48%;
    }
  }

  .index /deep/ .van-swipe__indicators .van-swipe__indicator {
    width: 12px;
    height: 12px;
    background: #D7D7D7;
  }

  .Progress {
    position: fixed;
    top: 35%;
    left: 32%;
    text-align: center;
    width: 36%;
    padding: 30px 0;
    background: rgba(0, 0, 0, 0.5);

    /deep/ .van-circle {
      .van-circle__text {
        font-size: 30px;
        color: #fff;
      }

    }
  }

  header {
    height: 128px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999999;
    background: #fff;
    padding: 14px 30px;
    align-items: center;

    i {
      background-image: url(../assets/img/index_icons.png);
      background-size: 481px 98px;
    }

    .ChoiceAddress {
      color: #333;
      font-family: Microsoft YaHei;
      font-size: 30px;
      display: flex;
      align-items: center;
      height: 56px;

      i {
        display: inline-block;
        width: 20px;
        height: 10px;
        background-position: -425px 0;
        margin-left: 12px;
      }
    }

    .navSearch {
      position: relative;

      input {
        width: 489px;
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
        color: #c3c3c3;
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

    .navNews {
      i {
        display: block;
        width: 44px;
        height: 44px;
        background-position: -425px -46px;
      }
    }
  }

  .swiper {
    padding: 10px 30px;
    background: #fff;
    width: 100%;

    /deep/ .van-swipe {
      width: 100%;
      height: 240px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .typeHouse {
    width: 100%;
    height: 200px;
    padding: 0 76px;
    align-items: center;
    background: #fff;

    .typeHouseList {
      text-align: center;

      i {
        background-image: url(../assets/img/index_icons.png);
        background-size: 481px 98px;
        display: block;
        width: 98px;
        height: 98px;
        margin-bottom: 20px;
      }

      i.shops {
        background-position: -98px 0;
      }

      i.all {
        background-position: -196px 0;
      }

      span {
        font-size: 28px;
        font-family: Microsoft YaHei;
      }
    }
  }

  .Notice {
    padding: 0 30px;
    width: 100%;
    height: 89px;
    background: #fff;

    .flex {
      align-items: center;
      width: 100%;
      height: 100%;

      .NoticeTitle {
        font-weight: bold;
        padding-left: 20px;

        img {
          height: 68px;
          ;
        }
      }

      .NoticeBox {
        overflow: hidden;
        width: 80%;
        height: 70px;
        ;

        ul {
          width: 100%;
          overflow: hidden;
          font-size: 24px;
          height: 70px;

          li {
            height: 70px;
            width: 100%;
            word-wrap: break-word;
            word-break: normal;
            overflow: hidden;
            text-overflow: ellipsis;
          }


        }

        .anim {
          transition: all 1s;
          margin-top: -70px; //高度等于行高
        }
      }

    }
  }

  .typeList {
    padding: 30px;
    background: #fff;

    div {
      border-radius: 4px;
    }

    .typeListBig {
      div {
        width: 360px;
        height: 180px;
        background-image: url(../assets/img/po_area.png);
        background-size: 690px 340px;
      }

      margin-bottom: 10px;
    }

    .typeListBig :first-child {
      background-position: 0 0;
    }

    .typeListBig :last-child {
      width: 320px;
      background-position: -370px 0;
    }

    .typeListSmall {
      div {
        width: 223px;
        height: 150px;
        background-image: url(../assets/img/po_area.png);
        background-size: 690px 340px;
      }
    }

    .typeListSmall :first-child {
      background-position: 0 -190px;
    }

    .typeListSmall :nth-child(2) {
      background-position: -233px -190px;
    }

    .typeListSmall :last-child {
      background-position: -466px -190px;
    }
  }

  .Sublet {
    padding: 30px;
    background: #fff;
    position: relative;

    .SubletSwiper {
      width: 100%;
      height: 448px;
      box-shadow: 0px 1px 15px 0px rgba(237, 237, 237, 0.6);
      border-radius: 6px;
      margin-top: 20px;

      .van-swipe-item {
        padding: 30px;
        padding-bottom: 0;

        img {
          border-radius: 4px;
          height: 240px;
          width: 100%;
        }

        .SubletSwiperTitle {
          height: 178px;
          width: 100%;

          h3 {
            font-size: 32px;
            line-height: 100px;
            display: flex;
            align-items: center;

            .yue_nian {
              margin-left: 20px;
              ;
              height: 40px;
              width: auto;
            }
          }

          h5 {
            align-items: center;
          }

          h5 :first-child {
            color: #999999;
            font-size: 26px;
          }

          h5:last-child {
            font-size: 24px;
            font-weight: 400;

            b {
              color: #F7241B;
              font-size: 40px;
            }

          }
        }
      }
    }

    .custom-indicator {
      position: absolute;
      top: 230px;
      right: 50px;
      font-size: 24px;
      color: #fff;
    }
  }

  .title {
    width: 100%;
    align-items: center;

    .titleLeft {
      span {
        color: #1A1919;
        font-size: 40px;
        display: block;
        margin-bottom: 10px;
      }

      em {
        font-size: 24px;
        color: #c1c1c1;
      }
    }

    .titleRight {
      font-size: 30px;
      color: #999;

      i {
        display: inline-block;
        width: 13px;
        height: 24px;
        background-image: url(../assets/img/more.png);
        background-size: 13px 24px;
      }
    }
  }

  .seeking {
    background: #fff;
    padding: 30px 30px 0 30px;
    margin-bottom: 30px;

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

  .seeking :last-child {
    border: 0;
  }

  .RecommendTab {
    padding-top: 30px;
  }

  .Recommend {
    background: #fff;
    padding: 30px;
    padding-top: 70px;
    padding-bottom: 0;

    .RecommendList {
      padding: 30px 0 10px 0;
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
           
          font-size: 34px;
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
            // margin-bottom: 10px;

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
          align-items: center;
         
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

</style>
<style lang='scss'>
  .van-toast {
    font-size: 30px;
    width: auto;
    padding: 20px;
  }

</style>
