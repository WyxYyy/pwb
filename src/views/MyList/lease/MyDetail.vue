<template>
  <div class="RecommendDetail">
    <van-nav-bar @click-left='$router.go(-1)' left-arrow fixed>
      <i slot="right" class="share"></i>
    </van-nav-bar>
    <!-- 轮播 -->
    <div class="swiper">
      <van-swipe :autoplay="3000" indicator-color="red">
        <van-swipe-item v-for="item,index in headerImg" :key='index'>
          <img :src="item" alt="">  
        </van-swipe-item>

      </van-swipe>
    </div>
    <div class="Housing">
      <div class="HousingHeader">
        <div class="title">
          华宇百花谷精装修写字楼招租
        </div>
        <div class="information flex">
          <!-- 发布时间 -->
          <span>
            发布于 08-21
          </span>
        </div>
        <div class="price">
            <div class="type">
                <b>
                    550
                </b>
                <span>
                    面积(平米)
                </span>
            </div>
            <div class="type">
                <b>
                    5500.00
                </b>
                <span>
                    租金(元/月)
                </span>
            </div>
        </div>
        
      </div>
      <!-- <ul class="HousingAbout">
        <li>
          <span>房源面积 :</span>
          <b>120m<sup>2</sup></b>
        </li>
        <li>
          <span>进 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 深 :</span>
          <b>120m</b>
        </li>
        <li>
          <span>房源类型 :</span>
          <b>纯写字 </b>
        </li>
        <li>
          <span>楼 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 层 :</span>
          <b>8层</b>
        </li>
        <li>
          <span>房源状态 :</span>
          <b>正在出租</b>
        </li>
        <li>
          <span>层 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 高 :</span>
          <b>4m</b>
        </li>
        <li>
          <span>起租期限 :</span>
          <b>12个月</b>
        </li>
        <li>
          <span>付款方式 :</span>
          <b>押二付一</b>
        </li>
        <li>
          <span>历史经营 :</span>
          <b>不详</b>
        </li>
      </ul> -->
      <div class="HousingWhere">
        <div class="title">
          <b>环球金融中心</b>
          <span>万柏林-长风商务区</span>
        </div>
        <div class="mapBox">
          <baidu-map class="map" :center="center" :zoom="15">
              <bm-marker :position="center" :dragging="true" animation="BMAP_ANIMATION_BOUNCE" :icon='mapIcon' :offset="{width:-10,height:-25}"></bm-marker>
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
          配套设施</span>
      </div>
      <div class="content">
        <ol>
          <li>
            <!-- 电梯 -->
            <i class="Elevator"></i>
            <span>客梯</span>
          </li>
          <li>
            <!-- 货梯 -->
            <i class="Cargo"></i>
            <span>货梯</span>
          </li>
          <li>
            <!-- 空调 -->
            <i class="Air"></i>
            <span>空调</span>
          </li>
          <li>
            <!-- 停车位 -->
            <i class="Parking"></i>
            <span>停车位</span>
          </li>
          <li>
            <!-- 暖气 -->
            <i class="Heating"></i>
            <span>暖气</span>
          </li>
          <li>
            <!-- 天然气 -->
            <i class="gas"></i>
            <span>天然气</span>
          </li>
          <li>
            <!-- 宽带 -->
            <i class="wifi"></i>
            <span>宽带</span>
          </li>
          <li>
            <!-- 排烟机 -->
            <i class="extractor"></i>
            <span>排烟机</span>
          </li>
        </ol>
      </div>
    </div>
    <div class="Modular">
      <div class="title flex">
        <span>
          <i></i>
          租约信息</span>
      </div>
      <div class="content">
        <ul class="description">
          <li>
            <b>
              价格：
            </b>
            <span>
              1.4元/平/天
            </span>
          </li>
          <li>
            <b>
              价格：
            </b>
            <span>
              1.4元/平/天
            </span>
          </li>
          <li>
            <b>
              价格：
            </b>
            <span>
              1.4元/平/天
            </span>
          </li>
          <li>
            <b>
              价格：
            </b>
            <span>
              1.4元/平/天
            </span>
          </li>
        </ul>
        
      </div>
    </div>
    <footer class="flex">
        <button class="btnSelect">修 改</button>
        <button class="btnRefresh">刷 新</button>
    
    </footer>
    <div style="height:60px"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        headerImg: [
          require('../../../assets/img/recommend_img.png'),
          require('../../../assets/img/recommend_img.png'),
          require('../../../assets/img/recommend_img.png'),
          require('../../../assets/img/recommend_img.png'),
        ],
        center: {
          lng: 112.5375393579,
          lat: 37.8087191472
        },
        whereName: '阳光城环球金融中心',
        mapIcon:{
          url:require('../../../assets/img/mapCover.png'),
          size:{
            width:30,
            height:30
          }
        }
      }
    }
  }

</script>

<style scoped lang='scss'>

</style>
<style lang='scss' scoped>
  /*导航*/
  .van-nav-bar {
    height: 100px;
    line-height: 100px;
    background: rgba(0, 0, 0, 0);
    border: 0;
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

    img {
      width: 100%;
      height: 560px;
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

    .HousingHeader {
      border-bottom: 2px solid #EFEFEF;
      padding: 30px 0 0 0;

      .title {
        color: #1A1919;
        font-size: 40px;
        line-height: 40px;
      }
         
      .information {
        color: #999999;
        font-size: 26px;
        margin-top: 25px;
      }

      .price{
        margin-top: 50px;
        display: flex;
        align-items: center;  
        padding-bottom: 30px;  
        .type{
            margin-right: 100px;
            b{  
                color: #F7241B;
                font-size: 60px;
                line-height: 60px;
                font-weight: bold;
                display: block;
                margin-bottom: 24px;
            }
            span{
                font-size: 26px;

                color: #999;
            }
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

    .content {
      ol {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0 25px;

        li {
          width: 22%;
          padding: 20px 0;
          text-align: center;

          i {
            display: block;
            width: 54px;
            margin: 0 auto;
            margin-bottom: 20px;
            height: 54px;
            background-image: url(../../../assets/img/fac-icons.png);
            background-size: 216px 108px;
          }

          span {
            font-size: 24px;

          }

          i.Elevator {
            background-position: 0 0;
          }

          i.Cargo {
            background-position: -54px 0;
          }

          i.Air {
            background-position: -108px 0;
          }

          i.Parking {
            background-position: -162px 0;
          }

          i.Heating {
            background-position: 0 -54px;
          }

          i.gas {
            background-position: -54px -54px;
          }

          i.wifi {
            background-position: -108px -54px;
          }

          i.extractor {
            background-position: -162px -54px;
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
        :last-child{
            margin-bottom: 0;
        }
      }



     
    }
  }
    footer{
        width: 100%;
        height: 120px;
        position: fixed;
        bottom: 0;
        background: #fff;
        padding: 16px 30px;
        box-shadow:0px 1px 20px 0px rgba(190,190,190,0.21);
        button{
            width: 48%;
            height: 100%;
            border-radius: 44px;
            font-size: 32px;
            font-weight: bold;
            border: 0;

        }
        button.btnSelect{
            border:2px solid rgba(247,36,27,1);
            color: #F7241B;
            background: #fff;
        }
        button.btnRefresh{
            background:rgba(247,36,27,1);
            color: #fff;
        }
    }
</style>
