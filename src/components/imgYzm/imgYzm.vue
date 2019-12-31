<template>
  <div>
    <div class="about">
      <i class="imgYzm"></i>
      图形验证码
    </div>
    <div class="ipt">
      <input type="text" v-model="value" @change='yzm' placeholder="请输入验证码">
      <img class="img" @click="Refresh" :src="Url" alt="">
    </div>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        Url: '',
        isRefresh: true,
        value: '',
        yzmJudge: true,
      }
    },
    methods: {
      Refresh() {
        console.log(123)
        this.$nextTick(() => {
          console.log(321)
          this.get(this.Interface.config.createCaptcha,1)

        })
      },
      yzm() {
        console.log(123)

        var emitData = {
          unique_id: this.unique_id,
          captcha_code: this.value
        }
        this.$emit('getUnique', emitData)
      },
      get(url, index) {
        var postdata = ''
         if (index == 3 || index == 2) {
          postdata = {
            'unique_id': this.unique_id,
            'session_id': this.$cookieStore.getCookie('session')
          }
        }
        this.$axios({
          url: url,
          method: 'get',
          params: postdata,

        }).then((res) => {
          if (index == 1) {
            // 图片路径
            var newUrl = this.Interface.UrlAdress + res.data.data.captcha_url
            this.Url = newUrl
            this.get(newUrl, 2)
            console.log(res.data.data.captcha_url)
            this.encryption_code = res.data.data.encryption_code
            // 存session id 到cookie
            this.$cookieStore.setCookie('session', res.data.data.session_id)
            this.unique_id = res.data.data.unique_id
            // 给父组件传值
            var emitData = {
              unique_id: this.unique_id,
              captcha_code: this.value
            }
            this.get(this.Interface.config.getImg, 3)
            this.$emit('getUnique', emitData)
          } else if (index == 2) {
            // console.log(res)
          }
        })

      },
      
    },
    mounted() {
      this.get(this.Interface.config.createCaptcha, 1)
    }
  }

</script>

<style scoped lang='scss'>
  .img {
    height: 88px;
  }

  input::-webkit-input-placeholder {
    color: #ACACAC;
  }

  .imgYzm {
    display: block;
    width: 36px;
    height: 36px;
    background-image: url(../../assets/img/login.png);
    background-size: 180px 36px;
    margin-right: 10px;
    background-position: -72px 0;

  }

  .about {
    display: flex;
    align-items: center;
    font-size: 34px;
    padding-left: 50px;

  }

  .ipt {
    margin-top: 30px;
    width: 100%;
    height: 88px;
    border-radius: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      text-indent: 2em;
      border: 0;
      background: #f3f3f3;
      height: 100%;
      border-radius: 44px;
      font-size: 26px;
      color: #ACACAC;
      width: 40%;
    }
  }

</style>
