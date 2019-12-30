<template>
  <div>
    <van-nav-bar @click-left='$router.go(-1)' title="设置" left-arrow></van-nav-bar>
    <div class="MySelect">
      <div class="brief ">
        个人信息
      </div>
      <ul class="lists">

        <li class="flex">
          <span class="title">
            昵称
          </span>
          <span class="change" @click="showName = true">
            修改
            <i></i>
          </span>
        </li>
        <!-- <li class="flex">
                    <span class="title">
                        实名认证
                    </span>
                    <span class="change">
                        立即查看
                        <i></i>
                    </span>
                </li> -->
        <!-- <li class="flex">
                    <span class="title">
                        绑定手机号
                    </span>
                    <span class="change">
                        立即查看
                        <i></i>
                    </span>
                </li> -->
        <!-- <li class="flex">
                    <span class="title">
                        银行卡
                    </span>
                    <span class="change">
                        查看我的银行卡
                        <i></i>
                    </span>
                </li> -->
        <!-- <li class="flex">
                    <span class="title">
                        交易密码
                    </span>
                    <span class="change">
                        立即修改
                        <i></i>
                    </span>
                </li> -->
      </ul>
      <div class="brief ">
        账户安全设置
      </div>
      <ul class="lists">
        <li class="flex">
          <span class="title">
            修改登录密码
          </span>
          <span class="change" @click="showLoginPassworde = true">
            立即修改
            <i></i>
          </span>
        </li>
      </ul>
      <van-popup v-model="showName"  closeable round :close-on-click-overlay='false'  :style="{ width: '70%'  }">
          <span class="selectTitle">
              重置新昵称
          </span>
          <div class="selectIpt">
              <input type="text" v-model="newName"  placeholder="请输入您想要的新昵称">
          </div>
          <div class="selectBtn" v-if="newName != ''">
            <button @click="selectName">
                确认
            </button>
          </div>
      </van-popup>
      <van-popup v-model="showLoginPassworde"  closeable round :close-on-click-overlay='false'  :style="{ width: '70%'  }">
          <span class="selectTitle">
              重置新密码
          </span>
          <div class="selectIpt">
              <input type="password" v-model="old_password"  placeholder="请输入您的旧密码">
          </div>
          <div class="selectIpt">
              <input type="password" v-model="password"  placeholder="请输入您想要的新密码">
          </div>
          <div class="selectIpt">
              <input type="password" v-model="confirm_password"  placeholder="请确认您想要的新密码">
          </div>
          <div class="selectBtn" v-if="old_password != '' && password != '' && confirm_password !=''">
            <button @click="selectPassword">
                确认
            </button>
          </div>
      </van-popup>
    </div>
    <footer>
      <div class="btn" @click="SignOut">
        退出当前账户
      </div>
    </footer>
  </div>
</template>

<script>
    import {
        Toast
    } from 'vant';
    import { Popup } from 'vant';
    import qs from 'qs'
  export default {
    data() {
      return {
          newName:'',
          showName:false,
          showLoginPassworde:false,
          old_password:'',
          password:'',
          confirm_password:'',
          token :this.$cookieStore.getCookie('token'),
      }
    },
    methods: {
      SignOut() {
        this.$cookieStore.delCookie('token')
        this.wantTo('my')
        Toast.success('退出登录成功')
      },
      post(data, apiUri) {
        let postData = qs.stringify(data)
        this.$axios({
          'url': apiUri,
          'method': 'post',
          'data': postData,
          headers: {
            'XX-Token': this.$cookieStore.getCookie('token'),
            'XX-Device-Type': 'mobile',
            'Content-Type':'application/x-www-form-urlencoded',
          }
        }).then((res) => {
           console.log(res)
            Toast(res.data.msg)
            if(res.data.code == 1){
                this.showName = false
                this.showLoginPassworde = false
            }
        })
      },
      selectName(){
        this.post({nickname:this.newName},this.Interface.config.nickName)
      },
      selectPassword(){
        this.post({old_password:this.old_password,password:this.password,confirm_password:this.confirm_password},this.Interface.config.changePassword)
      }
    }
  }

</script>

<style scoped lang='scss'>
  .MySelect {
    padding: 0 30px;
    background: #fff;

    .brief {
      color: #999;
      font-size: 28px;
      padding-top: 50px;
    }

    .lists {
      li {
        height: 115px;
        border-bottom: 2px solid #EEEBEA;
        align-items: center;

        .title {
          font-size: 36px;
        }

        .change {
          font-size: 28px;
          height: 28px;
          line-height: 28px;
          color: #999;
          display: flex;
          align-items: center;

          i {
            display: block;
            width: 13px;
            height: 24px;
            background-image: url(../../../assets/img/more.png);
            background-size: 13px 24px;
            margin-left: 12px;
            ;
          }
        }
      }
    }

    /deep/ .van-popup{
        padding: 30px;
        border-radius: 10px;
            .selectTitle{
                font-size: 40px;
            }
            .selectIpt{
              margin-top: 50px;
              border-bottom: 2px solid #efefef;
              height: 100px;
              input{
                height: 100%;
                font-size: 30px;
                border: 0;
                width: 100%;;
              }
            }
            .selectBtn{
              width: 100%;
              padding: 20px;
              text-align: center;
              button{
                height: 60px;
                width: 50%;
                background: #fff;
                outline: none;
                border: 2px solid #F7241B;
                color: #F7241B;
                font-size: 30px;
                border-radius: 30px;
              }
            }
            .van-icon{
              font-size: 50px;
              top: 30px;
              right: 30px;
            }
    }
  }

  footer {
    width: 100%;
    padding: 30px 125px;
    margin-top: -2px;
    background: #fff;
    position: fixed;
    bottom: 0;

    .btn {
      width: 100%;
      height: 100px;
      border-radius: 50px;
      border: 2px solid #F7241B;
      text-align: center;
      line-height: 100px;
      color: #F7241B;
      font-size: 34px;
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

</style>
