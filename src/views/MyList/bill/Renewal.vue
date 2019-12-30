<template>
  <div>
    <van-nav-bar @click-left='$router.go(-1)' title="续租申请" left-arrow></van-nav-bar>
    <div class="Renewal">
      <div class="RecommendList">
        <img src="../../../assets/img/recommend_img.png" alt="">
        <div class="RecommendListRight">
          <h4>配套火热招商，学府街华宇...</h4>
          <h5>
            <van-icon name="location" />
            位于学府街华宇百花谷
          </h5>
          <h6 class="flex">
            <span>
              <b>￥2150</b>*12期
            </span>
            <i>含服务费</i>
          </h6>
        </div>
      </div>
      <div class="lists">
        <ul>
          <li class="list">
            <div class="list">
              <div class="listLeft">
                <span>续租人姓名</span>
                <b>刘先生</b>
              </div>

            </div>
          </li>
          <li class="list">
            <div class="list">
              <div class="listLeft">
                <span>联系方式</span>
                <input type="number" value="15945876542" @change.lazy="newFhone" :readonly='isReadonly?true:false'>
              </div>
              <div class="listRight" @click="selectReadonly">
                修改
              </div>
            </div>
          </li>
        </ul>
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item title-class='titleLeft' name="1">
            <div slot="title">
              <span>续租期</span>
              <b v-if='dataValue == ""'>请选择</b>
              <b v-else>{{dataValue}}</b>

            </div>
            <ul>
              <li @click="select('data',$event)">1111111111111</li>
              <li @click="select('data',$event)">2222222222222</li>
              <li @click="select('data',$event)">3333333333333</li>
              <li @click="select('data',$event)">1111111111111</li>
              <li @click="select('data',$event)">2222222222222</li>
              <li @click="select('data',$event)">3333333333333</li>
              <li @click="select('data',$event)">1111111111111</li>
              <li @click="select('data',$event)">2222222222222</li>
              <li @click="select('data',$event)">3333333333333</li>
              <li @click="select('data',$event)">1111111111111</li>
              <li @click="select('data',$event)">2222222222222</li>
              <li @click="select('data',$event)">3333333333333</li>
              <li @click="select('data',$event)">4444444444444</li>
            </ul>
          </van-collapse-item>


        </van-collapse>
        <van-collapse v-model="activeNames" accordion>
          <van-collapse-item title-class='titleLeft' name="2">
            <div slot="title">
              <span>续租期</span>
              <b v-if='payValue == ""'>请选择</b>
              <b v-else>{{payValue}}</b>

            </div>
            <ul>
              <li @click="select('pay',$event)">1111111111111</li>
              <li @click="select('pay',$event)">2222222222222</li>
              <li @click="select('pay',$event)">3333333333333</li>
              <li @click="select('pay',$event)">1111111111111</li>
              <li @click="select('pay',$event)">2222222222222</li>
              <li @click="select('pay',$event)">3333333333333</li>
        
            </ul>
          </van-collapse-item>


        </van-collapse>
      </div>
      <button class="comfim">
        确认申请
      </button>
    </div>

  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        activeName: '0',
        dataValue: '',
        activeNames: '0',
        payValue: '',
        isReadonly: true,
      }
    },

    methods: {
      select(type, e) {
        var dataValue = e.target.innerHTML;

        if (type == 'data'){
          this.dataValue = dataValue
          this.activeName = '0'

        }else if(type == 'pay'){
          this.payValue = dataValue
          this.activeNames = '0'
        }

      },
      selectReadonly() {
        var isReadonly = this.isReadonly
        if (isReadonly == true) {
          isReadonly = false

          Toast({
            message: '点击电话号码进行更改',
            className: 'vantAlert',
            closeOnClick: true
          });
        }
        this.isReadonly = isReadonly
      },
      newFhone() {
        this.isReadonly = true

      }

    }
  }

</script>

<style scoped lang='scss'>
  .Renewal {
    padding: 30px;

    .RecommendList {
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

    .lists {
      margin-top: 30px;

      /deep/ .van-collapse {
        .van-collapse-item {
          width: 100%;

          .van-cell {
            height: 100%;
            align-items: center;
            padding: 0;
            padding-right: 30px;

            .van-cell__title {
              height: 167px;
              padding: 40px 30px;

              div {
                height: 100%;
                display: flex;
                justify-content: space-between;
                flex-direction: column;

                span {
                  color: #999;
                  font-size: 26px;
                }

                b {
                  font-size: 32px;
                  font-weight: 400;
                }
              }
            }
          }
        }
      }

      ul {
        background: #fff;
        padding: 0 30px;
      }

      ul>li {
        width: 100%;
        height: 167px;
        padding: 40px 0;
        border-bottom: 2px solid #EEEBEA;

        .list {
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .listLeft {
            height: 100%;
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            span {
              color: #999;
              font-size: 26px;
            }

            b {
              font-size: 32px;
              font-weight: 400;
            }

            input {
              font-size: 32px;
              border: 0
            }
          }

          .listRight {
            color: #999;
            font-size: 26px;
          }
        }

      }
    }

    button.comfim {
      margin-top: 60px;
      height: 88px;
      width: 100%;
      border-radius: 44px;
      background: #F7241B;
      color: #fff;
      font-size: 32px;
      font-weight: bold;
      border: 0;
    }

  }

</style>
<style>
  .vantAlert {
    padding: 25px;
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
