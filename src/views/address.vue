<template>
  <div class="address">
    <header>
      选址/出租
    </header>
    <div class="Modular">
      <div class="list">
        <i class="iconLease"></i>
        <div class="content">
          <span class="title">
            出租/转租
          </span>
          <p class="introduce">
            快速精准为您的房屋找到适合它的租客
            <br>
            享受一次性收取一年租金
          </p>
          <button class="btnLease" @click="clickLogin('rentalSublease')">
              我要出租/转租
          </button>
        </div>
      </div>
      <div class="list">
        <i class="iconSite"></i>
        <div class="content">
          <span class="title">
            选址
          </span>
          <p class="introduce">
            帮助小微企业行业风险测评并解决办公
            <br>
            场地问题，提高资金使用率，轻松创业            
          </p>
          <button class="btnSite"  @click="clickLogin('siteSelect')">
              我要选址
          </button>
        </div>
      </div>
    </div>
    <footerBar whoShow=2></footerBar>
  </div>
</template>

<script>
  import footerBar from '@/components/footerBar'

  export default {
    data(){
      return{
        token: this.$cookieStore.getCookie('token'),
      }
    },
    components: {
      footerBar,
    },
    methods:{
      clickLogin(where){
        console.log(this.token)
        if(this.token == null){
          this.$router.push({
            name: 'login',
          })
        }else{
          this.wantTo(where)
        }
      },
    }
  }

</script>

<style scoped lang='scss'>
  .address {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;

    header {
      height: 100px;
      width: 100%;
      text-align: center;
      line-height: 100px;
      font-size: 36px;
      font-family: Microsoft YaHei;
      border-bottom: 2px solid #ebebeb;
    }

    .Modular {
      padding: 30px;

      .list {
        width: 100%;
        height: 330px;
        margin-bottom: 30px;
        border-radius: 6px;
        box-shadow: 0px 1px 15px 0px rgba(215, 215, 215, 1);
        display: flex;
        align-items: center;
        padding-left: 40px;
        padding-top: 45px;

        i {
          display: block;
          width: 140px;
          height: 140px;
          background-image: url(../assets/img/icon.png);
          background-size: 594px 226px;
          margin-right: 39px;
        }

        i.iconLease {
          background-position: 0 0;
        }

        i.iconSite {
          background-position: -140px 0;
        }

        .content {
          height: 100%;

          .title {
            font-size: 40px;
            font-weight: bold;
          }
          .introduce{
            color: #999;
            font-size: 26px;
            margin-top: 10px;
            line-height: 50px;
            margin-bottom: 10px;

          }
          button{
            border-radius:35px;
            border: 0;
            padding: 20px 30px 16px 30px;
            line-height: 30px;
            font-size:30px;
            color: #fff;
          }
          .btnLease{
            background:linear-gradient(0deg,rgba(247,36,27,1) 0%,rgba(255,94,38,1) 100%);
            box-shadow:0px 1px 15px 0px rgba(250,68,31,0.49);
          }
          .btnSite{
            background:linear-gradient(0deg,rgba(255,114,28,1) 0%,rgba(255,180,87,1) 100%);
            box-shadow:0px 1px 15px 0px rgba(255,164,95,0.49);
          }
        }
      } 
    }
  }

</style>
<style lang='scss'>
  .van-toast{
    font-size: 30px;
    width: auto;
    padding: 20px;
  }

</style>