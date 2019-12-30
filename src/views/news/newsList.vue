<template>
    <div class="newsList">
        <van-nav-bar @click-left='$router.go(-1)' title="消息" left-arrow style="font-size: 20px"></van-nav-bar>
       <div v-if="false">
            <header class="flex">
                        <div class="Entrance">
                            <i class="system"></i>
                            <span>系统通知</span>
                        </div>
                        <div class="Entrance">
                            <i class="Station"></i>
                            <span>站内通知</span>
                        </div>
                        <div class="Entrance">
                            <i class="appointment"></i>
                            <span>预约通知</span>
                        </div>
                    </header>
                    <div class="list">
                        <div class="listTop flex">
                            <span >
                                <i class="system"></i>
                                系统通知
                            </span>
                            <em>
                                上午 10:00
                            </em>
                        </div>
                        <div class="title">
                            <h2>您收到一条新的站内通知消息</h2>
                            <h4>恭喜您！续约申请已提交，可点击查看!</h4>
                        </div>
                        <div class="listBtm flex" @click="wantTo('newsDetail')">
                            <span>
                                查看详情
                            </span>
                            <van-icon name="arrow" />

                        </div>
                    </div>
                    <div class="list">
                        <div class="listTop flex">
                            <span >
                                <i class="Station"></i>
                                站内通知
                            </span>
                            <em>
                                上午 10:00
                            </em>
                        </div>
                        <div class="title">
                            <h2>您收到一条新的站内通知消息</h2>
                            <h4>恭喜您！续约申请已提交，可点击查看!</h4>
                        </div>
                        <div class="listBtm flex" @click="wantTo('newsDetail')">
                            <span>
                                查看详情
                            </span>
                            <van-icon name="arrow" />

                        </div>
                    </div>
                    <div class="list">
                        <div class="listTop flex">
                            <span>
                                <i class="appointment"></i>
                                预约通知
                            </span>
                            <em>
                                上午 10:00
                            </em>
                        </div>
                        <div class="title">
                            <h2>您收到一条新的站内通知消息</h2>
                            <h4>恭喜您！续约申请已提交，可点击查看!</h4>
                        </div>
                        <div class="listBtm flex" @click="wantTo('newsDetail')">
                            <span>
                                查看详情
                            </span>
                            <van-icon name="arrow" />

                        </div>
                    </div>
       </div>
        <img v-else src="../../assets/img/noData.jpg" alt="">
       
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
 
  header{
      width: 100%;
      height: 200px;
      background: #fff;
      padding: 40px 75px;
      i{
          display: block;
          width: 72px;
          height: 72px;
          margin:  0 auto;
          margin-bottom: 8px;
          background-image: url(../../assets/img/news_icons.png);
          background-size: 216px 116px;
      }
      i.system{
          background-position: 0 0;
      }
      i.Station{
          background-position: -72px 0;
      }
      i.appointment{
          background-position: -144px 0;
      }

      span{
          font-size: 28px;
      }
  }
  .list{
      margin-top: 30px;
      background: #fff;
      height: 350px;
      padding: 0 30px;
      .listTop{
          height: 90px;
          align-items: center;
          border-bottom: 2px solid #ebebeb;
          span{
              font-size: 30px;
              line-height: 90px;
              display: flex;
              align-items: center;
              i{
                  display: inline-block;
                  width: 44px;
                  height: 44px;
                  margin-right: 9px;
                background-image: url(../../assets/img/news_icons.png);
                  background-size: 216px 116px;
              }
                i.system{
                    background-position: -12px -72px;
                }
                i.Station{
                    background-position: -56px -72px;
                }
                i.appointment{
                    background-position: -100px -72px;
      }
          }
          em{
              font-size: 24px;
              color: #999;
          }
      }
      .title{
          display: flex;
          　flex-flow: column ;
          justify-content: space-around;
          height: 170px;;
          border-bottom: 2px solid #ebebeb;

          h2{
              font-size: 36px;
              font-weight: bold;
              
          }
          h4{
              color: #999;
              font-size: 30px;
              font-weight: 400;
          }
      }
      .listBtm{
          font-size: 30px;
          height: 90px;
          align-items: center;
          .van-icon{
              font-size: 35px;
              color: #999;
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