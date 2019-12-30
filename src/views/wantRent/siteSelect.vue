<template>
  <div class="siteSelect">
    <van-nav-bar @click-left='$router.go(-1)' title="我要选址" left-arrow style="font-size: 20px">
    </van-nav-bar>
    <div class="parent">
      <div class="requirements typ">
        <span class="title">类型要求</span>
        <div v-for="item,index in demand">
          <select name="" id="" @click="select(item.name,$event)">
            <option value="" class="optionSelected" disabled selected>请选择{{item.title}}</option>
            <option :value="index" v-for="(i,index) in item.value">{{i}}</option>
          </select>
          <b></b>
        </div>

        <div>
          <v-distpicker :province="temp.province" :city="temp.city" :area="temp.area" :placeholders="placeholders"
            @selected="onSelected">
          </v-distpicker>
        </div>
      </div>
      <div class="requirements areaRent">
        <span class="title">面积要求</span>
        <div class="areaRentParent">
          <div>
            <input type="number" v-model="area_min" placeholder="请填写">
            <span class="squareMetre">平米</span>
          </div>
          <i>至</i>
          <div>
            <input type="number" v-model="area_max" placeholder="请填写">
            <span class="squareMetre">平米</span>
          </div>
        </div>
      </div>
      <div class="requirements areaRent">
        <span class="title">月租要求</span>
        <div class="areaRentParent">
          <div>
            <input type="number" v-model="rent_min" placeholder="请填写">
            <span class="squareMetre">元/月</span>
          </div>
          <i>或</i>
          <div>
            <input v-model="rent_max" type="number" placeholder="请填写">
            <span class="squareMetre">元/月</span>
          </div>
        </div>
      </div>
      <div class="requirements titleContact">
        <span class="title">标题</span>
        <input type="text" v-model="title" placeholder="请起个响亮的标题吧">
      </div>
      <div class="requirements other">
        <span class="title">其他要求</span>
        <textarea v-model="remark" placeholder="请填写..."></textarea>
      </div>
      <div class="requirements titleContact contact">
        <span class="title">联系方式</span>
        <input class="contactIpt" v-model="name" type="text" placeholder="姓名">
        <input class="contactIpt" type="number" placeholder="手机号" v-model="phone">
       
      </div>
    </div>
    <!-- <van-popup close-on-click-overlay=false v-model="isLogin">
        <van-loading  color="#F7241B" size='60px'/>
    </van-popup> -->
    <button @click="post">确认提交</button>
  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
  import qs from 'qs'
  import {
    Toast
  } from 'vant'

  export default {
    data() {
      return {
        yzm: '',
        phone: '',
        isSecond: true, //是否获取验证码
        second: '',
        demand: [],
        temp: {
          province: '',
          city: '',
          area: '',
          provinceId: '',
          cityId: '',
          aeraId: '',
        },
        placeholders: {
          province: '省/自治区/直辖市',
          city: '市',
          area: '区/县',
        },
        selecctArr: {
          'shop_type': '',
          'industry': '',
          'service_type': '',
          'status': ''
        },
        area_min: '',
        area_max: '',
        rent_min: '',
        rent_max: '',
        title: '',
        remark: '',
        name: '',
        isLogin:false
      }
    },
    components: {
      VDistpicker
    },
    methods: {
    
      onSelected(data) {
        this.temp.province = data.province.value
        this.temp.city = data.city.value
        this.temp.area = data.area.value
        this.temp.provinceId = data.province.code
        this.temp.cityId = data.city.code
        this.temp.areaId = data.area.code
      },
      get() {
        var that = this
        this.$axios({
          url: this.Interface.config.parameter,
          method: 'get',
        }).then((res) => {
          if (res.data.code == 1) {
            this.demand = res.data.data
          } else {
            Toast.fail(res.data.msg);
          }
        })
      },
      post() {
        this.isLogin = true
        let postData = qs.stringify({
          shop_type: this.selecctArr.shop_type,
          service_type: this.selecctArr.service_type,
          industry: this.selecctArr.industry,
          status: this.selecctArr.status,
          area_min: this.area_min,
          area_max: this.area_max,
          rent_min: this.rent_min,
          rent_max: this.rent_max,
          title: this.title,
          remark: this.remark,
          name: this.name,
          mobile: this.phone,
          // code:this.yzm,
          district: this.temp.areaId
        })
        this.$axios({
          'url': this.Interface.config.tenant,
          'method': 'post',
          'data': postData,
          headers: {
            'XX-Token': this.$cookieStore.getCookie('token'),
            'XX-Device-Type': 'mobile'
          }
        }).then((res) => {
             this.isLogin = false
          if (res.data.code == 1) {
            Toast.success(res.data.msg);
            this.$router.push({
              path: 'siteSelection',
            })
          } else {
            Toast.fail(res.data.msg);
          }
        })
      },
      select(name, e) {
        console.log(e)
        this.selecctArr[name] = e.target.value
        console.log(this.selecctArr)
      }
    },
    mounted() {
      this.get()
    }
  }

</script>

<style scoped lang='scss'>
  .siteSelect {
    background: #FFFFff;
  }

  ::-webkit-input-placeholder {
    color: #999;
  }

  /*内容*/
  select {
    width: 100%;
    height: 90px;
    border: 2px solid rgba(203, 203, 203, 1);
    border-radius: 6px;
    margin-bottom: 30px;
    padding-left: 1em;
    font-size: 30px;
    color: #999;
    background: #fff;
    font-weight: 400;
    font-family: Microsoft YaHei;
    display: block;
    /*将默认的select选择框样式清除*/
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  b {
    width: 56px;
    height: 28px;
    background-image: url("../../assets/img/index_icons.png");
    background-size: 962px 196px;
    background-position: -924px 8px;
    position: absolute;
    right: 30px;
    top: 30px;
    display: block;
  }

  .title {
    display: block;
    font-size: 36px;
    font-weight: 400;
    margin-bottom: 30px;
  }

  .parent {
    margin: 61px 30px 0;
  }

  .requirements {
    margin-bottom: 61px;

    div {
      position: relative;

      /deep/ .distpicker-address-wrapper select {
        padding: 0;
        width: 100%;
        height: 90px;
        border: 2px solid rgba(203, 203, 203, 1);
        border-radius: 6px;
        margin-bottom: 30px;
        padding-left: 1em;
        font-size: 30px;
        color: #999;
        background: #fff;
        font-weight: 400;
        display: block;
        /*将默认的select选择框样式清除*/
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;

      }
    }
  }

  .areaRent {
    .areaRentParent {
      width: 100%;
      display: flex;
      align-items: center;

      div {
        width: 315px;
        height: 90px;
        border: 2px solid rgba(203, 203, 203, 1);
        border-radius: 6px;
        display: flex;
        align-items: center;

        input {
          width: 200px;
          height: 85px;
          border: none;
          box-sizing: border-box;
          font-size: 30px;
          font-weight: 400;
          text-indent: 1em;
        }

        .squareMetre {
          font-size: 30px;
          display: block;
        }
      }
    }

    i {
      width: 30px;
      height: 27px;
      margin: 0 14px;
      font-size: 30px;
      font-weight: 400;
      display: inline;
    }
  }

  .titleContact {
    input {
      width: 100%;
      height: 90px;
      border: 2px solid #CBCBCB;
      border-radius: 6px;
      font-size: 30px;
      font-weight: 400;
      text-indent: 1em;
    }
  }

  .contact {
    margin-bottom: 30px;

    .contactIpt {
      margin-bottom: 30px;
      font-size: 30px;
      text-indent: 1em;
    }

    div {
      width: 100%;
      height: 90px;
      border: 2px solid #CBCBCB;
      border-radius: 6px;
      display: flex;
      align-items: center;

      input {
        width: 510px;
        height: 85px;
        border: none;
        font-size: 30px;
        font-weight: 400;
        text-indent: 1em;
      }

      .code {

        font-size: 30px;
        color: #F7241B;
      }
    }
  }

  .other {
    textarea {
      width: 100%;
      height: 214px;
      border: 2px solid rgba(203, 203, 203, 1);
      border-radius: 6px;
      padding-top: 1em;
      font-size: 30px;
      font-weight: 400;
      text-indent: 1em;
    }
  }

  button {
    width: 550px;
    height: 90px;
    border: none;
    border-radius: 45px;
    margin: 0 0 30px 98px;
    background: linear-gradient(90deg, #F97B00, #F7241B);
    font-size: 34px;
    color: #FFFFFF;
    font-weight: bold;
    text-align: center;
    line-height: 44px;
    outline: none;
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
