<template>
    <div>
            <div v-for="item in datalist" :key="item.filmId" class="nowplay" @click="handleclick(item.filmId)">
            <div class="nowplayson">
                <img :src="item.poster">
                <div :style="mystyle">
                    <h4> {{item.name}} <i>{{item.timeType}}D</i> </h4>
                    <p>主演：{{item.actors | actorfilter}}</p>
                </div>
            </div>
        </div>
        <div class="nomore" v-show="isnomore">没有更多了</div>
    </div>
</template>
<script>
import axios from 'axios';
import Vue from 'vue';
Vue.filter("actorfilter",(item)=>{
    var isactor="";
    if(item!=undefined){
        for (var i of item){
            isactor+=i.name+" ";
        }
    }else{
        isactor="暂无主演";
    }
    return isactor;
})
export default {
    data(){
        return{
            datalist:[],
            isnomore:false,
            mystyle:{
                width:"200px", }
        }
    },
    methods:{
        handleclick(id){
            this.$router.push(`/nowplayinginfo/${id}`)
        },
    },
    mounted(){
        this.mystyle.width=window.screen.width-170+"px";
        var id=JSON.parse(localStorage.getItem("city")).cityId
        axios({
            url:"https://m.maizuo.com/gateway?cityId="+id+"&pageNum=1&pageSize=10&type=2&k=930259",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1595160935853105059037188","bc":"340800"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res=>{
                //console.log(res.data.data)
                this.datalist=res.data.data.films
                  if(this.datalist.length<10 &&this.datalist.length>0){
                    this.isnomore=true;
                    }else{
                        this.isnomore=false
                    }
            }).catch(()=>{
            console.log("error")
        })
    }
}
</script>

<style lang="scss" scoped>
     .nomore{
         text-align: center;
     }
      .nowplay{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 15px 15px 0;
       .nowplayson{
           background: white;
           line-height: 20px;
           display: flex;
           align-items: center;
           img{
               width: 66px;
               height: 90px;
               margin: 0 10px;
           }
           h4{
                font-size: 16px;  
                color: #191a1b; 
           }
           p{
               white-space: nowrap;
               text-overflow: ellipsis;
               font-size: 13px;
               color: #797d82;
               width: 100%;
               overflow : hidden;
           }
       }
    }
</style>