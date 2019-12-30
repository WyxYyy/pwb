<template>
  <div>
    <van-nav-bar @click-left='$router.go(-1)' title="订单详情" left-arrow left-arrow></van-nav-bar>
    <header class="Modular">
      <div class="flex Earnest">
        <div class="EarnestAbout">
          <b>
            应交定金(元)
          </b>
          <span>
            请再
            <em>
              {{detail.append_surplus_time}}
            </em>
            内完成
          </span>
        </div>
        <div class="EarnestPrice">
          ￥{{detail.with_merch_handsel}}
        </div>
      </div>
      <div class="btn" @click="payment = true">
        立即缴纳，我要月付
      </div>
    </header>
    <div class="Modular order">
      <div class="title">
        订单信息
      </div>
      <div class="house">
        <div class="houseDetail ">
          <img class="houseImg" src="../../../assets/img/trans_img.png" alt="">
          <div class="houseAbout ">
            <div class="houseTitle">
              {{detail.with_merch_title}}...
            </div>
            <div class="houseAddress">
              <van-icon name="location-o" />
              位于{{detail.append_address_info}}
            </div>
            <div class="housePrice">
              <span class="money">
                ￥ <b>{{detail.append_month_capital}}</b>
              </span>
              × 12期
            </div>
          </div>
        </div>
        <div class="flex">
          <span class="about">提交订单申请时间</span>
          <span>{{detail.append_created_at_text}}</span>
        </div>

        <div class="flex">
          <span class="about">订单申请状态</span>
          <span>
            {{detail.append_order_status_text}}
          </span>
        </div>
      </div>
    </div>
    <van-popup v-model="payment" position="bottom">
      <div class="topTitle">
        <i></i>
        <span>
          支付定金
        </span>
        <van-icon name="cross" @click="payment = false" />
      </div>
      <div class="EarnestDetail">
        <div class="price">
          ￥
          <b>
            {{detail.with_merch_handsel}}
          </b>
        </div>
        <div class="list">
          <span>
            订单信息
          </span>
          <i>
            月付定金(申请失败，则退还)
          </i>

        </div>
        <div class="list">
          <span>
            付款方式
          </span>
          <i>
            余额
          </i>
        </div>
      </div>
      <div class="bottom">
        <div class="btnBottom" @click="isShow=true">
          确定
        </div>
      </div>
    </van-popup>
      <van-popup v-model="isShow" position="bottom" closeable>
      <div class="yzm">
        <div class="Tips">
          <div class="TipsTitle">
            输入支付密码
          </div>
       
          <van-password-input :value="value" :mask='false' :focused="showKeyboard" @focus="showKeyboard = true"
            :gutter='9' />
      
        </div>

        <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" extra-key='确认'
          @blur="showKeyboard = false" />
      </div>

    </van-popup>
  </div>
</template>

<script>
  import qs from 'qs'
  import {Dialog} from 'vant';
  import {
    Toast
  } from 'vant';
  export default {
    data() {
      return {
        payment: false,
        id: this.$route.params.id,
        detail: '',
        isShow:false,
        showKeyboard: false,
        value:''

      }
    },
    methods: {
      get(apiUrl, getData, index) {
        this.$axios({
          url: apiUrl,
          method: 'get',
          params: getData,
          headers: {
            'XX-Token': this.$cookieStore.getCookie('token'),
            'XX-Device-Type': 'mobile'
          }
        }).then((res) => {
          console.log(res)
          this.detail = res.data.data
        })
      },
       onInput(key) {

        // 确认按钮
        if (key == '确认') {
            console.log(this.value.length)
            if(this.value.length < 6){
              Toast('请输入完整的密码')
            }else{
              this.post(this.Interface.config.payHandsel,{
                order_id:this.id,
                pay_password:this.value
              })
            }
        }else{
          this.value = (this.value + key).slice(0, 6);

        }
      },
       onDelete() {
        this.value = this.value.slice(0, this.value.length - 1);
      },
       post(apiUri,data,type) {
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
          console.log(res)
          var code = res.data.code
          if(code == -1){
             Dialog.confirm({
                  title: '设置支付密码',
                  message: res.data.msg
                }).then(() => {
                  this.wantTo('setPay')
                })
          }else if(code == -2){
              Toast('密码错误，请重新输入')
              this.value = ''
          }else if(code == 0){
            Toast(res.data.msg)
          }else if(code == 1){
            Toast(res.data.msg)
            this.wantTo('payment',{money:this.detail.with_merch_handsel})
          }
        })  
      },
    },
    mounted() {
      this.get(this.Interface.config.orderInfo, {
        order_id: this.id
      })
    }
  }

</script>

<style scoped lang='scss'>
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

  header {


    .Earnest {
      align-items: center;

      .EarnestAbout {
        display: flex;
        flex-direction: column;

        b {
          font-size: 34px;
          font-weight: 400;
          line-height: 34px;
        }

        span {
          margin-top: 20px;
          line-height: 24px;
          font-size: 24px;
          color: #999;

          em {
            color: #F7241B;
          }
        }
      }

      .EarnestPrice {
        font-size: 54px;
        color: #F7241B;
        font-weight: bold;

      }
    }

    .btn {
      margin-top: 40px;
      width: 100%;
      height: 88px;
      background: #F7241B;
      text-align: center;
      line-height: 88px;
      text-align: center;
      border-radius: 44px;
      font-size: 32px;
      color: #fff;
    }
  }

  .Modular {
    padding: 30px;
    background: #fff;
    width: 100%;
  }

  .order {
    margin-top: 40px;

    .title {
      font-size: 30px;
      line-height: 30px;
      padding-top: 10px;
      margin-bottom: 40px;
    }

    .house {

      .houseDetail {
        display: flex;
        margin-bottom: 20px;

        .houseImg {
          width: 190px;
          height: 140px;
          flex: none;
          margin-right: 30px;
        }

        .houseAbout {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;

          .houseTitle {
            font-size: 30px;
            color: #1A1919;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .houseAddress {
            color: #c1c1c1;
            font-size: 24px;
            display: flex;
            align-items: center;
          }

          .housePrice {
            font-size: 26px;
            color: #999;

            span {
              color: #F7241B;

              b {
                font-size: 36px;
              }
            }
          }
        }
      }

      .flex {
        height: 80px;
        align-items: center;
        font-size: 26px;

        .about {
          color: #999999;
        }

        em {
          color: #F31700;
          font-weight: bold;
        }

      }
    }
  }

  /deep/.van-popup {
    .topTitle {
      height: 100px;
      display: flex;
      justify-content: space-between;
      box-shadow: 0px 2px 4px 0px rgba(191, 191, 191, 0.4);
      align-items: center;
      padding: 0 30px;
      font-size: 34px;
    }

    .van-icon {
      font-size: 40px;
      color: #999;
    }

    .EarnestDetail {
      padding: 100px 30px;
      padding-bottom: 273px;

      .price {
        font-size: 40px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 80px;

        b {
          font-size: 84px;
        }
      }

      .list {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 30px;
        border-bottom: 2px solid #EFEFEF;

        span {
          color: #999;
        }

      }
    }

    .bottom {
      border-top: 2px solid #EFEFEF;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;

      .btnBottom {
        width: 480px;
        height: 88px;
        border-radius: 44px;
        background: #F7241B;
        color: #fff;
        font-weight: bold;
        text-align: center;
        line-height: 88px;
        font-size: 32px;
      }
    }
  }
    /deep/.van-popup {
    .van-icon {
      font-size: 60px;
    }

    .yzm {
      padding-top: 142px;

      .Tips {
        padding: 0 30px;

        .TipsTitle {
          font-size: 40px;
          line-height: 40px;
          margin-bottom: 30px;
        }

        .TipsPhone {
          font-size: 28px;
          color: #999;
          margin-bottom: 60px;

          em {
            color: #333;
          }
        }

        .getYzm {
          height: 123px;
          font-size: 24px;
          align-items: center;

          span {
            color: #999999;
          }

          em {
            color: #F7241B;
          }
        }
      } 
    }

    .van-password-input {
      margin: 0;
      padding: 0;

      .van-password-input__security {
        height: 100px;

        li {
          width: 100px;
          height: 100px;
          font-size: 50px;
          border: 2px solid #DBDBDB;
          text-align: center;
          line-height: 100px;
        }
      }
    }

    /deep/.van-number-keyboard {
      position: relative;

      .van-number-keyboard__body {
        .van-key {
          height: 124px;
          line-height: 124px;
          font-size: 50px;
        }

        .van-key--gray {
          background: #EFEBEA;
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
