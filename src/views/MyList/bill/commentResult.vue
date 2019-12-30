<template>
    <div>
       <van-nav-bar @click-left='$router.go(-1)' title="上传结果" left-arrow  ></van-nav-bar>
       <div class="Success">
           <div class="SuccessAfter">
               <img src="../../../assets/img/success.png" alt="">
               <span>上传成功</span>
               <em>
                   后台正在审核，请留意通知
               </em>
           </div>
        </div>   
        <div class="flex btns">
            <button class="goBack" @click="wantTo('MyEvaluation')">
                返回我的评论
            </button>
            <button class="evaluate" @click="wantTo('my')">
                返回个人中心
            </button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
    .Success{
        width: 100%;
        height: 291px;
        background: #fff;
        padding: 60px 230px;
        .SuccessAfter{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            img{
                width: 72px;
                height: 72px;
            }
            span{
                font-size: 30px;
            }
            em{
                font-size: 24px;
                color: #999;
            }
        }
    }
    .btns{
        padding: 40px 45px;
        button{
            width: 315px;
            height: 80px;
            border-radius: 40px;
            font-size: 30px;
            border: 0;
        }
        .goBack{
            border:2px solid rgba(247,36,27,1);
            background: #f4f4f4;
            color: #F7241B;
        }
        .evaluate{
            background: #F7241B;
            color: #fff;
            font-weight: bold;
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