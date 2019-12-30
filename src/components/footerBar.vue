<template>
    <footer>
        <router-link to='/'>
            <nav :class="whoShow == 1?'active':''">
                <i class="left"></i>
                <span>首页</span>
            </nav>
        </router-link>
        <router-link to='/address'>
            <nav :class="whoShow == 2?'active':''">
                <i class="center"></i>
                <span>地址/出租</span>
            </nav>
        </router-link>
        
        <router-link to='/my'>
            <nav :class="whoShow == 3?'active':''">
                <i class="right"></i>
                <span>我的</span>
            </nav>
        </router-link>
        
    </footer>
</template>

<script>
export default {
    data(){
        return{
            // whoShow:1
        }
    },
    props:['whoShow'],
}
</script>

<style lang='scss' scoped>
    footer{
        z-index: 9999;
        height: 98px;
        width: 100%;
        position: fixed;
        bottom: 0;
        box-shadow:0px 1px 10px 0px rgba(190,190,190,0.21);
        display: flex;
        padding: 0 106px;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        nav{
            text-align: center;
            i{
                display: inline-block;
                width: 44px;
                height: 44px;
                background-image: url(../assets/img/index_icons.png);
                background-size: 481px 98px;
            }
            i.left{
                background-position: -294px 0;
            }
            
            i.center{
                background-position: -338px 0;
            }
            
            i.right{
                background-position: -382px 0;
            }
            
            span{
                display: block;
                font-size: 20px;
                color: #B0AFAF;
            }
            
        }
        nav.active{
            .left{
                background-position: -294px -44px;
            }
            .center{
                background-position: -338px -44px;
            }
            .right{
                background-position: -382px -44px;
            }
            span{
                color: #F7241B;
            }
        }
    }
</style>