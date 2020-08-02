<template>
    <div class="box">
        <div class="back" @click="handleback"><i class="iconfont icon-back"></i></div>
        <div class="imgdiv" :style="mystyle"><img :src="list.poster" alt="" :style="imgstyle"></div>
        <div class="header">
            <h4><p>{{list.name}} <i class="type">{{list.timeType}}D</i></p><i class="grade">{{list.grade}}分</i></h4>
            <p>{{list.category}}</p>
            <p>{{premiereAt}}</p>
            <p>{{list.nation}} | {{list.runtime}}</p>
            <p class="headerp">{{list.synopsis}}</p>
        </div>
        <div class="actors">
            <h4>演职人员</h4>
            <listSwiper mynum="4" myclass="plass" :key="list.length">
                <li v-for="item in list.actors" :key="item.index" class="swiper-slide">
                    <img :src="item.avatarAddress">
                     {{item.name}}</li>
            </listSwiper>
        </div>
        <div class="photos">
                <h4>剧照</h4>
              <listSwiper mynum="3" myclass="lclass" :key="list.length">
                <li v-for="item in list.photos" :key="item" class="swiper-slide">
                    <img :src="item">
                </li>
            </listSwiper>
        </div>
        <button>选座购票</button>
    </div>
</template>
<script>
import axios from "axios"
import listSwiper from '@/components/listSwiper'
export default {
    name:"nowplayinginfo",
    data(){
        return{
            list:[],
            mystyle:{
                height:"200px"
            },
            imgstyle:{
                top:"200px"
            }
        }

    },
    components:{
        listSwiper
    },
     mounted(){ 
         var id=this.$route.params.id;
         
         axios({
            url:`https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=2394458`,
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1595160935853105059037188","bc":"310100"}',
                'X-Host': 'mall.film-ticket.film.info'
            }
        }).then(res=>{
            this.list=res.data.data.film;
            console.log(this.list)
            // if(this.list.poster.indexOf("movie")!=-1){
            //        this.imgstyle.top=-((window.screen.width*500)/325*0.3)+"px";

                  
            // }else{
            //     this.imgstyle.top="0";
               
            // }
             

        }).catch(()=>{
            console.log("error")
        })

     },
     methods:{
         handleback(){
             this.$router.push("/movie")
         }
     },
     computed:{
         premiereAt(){
             return new Date(this.list.premiereAt*1000).toLocaleDateString().replace(/\//g,"-")
         }
     }
    
}
</script>
<style lang="scss" scoped>
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
    button{
        height: 49px;
        width: 100%;
        border: 0;
        z-index: 3000;
        position: fixed;
        left: 0;
        bottom: 0;
        background: #ff5f16;
        color: white;
        font-size: 16px;

    }
    background: grey;
    overflow: hidden;
    .imgdiv{
        overflow: hidden;
        box-sizing: border-box;
        img{
            width: 100%;
            
        }
    }
    .photos{
        padding-bottom: 20px;
        background: white;
        margin-bottom:60px;
        list-style: none;
        h4{
            font-size: 16px;
            padding: 15px;
        }

    }
    .actors{
        padding-bottom: 15px;
        margin-bottom: 10px;
        background: white;
        font-size: 12px;
        list-style: none;
        h4{
            font-size: 16px;
            padding: 15px 15px 30px 15px;
        }
    }
    .header{
        padding: 15px;
        margin-bottom: 10px;
        background: white;
        font-size: 13px;
        color: #797d82;
        line-height: 20px;
        h4{
            display: flex;
            justify-content: space-between;
            font-size: 18px;
            font-weight: normal;
            color: #191a1b;
            .type{
                font-size: 12px;
                background: #d2d6dc;
                text-align: center;
                color: white;
                border-radius: 2px;
            }
            .grade{
                font-size: 18px;
                color: #ffb232;
            }
            
        }
        .headerp{
                margin: 18px 0;
                height: 40px;
                overflow: hidden;
            }
        
    }
}
.swiper-slide{
    text-align: center;
}
</style>