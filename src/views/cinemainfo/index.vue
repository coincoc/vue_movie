<template>
    <div class="box">
        <div class="back" @click="handleback"><i class="iconfont icon-back"></i></div>
        <div class="listinfo">
            <h4>{{datalist.name}}</h4>
            <p>{{datalist.address}}</p>
            <span>暂无场次</span>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            datalist:[]
        }
    },
    methods:{
        handleback(){
            this.$router.push("/cinema")
         }
    },
    mounted(){
        var id=this.$route.params.id
        axios({
            url:"https://m.maizuo.com/gateway/?cinemaId="+id+"&k=8852612",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1595160935853105059037188","bc":"610900"}',
                'X-Host': 'mall.film-ticket.cinema.info'
            }
        }).then(res=>{
            this.datalist=res.data.data.cinema
            console.log(res.data.data.cinema)
        })
    }
}
</script>
<style lang="scss" scoped>
    h4{
        height: 44px;
        line-height: 44px;
        text-align: center;
        font-weight: normal;
        font-size: 17px;
        margin-bottom: 10px;
    }
    p{
        height: 50px;
        font-size: 14px;
        padding-left: 17px;
    }
    span{
        display: block;
        height: 150px;
        line-height: 150px;
        text-align: center;
    
    }
     .box{
        position: relative;
        .back{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: white;
        opacity: 0.7;
        color: grey;
        text-align: center;
        line-height: 30px;
        position: absolute;top: 5px;
        left: 5px;
        z-index: 1000000;
        .icon-back{
            font-size: 25px;
        }
    }
    }
</style>