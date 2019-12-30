<template>
  <div>
    <van-nav-bar @click-left='$router.go(-1)' title="求租详情" left-arrow></van-nav-bar>
    <div class="siteDetail" v-if="detail.title != undefined">
      <div class="information Modular">
        <h1>
          {{detail.title}}
        </h1>
        <span>
          发布时间 {{detail.create_time.timestamp}}
        </span>
        <h2>
          {{detail.area_min}}-{{detail.area_max}}
        </h2>
        <span>
          面积(平米)
        </span>
      </div>
      <ul class="Modular type">
        <li>
          <span>
            房源租金 :
          </span>
          面议
        </li>
        <li>
          <span>
            商铺类型 :
          </span>
          {{detail.shop_type}} 
        </li>
        <li>
          <span>
            所属行业 :
          </span>
          {{detail.industry}}
        </li>
        <li>
          <span>
            交易类型 :
          </span>
          {{detail.service_type}}
        </li>
      </ul>
      <div class="Modular">
        <div class="title">
          期望区域
        </div>
        <div class="content">
            {{detail.regionInfo[0].area_name}}{{detail.regionInfo[1].area_name}}{{detail.regionInfo[2].area_name}}
        </div>
      </div>
      <div class="Modular">
        <div class="title">
          其他要求
        </div>
        <div class="content">
          {{detail.remark}}
        </div>
      </div>
      <div class="Modular">
        <div class="title">
          信息动态
        </div>
        <div class="state">
          <span class="smallTitle">
            发布信息
          </span>
          <p class="flex">
            <span>
              {{detail.mobile}}
              <em>
                {{result}}
              </em>
            </span>


          </p>
        </div>
      </div>
    </div>
    <footer class="flex">
      <div class="fotBtn" :id="detail.isLike?'active':''" @click="loginClick('cancel')">收藏</div>
      <div class="fotBtn" @click="loginClick('callPhone')">电话联系</div>
    </footer>
  </div>
</template>

<script>
  import {
    Dialog
  } from 'vant';
   import {
    Toast
  } from 'vant';
  import qs from 'qs'

  export default {
    data() {
      return {
        id: '',
        detail: {},
        result: '',
        token:''
      }
    },
    methods: {
      get(apiUrl, getData) {
        this.$axios({
          url: apiUrl,
          method: 'get',
          params: getData,
          headers: {
            'XX-Token': this.token,
            'XX-Device-Type': 'mobile'
          }
        }).then((data) => {
          var dataDetail = data.data.data
          // console.log(dataDetail)
          if (data.data.code == 1) {
            this.detail = dataDetail
            this.result = this.timeFormat(dataDetail.create_time.time)

          }
        })
      },
      timeFormat(time) {
        if (time > 0) {
          var result
          time = parseInt(time) * 1000;
          var minute = 1000 * 60;
          var hour = minute * 60;
          var day = hour * 24;
          var month = day * 30;
          var now = new Date().getTime();
          var diffValue = now - time;
          if (diffValue < 0) {
            return
          }
          var monthC = diffValue / month;
          var weekC = diffValue / (7 * day);
          var dayC = diffValue / day;
          var hourC = diffValue / hour;
          var minC = diffValue / minute;
          if (monthC >= 1) {
            if (monthC <= 12) {
              result = "" + parseInt(monthC) + "月前";
            } else {
              result = "" + parseInt(monthC / 12) + "年前";
            }
          } else if (weekC >= 1) {
            result = "" + parseInt(weekC) + "周前";
          } else if (dayC >= 1) {
            result = "" + parseInt(dayC) + "天前";
          } else if (hourC >= 1) {
            result = "" + parseInt(hourC) + "小时前";
          } else if (minC >= 1) {
            result = "" + parseInt(minC) + "分钟前";
          } else {
            result = "刚刚";
          }
          return result
        } else {
          return '';
        }
      },
      callPhone() {
        if (this.$cookieStore.getCookie('token') == '') {
          Dialog.alert({
            message: '请先登录'
          }).then(() => {
            this.$router.push({
              name: 'login',
            })
          });
        } else {
          window.location.href = 'tel://' + this.detail.mobile

        }
      },
      cancel() {
        this.post({
            tenant_id: this.id,
            'type': 2
          },
          this.Interface.config.isCollection)
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
            Toast(res.data.msg)
            if(res.data.code == 1){
                this.get(this.Interface.config.seekingDetail, {
                    'siteselection_id': this.id
                })
            }
          

        })
      },
      loginClick(Which) {
        if (this.token == '') {
          Toast("您还未登录，立即去登录")
          this.$router.push({
            name: 'login',
          })
        } else if (Which == 'callPhone') {
          this.callPhone()
        } else if (Which == 'cancel') {
          this.cancel()
        } 
      },
    },
    mounted() {
      // this.$cookieStore.setCookie('token', '')
      let id = this.$route.params.id
      this.id = id
      var token = this.$cookieStore.getCookie('token','')
      if(token == null ){
        this.token = ''
      }else{
        this.token = token
      }
      console.log('token:'+token)
      this.get(this.Interface.config.seekingDetail, {
        'siteselection_id': this.id
      })
    }
  }

</script>

<style scoped lang='scss'>
  .siteDetail {
    background: #fff;
    padding: 0 30px;

    .Modular {
      padding: 40px 0;
      border-bottom: 2px solid #efefef;

      .title {
        font-size: 34px;
        font-weight: bold;
      }

      .content {
        font-size: 28px;
        margin-top: 40px;
      }

      .state {
        .smallTitle {
          display: block;
          font-size: 30px;
          margin-top: 35px;
          font-size: 30px;
          margin-bottom: 25px;
        }

        p {
          font-size: 26px;

          em {
            display: inline-block;
            margin-left: 30px;
            color: #999;
          }
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

  .information {
    h1 {
      font-size: 44px;
      line-height: 44px;
      margin-bottom: 30px;
      font-weight: bold;

    }

    span {
      color: #999;
      font-size: 26px;
    }

    h2 {
      font-size: 60px;
      line-height: 60px;
      margin-top: 50px;
      margin-bottom: 20px;
      color: #F7241B;
      font-weight: bold;
    }
  }

  .type {
    li {
      margin-bottom: 30px;
      font-size: 28px;

      span {
        color: #999;
        margin-right: 30px;
        display: inline-block;
      }
    }

    :last-child {
      margin-bottom: 0;
    }
  }

  footer {
    height: 100px;
    background: #fff;
    padding: 0 30px;
    align-items: center;

    .fotBtn {
      width: 45%;
      height: 80px;
      text-align: center;
      line-height: 80px;
      border: 2px solid #999;
      border-radius: 40px;
      font-size: 30px;
    }
    #active{
        background: #F7241B;
        border: 0;
        color: #fff;
    }
  }

</style>
