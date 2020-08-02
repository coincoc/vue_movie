<template>
    <div class="box">
        <button class="city" @click="handlecity">{{cityname}}</button>
        <myswiper ref="tabbar">
                <div class="swiper-slide" v-for="i in 3" :key="i"><img src="https://static.maizuo.com/v5/upload/189bcf606b4bf49ad5de201a2ea5024d.jpg?x-oss-process=image/quality,Q_70" alt=""></div>
        </myswiper>
       <div :class="{fixed:$store.state.isfixed}">
           <ul class="tabbar">
            <router-link tag="li" to="/movie/nowplaying" activeClass="active">正在热映</router-link>
            <router-link tag="li" to="/movie/comingsoon" activeClass="active">即将上映</router-link>
       </ul>
       </div>
        <router-view class="listinfo"></router-view>
        <tabbar></tabbar>
    </div>
</template>
<script>
import tabbar from '@/components/tabBar'
import myswiper from '@/components/mySwiper'

export default {
    data(){
        return{
            cityname:""
        }
    },
    name:"movie",
    components:{
        tabbar,
        myswiper
  },
  mounted(){
      this.$store.state.imgheight=this.$refs.tabbar.$el.offsetHeight
      if(JSON.parse(localStorage.getItem("city"))==null){
          return
      }
     this.cityname=JSON.parse(localStorage.getItem("city")).cityname
  },
  methods:{
     handlecity(){
         this.$router.push("/space")
     }
      //


  }
}

</script>
<style scoped lang="scss">
    .box{   position: relative;
         .city{ width: 52px; height: 30px; text-align: center; line-height: 30px; background: black; opacity: 0.8; color: white; border-radius: 15px;
        position: absolute; left: 5px; top: 5px; z-index: 100000;
            overflow: hidden; text-overflow: ellipsis;
        }
    }
   
    .listinfo{ margin-bottom: 60px;}
    .swiper-slide img{ width: 100%; height: 100%;}
    .fixed{
        position: fixed; 
        top: 0;
        left: 0;
        z-index: 1000;
        height: 49px;
        width: 100%;
        background: white;
    }
    .tabbar{
        height: 49px; display: flex; align-items: center;
        background: white;
        li{
            text-align: center; flex: 1;
        }
        .active{
            color:#ff5f16;
            padding-bottom: 10px;
            border-bottom:2px solid #ff5f16;
        }
    }
</style>