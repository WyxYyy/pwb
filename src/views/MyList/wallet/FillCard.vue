<template>
  <div class="FillCard">
        <van-nav-bar @click-left='$router.go(-1)' title="填写卡号" left-arrow></van-nav-bar>
        <div class="ipts">
            <div class="iptList">
                <span>
                    姓名
                </span>
                <div class="ipt flex">
                    <input type="text" v-model="name"  placeholder="请输入本人姓名">
                    <i @click="Tips"></i>
                </div>
            </div>
            <div class="iptList">
                <span>
                    银行卡号
                </span>
                <div class="ipt flex">
                    <input type="number" v-model="bank" placeholder="请输入本人银行卡号">
                </div>
            </div>
            <div class="iptList">
                <span>
                    银行预留手机号
                </span>
                <div class="ipt flex">
                    <input type="number" maxlength="11" v-model="phone" placeholder="请输入本人银行预留手机号">
                </div>
            </div>
            <div class="next" @click="next">
                下一步
            </div>
        </div> 
        <van-popup
            v-model="show"
            closeable='true'
            :style="{ width:'90%' }"
        >

            <div class="Verification">
                <span class="title">
                    验证手机号
                </span>
                <div class="myFhone">
                    <em>
                        已发送短信验证码到手机
                    </em>
                    <b>
                        153****6461
                    </b>
                </div>
                <div class="VerificationIpt flex">
                    <input type="number" v-model="Verification" placeholder="请输入验证码">
                    <em>
                        重新发送
                    </em>
                </div>

                <div v-if="Verification == ''" class="complete">
                    完成
                </div>
                <div v-else class="complete active">
                    完成
                </div>
            </div>
        </van-popup>
      
  </div>
</template>

<script>
import { Dialog} from 'vant';

export default {
    data(){
        return{
            name:'',
            bank:'',
            phone:'',
            show:false,
            Verification :''
        }
    },
    methods:{
        Tips(){
            
            Dialog.alert({
                title: '持卡人说明',
                message: '为了您的账户资金安全，只能绑定持卡人本人的银行卡',
                confirmButtonText: '我知道了',
                confirmButtonColor:'#F7241B'
                }).then(() => {
                // on close
                });
        },
        next(){
            if(this.name == '' || this.bank == '' || this.phone == ''){
                alert('请填写完整后再次提交')
            }else{
                this.show = true

            }
        }
    }
}
</script>

<style lang='scss' scoped>

.FillCard{


    .ipts{
        padding:  0 60px;
        padding-bottom: 50px;
        background: #fff;
        .iptList{
            padding-top: 58px;
            border-bottom: 2px solid #EEEBEA;
            span{
                font-size: 26px;
                color: #999;
            }
            .ipt{
                align-items: center;
                margin-top: 8px;
                input{
                    border: 0;
                    padding: 26px 0;
                    font-size: 32px;
                    width: 80%;
                } 
                input::-webkit-input-placeholder {
                    color: #DDDDDD;
                 }
                i{
                    display: block;
                    width: 34px;
                    height: 34px;
                    background-image: url(../../../assets/img/noic.png);
                    background-size: 34px;
                }
            }   
        }
        .next{
            width: 100%;
            height: 88px;
            border-radius: 44px;
            background: #F7241B;
            color: #fff;
            font-size: 32px;
            font-weight: bold;
            text-align: center;
            line-height: 88px;
            margin-top: 60px;
        }
    }

    /deep/ .van-popup{
        .van-popup__close-icon{
            font-size: 44px;
        }
        .Verification{
            padding: 100px 60px;
            .title{
                font-size: 40px;
                display: block;
                margin-bottom: 34px;
            }
            .myFhone{
                display: flex;
                height: 85px;
                justify-content: space-between;
                flex-direction: column;
                em{
                    font-size: 24px;
                    color: #999;
                }
                b{
                    font-size: 50px;
                    line-height: 50px;
                    font-weight: 400;
                }
            }
            .VerificationIpt{
                width: 100%;
                border-bottom: 1px solid #333;
                margin-top: 50px;
                padding: 30px 0;
                input{
                    border: 0;
                    font-size: 24px;
                    width: 80%;

                }
                input::-webkit-input-placeholder {
                    color: #DDDDDD;
                 }
                em{
                    font-size: 24px;
                    color: #f72418;
                }
            }
            .complete{
                margin-top: 60px;
                width: 100%;
                height: 88px;
                text-align: center;
                line-height: 88px;
                font-size: 32px;
                font-weight: bold;
                background: #DCDCDC;
                border-radius: 44px;
                color: #fff;
            }
            .complete.active{
                background: #f72418
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
</style>