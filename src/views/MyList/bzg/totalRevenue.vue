<template>
    <div class="totalRevenue">
        <header >
            <div class="flex">
                <van-icon name="arrow-left" @click='$router.go(-1)' />
                <span>
                    收益说明
                </span>
            </div>
            <div class="Profit">
               <span>
                   累计收益(元)
               </span>
                <span>
                    <em>￥</em>  
                    <b>1000.00</b>
                </span>
                <span>
                    上月 10.00
                </span>
            </div>
        </header>
        <ul>
            <li class="list">
                <span>
                    2019年09月
                </span>
                <em>
                    +100.00
                </em>
            </li>
           <li class="list">
                <span>
                    2019年09月
                </span>
                <em>
                    +100.00
                </em>
            </li>
            <li class="list">
                <span>
                    2019年09月
                </span>
                <em>
                    +100.00
                </em>
            </li>
        </ul>
    </div>
    
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
    .totalRevenue{
        background: #fff;
        header{
            padding: 0 30px;
            background:linear-gradient(0deg,rgba(0,129,255,1) 0%,rgba(67,162,255,1) 100%);
            height: 365px;
            .flex{
                height: 100px;
                align-items: center;
                color: #fff;
                font-size: 26px;    
                /deep/ .van-icon{
                    font-size: 36px;
                }
            }
            .Profit{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                color: #fff;
                span{
                    font-size: 26px;
                    display:inline-block;
                    margin-bottom: 20px;;
                    em{
                        font-weight: bold;
                        font-size: 40px;
                    }
                    b{
                        font-size: 70px;
                    }
                }
            }
        }
        ul{
            padding: 0 30px;
            li.list{
                height: 110px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 2px solid #EEEBEA;
                font-size: 30px;
                span{
                    color: #333;
                    font-weight: bold;
                }
                em{
                    color: #F7241B;
                    font-size: 32px;
                    font-weight: bold;
                }
            }
            li:last-child{
                border: 0;
            }
        }
    }
</style>