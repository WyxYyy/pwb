<template>
    <div class="Comments">
      <van-nav-bar
        title="发表评论"
        left-arrow
        @click-left='$router.go(-1)'
        right-text="发布"
        @click-right="wantTo('commentResult')"
      />
      <div class="Information">
        <span class="HeadPortrait"></span>
        <span class="Name">管理员姓名</span>
      </div>
      <div class="Content">
        <textarea placeholder="请对本次服务进行评价..."></textarea>
        <van-uploader v-model="fileList" multiple capture	preview-size='90px'/>
        <div class="flex">
          <van-checkbox v-model="checked" icon-size="15px">匿名</van-checkbox>
          <span class="Tips">你写的评价将以匿名的形式展现</span>
        </div>

      </div>
      <div class="evaluate">
        <h1 class="evaluateTitle">服务评分</h1>
        <div class="evaluateContent">
          <span>服务质量</span>
          <van-rate v-model="value1" :size="16" readonly gutter="25px" color="#ee0a24" void-icon="star" void-color="#eee"/>
          <b>好</b>
        </div>
        <div class="evaluateContent">
          <span>服务态度</span>
          <van-rate v-model="value2" :size="16" readonly gutter="25px" color="#ee0a24" void-icon="star" void-color="#eee"/>
          <b>非常好</b>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Comments",
        data() {
            return {
                checked: true,
                value1: 2,
                value2: 3,

                fileList:[]
            };
        }
    };

</script>

<style scoped lang="scss">

  /*内容*/
  .Information {
    background-color: #FFFFff;
    padding: 25px 30px;
    margin-bottom: 30px;
    display: flex;
    .HeadPortrait {
      width: 100px;
      height: 100px;
      display: inline-block;
      margin-right: 25px;
      background-image: url("../../../assets/img/head.png");
      background-size: 100px;
    }
    .Name {
      font-size:40px;
      font-weight:bold;
      line-height: 100px;
    }
  }
  .Content {
    background-color: #FFFFff;
    padding: 40px 30px 0;
    margin-bottom: 30px;
    border-bottom: 2px solid #EEEBEA;
    /deep/ .van-uploader__upload{
      background:url(../../../assets/img/add.jpg);
      background-size: 100%;
      .van-uploader__upload-icon{
        font-size: 0;
      }
    }
    textarea {
      width: 100%;
      height: 180px;
      font-size:30px;
      font-weight:400;
      color:#999999;
      border: none;
    }
    .flex{
      align-items: center;
      .Tips {
        font-size: 24px;
        font-weight: 400;
        color: #999999;
      }
    }
    .van-checkbox {
      margin: 35px 0;
    }
    .van-checkbox /deep/ .van-checkbox__label {
      font-size: 30px;
      font-weight:400;
    }
  }
  .evaluate {
    background-color: #FFFFff;
    padding: 40px 30px;
    .evaluateTitle {
      font-size:26px;
      font-weight:400;
      border-left: 4px solid red;
      padding-left: 10px;
      margin-bottom: 40px;
    }
    .evaluateContent {
      width: 100%;
      display: flex;
      margin: 50px 0;
      span {
        font-size: 28px;
        font-weight: 400;
        margin-right: 50px;
      }
      b {
        color: #F7241B;
        font-size:24px;
        font-weight:400;
        margin-left: 50px;
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
