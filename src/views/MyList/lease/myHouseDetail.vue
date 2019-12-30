<template>
  <div class="RecommendDetail" v-if="listDetail">
    <van-nav-bar @click-left='$router.go(-1)' left-arrow fixed>
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
          <img class="nfORyf" v-if="listDetail.house.can_monthly == 1" src="../../../assets/img/sign_yue.png" alt="">
          <img class="nfORyf" v-else src="../../../assets/img/sign_nian.png" alt="">
          <img class="nfyz" v-if="listDetail.house.can_monthly == 1" src="../../../assets/img/bargan.png" alt="">
          <img v-if="listDetail.house.cr_examine != 0" src="../../../assets/img/authen.png" alt="">
          <!-- <img v-if=" listDetail.house.cr_examine > 0 || listDetail.house.cr_examine == -1" src="../../../assets/img/authen.png" alt=""> -->
          <img v-else src="../../../assets/img/noauthen.png" alt="">
        </div>
        <div class="title" id="house-title">
          {{listDetail.house.title}}
        </div>
        <div class="moneyDetail ">
          <!-- 年租金 -->
          <div class=" moneyDetailList" v-if="listDetail.house.can_monthly == 0">
            <span>
              <b>{{listDetail.house.capital/10000}}</b>万
            </span>
            <em>
              年租金
            </em>
          </div>
          <div v-else class="price moneyDetailList">
            <span v-if="listDetail.house.monthly_money > 1000 ">
              <b>{{listDetail.house.monthly_money}}</b>万
            </span>
            <span v-else>
              <b>面议</b>
            </span>
            <em>
              月租金
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
          <b>{{listDetail.house.house.area}}m<sup>2</sup></b>
        </li>
        <li>
          <span>面 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 宽 :</span>
          <b>{{listDetail.house.house.surface_width}}</b>m
        </li>
        <li>
          <span>房源类型 :</span>
          <b>{{listDetail.house.house.type}} </b>
        </li>
        <li>
          <span>楼 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 层 :</span>
          <b>{{listDetail.house.house.floor}}层</b>
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
          <b>{{listDetail.house.house.voltage}}</b>
        </li>
        <li>
          <span>商业属性 :</span>
          <b>{{listDetail.house.house.business_attributes}}</b>
        </li>
        <li>
          <span>产权性质 :</span>
          <b>{{listDetail.house.house.nature_property_rights}}</b>
        </li>
        <li>
          <span>装修状况 :</span>
          <b>{{listDetail.house.house.decoration_status}}</b>
        </li>
        <li>
          <span>房屋租史 :</span>
          <b>{{listDetail.house.house.history_housing_rent}}</b>
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
        {{listDetail.house.description}}
        <!-- <div class="seeMore">
          查看全部
          <van-icon name="arrow-down" />
        </div> -->
      </div>
    </div>
    <div class="Modular">
      <div class="title flex">
        <span>
          <i></i>
          官方描述</span>
      </div>
      <div class="content describe">
        {{listDetail.house.house.desc}}


        <!-- <div class="seeMore">
          查看全部
          <van-icon name="arrow-down" />
        </div> -->
      </div>
    </div>
    <div class="Modular">
      <div class="title flex">
        <span>
          <i></i>
          历史经营</span>
      </div>
      <div class="content describe">
        {{listDetail.house.house.operate}}


        <!-- <div class="seeMore">
          查看全部
          <van-icon name="arrow-down" />
        </div> -->
      </div>
    </div>
    <div style="height:60px"></div>
    <div class="share" @click="onshare">
      一键分享
    </div>
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
          url: require('../../../assets/img/mapCover.png'),
          size: {
            width: 30,
            height: 30
          }
        },
        id: '', //id
        listDetail: null,
        isCollection: 0,
        name: '',
        phone: '',

        //----
        shares: null,
        sweixin: null,
        buttons: [{
            title: '微信好友',
            extra: {
              scene: 'WXSceneSession'
            }
          },
          {
            title: '微信朋友圈',
            extra: {
              scene: 'WXSceneTimeline'
            }
          }
        ],
        isShare: false
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
          this.listDetail = data.data.data
        })
      },
      post(data, apiUri) {
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
          Toast('分享成功')
        })
      },
      onshare() {
        this.shareWeb()
        // this.post({id:this.id},this.Interface.config.WXshare)

      },
      // 成功回调
      afterShare() {
        this.post({
          id: this.id
        }, this.Interface.config.WXshare)
      },

      // H5 plus事件处理
      plusReady() {
        this.updateSerivces();
      },

      /**
       * 更新分享服务
       */
      updateSerivces() {
        var that = this
        plus.share.getServices(function (s) {
          var share_lists = {}
          for (var i in s) {
            var t = s[i];
            share_lists[t.id] = t;
          }

          that.share = share_lists;
          that.sweixin = share_lists.weixin;
        }, function (e) {
          // outSet('获取分享服务列表失败：'+e.message);
        });
      },

      // 分享网页
      shareWeb() {
        var msg = {
          type: 'web',
          thumbs: ['_www/logo.png']
        };
        var that = this
        msg.href = this.Interface.UrlAdress + "/app_pwb/shareDetail/" + this.id;
        msg.title = document.querySelector('#house-title').innerHTML.replace(/(^\s*)|(\s*$)/g, "");
        msg.content = '我正在使用铺旺宝查找附近店铺，赶紧跟我一起来体验！';

        this.sweixin ? plus.nativeUI.actionSheet({
          title: '分享网页到微信',
          cancel: '取消',
          buttons: that.buttons
        }, function (e) {
          (e.index > 0) && that.shareToWechat(that.sweixin, msg, that.buttons[e.index - 1]);
        }) : plus.nativeUI.alert('当前环境不支持微信分享操作!');
      },

      // 分享
      shareToWechat(srv, msg, button) {

        var that = this
        if (!srv) {
          // outLine('无效的分享服务！');
          return;
        }
        button && (msg.extra = button.extra);
        // 发送分享
        if (srv.authenticated) {
          // outLine('---已授权---');
          this.doShare(srv, msg);
        } else {
          // outLine('---未授权---');
          srv.authorize(function () {
            that.doShare(srv, msg);
          }, function (e) {
            // outLine('认证授权失败：'+JSON.stringify(e));
          });
        }
      },
      // 发送分享
      doShare(srv, msg) {
        // outLine(JSON.stringify(msg));
        var that = this
        srv.send(msg, function () {
          // outLine('分享到"'+srv.description+'"成功！');
          //分享成功后操作
          that.afterShare()
        }, function (e) {
          // outLine('分享到"'+srv.description+'"失败: '+JSON.stringify(e));
        });
      },


    },
    created() {
      let id = this.$route.params.id
      this.id = id
      this.get(this.Interface.config.listDetail, {
        'id': id
      }, 1)
      this.wxShareClosure(window)
      this.wxShareInit()


      if (window.plus) {
        // 这是app
        this.plusReady();
        this.isShare = true

      } else {
        this.isShare = false
        document.addEventListener('plusready', plusReady, false);
      }
    }
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
          background-image: url(../../../assets/img/RecommendDetailIcons.png);
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

          img {
            width: 270px;
            height: 180px;
            border-radius: 6px;
            display: block;
            margin-right: 30px;
          }

          .RecommendListRight {
            height: 100%;
            width: 55%;
            border-bottom: 1px solid #ebebeb;

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

    .share {
      width: 100%;
      ;
      background: #fff;
      height: 120px;
      box-shadow: 0px 1px 10px 0px rgba(190, 190, 190, 0.21);
      font-size: 40px;
      text-align: center;
      line-height: 120px;
      position: fixed;
      bottom: 0;
      left: 0;
    }

  }

</style>
