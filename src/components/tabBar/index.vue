<template>
    <footer>
        <ul>
            <router-link to="/movie" tag="li" activeClass="active"><i class="iconfont icon-dianying"></i><br>电影</router-link>
            <router-link to="/cinema" tag="li" activeClass="active"><i class="iconfont icon-yingyuan"></i><br>影院</router-link>
            <router-link to="/info" tag="li" activeClass="active"><i class="iconfont icon-zixun"></i><br>咨询</router-link>
            <router-link to="/center" tag="li" activeClass="active"><i class="iconfont icon-yixianshi_huaban"></i><br>我的</router-link>
        </ul>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    footer{
        background: white;
        position: fixed;
        left: 0;
        bottom: 0;
        height: 49px;
        width: 100%;
        ul{
            height: 49px;
            display: flex;
            height: 49px;
            align-items: center;
            li{
                text-align: center;
                flex: 1;
               font-size: 12px;
                i.iconfont{
                    font-size: 21px;
                }
            }
            .active{
                color: #ff5f16;
            }
        }
    }
</style>