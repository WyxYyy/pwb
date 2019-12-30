<template>
  <div class="MyEvaluation">
    <van-nav-bar @click-left='$router.go(-1)' title="我的评价" left-arrow style="font-size: 20px"></van-nav-bar>

    <div v-if="a<0" class="lists">
        <div class="list">
            <!-- 名字头像 -->
            <div class="listHeader">
                <img src="../../assets/img/head.png" alt="">
                <span>管理员姓名</span>
            </div>
            <!-- 评星 -->
            <div class="padL score">
                <van-rate
                    readonly
                    v-model="Fraction"
                    :size="14"
                    color="#F7241B"
                    void-icon="star"
                    void-color="#CACACA"
                />
                <span class="Fraction">
                    {{Fraction}}分
                </span>
            </div>
            
            <!-- 我的评价 -->
            <div class="padL comment">
                小伙子人不错，干活勤快，服务到位，下次还会继续用你，希望继续加油！
            </div>
            <!-- 雇员回复评价 （雇员名字头像时间回复内容) -->
             <div class="padL Reply">
                 <div class="Housekeeper">
                    <img src="../../assets/img/head.png" alt="">
                    <div class="flex">
                        <span>
                            管理员昵称
                        </span>
                        <em>
                            2019年5月20日 08:00
                        </em>
                    </div>
                 </div>
                 <div class="ReplyContent">
                     回复你：谢谢你的鼓励，我会继续努力的！
                 </div>
             </div>
            <!-- 时间 删除 -->
            <div class="padL timeDel flex">
                <span class="time">
                    2019-05-20 发表评论
                </span>
                <button class="Del ">
                    删除
                </button>
            </div>
        </div>
        <div class="list">
            <!-- 名字头像 -->
            <div class="listHeader">
                <img src="../../assets/img/head.png" alt="">
                <span>管理员姓名</span>
            </div>
            <!-- 评星 -->
            <div class="padL score">
                <van-rate
                    readonly
                    v-model="Fraction"
                    :size="14"
                    color="#F7241B"
                    void-icon="star"
                    void-color="#CACACA"
                />
                <span class="Fraction">
                    {{Fraction}}分
                </span>
            </div>
            
            <!-- 我的评价 -->
            <div class="padL comment">
                小伙子人不错，干活勤快，服务到位，下次还会继续用你，希望继续加油！
            </div>
            <!-- 雇员回复评价 （雇员名字头像时间回复内容) -->
             <div class="padL Reply">
                 <div class="Housekeeper">
                    <img src="../../assets/img/head.png" alt="">
                    <div class="flex">
                        <span>
                            管理员昵称
                        </span>
                        <em>
                            2019年5月20日 08:00
                        </em>
                    </div>
                 </div>
                 <div class="ReplyContent">
                     回复你：谢谢你的鼓励，我会继续努力的！
                 </div>
             </div>
            <!-- 时间 删除 -->
            <div class="padL timeDel flex">
                <span class="time">
                    2019-05-20 发表评论
                </span>
                <button class="Del ">
                    删除
                </button>
            </div>
        </div>
         <div class="list">
            <!-- 名字头像 -->
            <div class="listHeader">
                <img src="../../assets/img/head.png" alt="">
                <span>管理员姓名</span>
            </div>
            <!-- 评星 -->
            <div class="padL score">
                <van-rate
                    readonly
                    v-model="Fraction"
                    :size="14"
                    color="#F7241B"
                    void-icon="star"
                    void-color="#CACACA"
                />
                <span class="Fraction">
                    {{Fraction}}分
                </span>
            </div>
            
            <!-- 我的评价 -->
            <div class="padL comment">
                小伙子人不错，干活勤快，服务到位，下次还会继续用你，希望继续加油！
            </div>
            <!-- 雇员回复评价 （雇员名字头像时间回复内容) -->
             <div class="padL Reply">
                 <div class="Housekeeper">
                    <img src="../../assets/img/head.png" alt="">
                    <div class="flex">
                        <span>
                            管理员昵称
                        </span>
                        <em>
                            2019年5月20日 08:00
                        </em>
                    </div>
                 </div>
                 <div class="ReplyContent">
                     回复你：谢谢你的鼓励，我会继续努力的！
                 </div>
             </div>
            <!-- 时间 删除 -->
            <div class="padL timeDel flex">
                <span class="time">
                    2019-05-20 发表评论
                </span>
                <button class="Del ">
                    删除
                </button>
            </div>
        </div>
    </div>
    <img v-else src="../../assets/img/noData.jpg" alt="">
  </div>
</template>

<script>
export default {
    data(){
        return{
            Fraction:4,
            a:1
        }
    }
}
</script>

<style scoped lang='scss'>

    .lists{
        background: #fff;
        padding: 0 30px;
        font-family: MicrosoftYaHei;
        .list{
            padding: 40px 0;
            border-bottom: 2px solid #EEEBEA;
            .padL{
                margin-left: 85px;
                margin-bottom:30px; 
            }
            .listHeader{
                font-weight: bold;  
                font-size: 34px;
                img{
                    width: 66px;
                    height:66px;
                    margin-right: 10px;
                }
            }
            .score{
                display: flex;
                align-items: center;
                .Fraction{
                    margin-left: 10px;
                    color: #F7241B;
                }
            }
            .comment{
                font-size: 28px;
                font-family:Microsoft YaHei;
            }
            .Reply{
                background: #F2F2F2;
                padding: 20px;
                .Housekeeper{
                    display: flex;
                    align-items: center;
                    img{
                        width: 40px;
                        height: 40px;
                        margin-right: 10px;
                    }
                    .flex{
                        font-size: 26px;
                        width: 100%;
                        span{
                            color: #F7241B;
                        }
                        em{
                            color: #999;
                        }
                    }
                }
                .ReplyContent{
                    margin-top: 20px;
                    font-size: 26px;
                    margin-left: 50px;
                }
            }
            .timeDel{
                margin-bottom: 0;
                align-items: center;
                .time{
                    font-size: 24px;
                    color: #999;
                }
                .Del{
                    font-size: 26px;
                    width: 100px;
                    height: 46px;
                    border-radius: 23px;
                    border:2px solid rgba(238,235,234,1);
                    background: #fff;
                    color: #999999;
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