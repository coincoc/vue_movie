<template>
    <div class="box">
       <h4>影院</h4>
        <div v-for="item in datalist" :key="item.cinemaId" class="listinfo" @click="handlecinema(item.cinemaId)">
            <div class="left">
                <h5>{{item.name}}</h5>
                <p>{{item.address}}</p>
            </div>
            <div class="right">
                <h6>￥{{item.lowPrice/100}}起</h6>
                <p>距离未知</p>
            </div>
        </div>
        <tabbar></tabbar>
    </div>
</template>
<script>
import tabbar from '@/components/tabBar'
import axios from "axios"
export default {
    name:"cinema",
    data(){
        return {
            datalist:[]
        }
    },
    components:{
        tabbar
  },
  methods:{
      handlecinema(id){
          this.$router.push("/cinemainfo/"+id)
      },
  },
  mounted(){
      var id=JSON.parse(localStorage.getItem("city")).cityId
      axios({
          url:"https://m.maizuo.com/gateway?cityId="+id+"&ticketFlag=1&k=3383365",
          headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1595160935853105059037188","bc":"340800"}',
                'X-Host': 'mall.film-ticket.cinema.list'
          }
      }).then(res=>{
          this.datalist=res.data.data.cinemas
          console.log(res.data.data.cinemas)
      })
  }
}
</script>
<style lang="scss" scoped>
    .box{
        margin-bottom: 60px;
        overflow: hidden;
    }
    h4{
        text-align: center;
        height: 44px;
        line-height: 44px;
        font-weight: normal;
    }
    .listinfo{
        font-weight: normal;
        padding: 15px;
        box-sizing: border-box;
        font-size: 12px;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left{
            h5{
                font-size: 15px;
                width: 280px;
            }
            p{
                width: 200px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .right{
            h6{
                color: #ff5f16;
                font-size: 15px;
            }
            p{
                text-align: right;
            }
        }
        p{
            color: #797d82;
        }
    }
   
</style>