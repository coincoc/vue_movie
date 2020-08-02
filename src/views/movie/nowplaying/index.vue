<template>
    <div :class="{box:issure,hidden:true}" ref="listinfo">  
        <div v-show="isshow" class="isshow">暂无热映</div>
        <div v-for="item in list" :key="item.filmId" class="nowplay" @click="handleclick(item.filmId)">
            <div class="nowplayson">
                <img :src="item.poster">
                <div :style="mystyle">
                    <h4> {{item.name}} <i>{{item.timeType}}D</i> </h4>
                    <p class="grade">观众评分：<i>{{item.grade}}</i></p>
                    <p>主演：{{item.actors | actorfilter}}</p>
                    <p>{{item.nation}} | {{item.runtime}}</p>
                </div>
            </div>
            <button>购票</button>
        </div>
        <div class="nomore" v-show="isnomore">没有更多了</div>
    </div>
</template>
<script>
import axios from "axios"
import Vue from 'vue'
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
            list:[],
            num:1,//jjjjJjjj
            x:true,
            issure:false,
            isshow:false,
            isnomore:false,
            isonscroll:false,
            mystyle:{
                width:"200px", }
        }
    },
    mounted(){
        this.mystyle.width=window.screen.width-170+"px";
        if(localStorage.getItem("city")==null){
             this.$router.push("/space")
             return
         }
        var id=JSON.parse(localStorage.getItem("city")).cityId
        console.log(JSON.parse(localStorage.getItem("city")))  
        axios({
            url:"https://m.maizuo.com/gateway?cityId="+id+"&pageNum="+this.num+"&pageSize=10&type=1&k=9421049",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1595160935853105059037188","bc":"310100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res=>{
            this.list=res.data.data.films
            if(this.list.length==0){
                this.isshow=true    
            }else{
                this.isshow=false
            }
            if(this.list.length<10 &&this.list.length>0){
                this.isnomore=true
                this.isonscroll=false
            }else{
                this.isnomore=false
                this.isonscroll=true
                //console.log(this.isonscroll)
            }
            if(this.isonscroll){
            this.$nextTick(()=>{
                //window.onscroll=this.handlescroll
                 window.addEventListener('scroll', this.handlescroll);
        })}
        }).catch(()=>{
            console.log("error")
        })
        console.log(this.isonscroll) 

    },
    beforeDestroy(){
        window.removeEventListener('scroll', this.handlescroll)
        console.log("解除")
     },
    methods:{
        handleclick(id){
            this.$router.push(`/nowplayinginfo/${id}`)
        },
         handlescroll(){
          //console.log(document.documentElement.scrollTop,this.$refs.listinfo.offsetHeight-document.documentElement.offsetHeight)
          if(document.documentElement.scrollTop>this.$store.state.imgheight){
              //this.$store.state.isfixed=true
              this.$store.commit("issrue",true)
          }else{
              //this.$store.state.isfixed=false
               this.$store.commit("issrue",false)
          }
          if(document.documentElement.scrollTop>this.$refs.listinfo.offsetHeight-document.documentElement.offsetHeight){
              if(this.x==true){
                  this.num++;
                  this.x=false
                  var id=JSON.parse(localStorage.getItem("city")).cityId
              axios({
                url:"https://m.maizuo.com/gateway?cityId="+id+"&pageNum="+this.num+"&pageSize=10&type=1&k=9421049",
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1595160935853105059037188","bc":"310100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
                }).then(res=>{
                    if(res.data.data.films.length!=0){
                        this.list=[...this.list,...res.data.data.films]
                        this.x=true
                        console.log(res.data.data.films.length)
                    }else{
                        this.issure=true
                        console.log("没有数据了")
                    }
                    
                })
             }
      }
        
      },

    }
}
</script>
<style lang="scss" scoped>
    .hidden{
        overflow: hidden;
    }
    .box{border-bottom: 10px solid #bdc0c5;}
    .nomore{
        text-align: center;
    }
    .isshow{
        text-align: center;
        height: 50px;
        line-height: 50px;
    }
    .nowplay{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 15px 15px 0;
        button{
            width: 50px;
            height: 25px;
            border: #ff5f18 1px solid;
            border-radius: 2px;
            color: #ff5f18;
            background: white;
        }
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
           .grade i{
               color: #ffb232;
           }
       }
    }
</style>