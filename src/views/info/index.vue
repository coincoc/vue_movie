<template>
    <div>
        <div v-html="list.content" class="info"></div>
        <tabbar></tabbar>
    </div>
</template>
<script>
import tabbar from '@/components/tabBar'
import axios from "axios"
export default {
    data(){
        return{
            list:[]
        }
    },
    name:"info",
    components:{
        tabbar
  },
  mounted(){
      axios({
          url:"https://m.maizuo.com/gateway?actId=ElzMZU125260",
          headers:{
              'X-Client-Info':'',
              'X-Host': 'mall.act.static-page.info'
          }
      }).then(res=>{
          this.list=res.data.data.data;
          console.log(this.list)
      })
  }
}
</script>
<style lang="scss" scoped>
    .info{
        margin-bottom: 50px;
    }
</style>