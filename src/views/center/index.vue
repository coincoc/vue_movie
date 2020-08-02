<template>
    <div class="box">
        用户名：{{list.username}}<br>
        性别：{{list.sex}}<br>
        年龄：{{list.years}}<br>
        住址：{{list.address}}<br>
        <button @click="handlequit">退出</button>
        <tabbar></tabbar>
    </div>
</template>
<script>
import tabbar from '@/components/tabBar'
import axios from 'axios';
export default {
    name:"center",
    components:{
        tabbar
  },
  data(){
      return{
          list:[]
      }
  },
  methods:{
      handlequit(){
          document.cookie="islogin=false;  expires=1"
         this.$router.push("/login")
      }
  },
  mounted(){
       axios.get("./userinfo.json").then((res)=>{
           var datas=res.data
           var cookies=document.cookie.split(";")
          for(var i=0;i<datas.length;i++){
              if(cookies[0].indexOf(datas[i].username)!=-1){
                  this.list=datas[i]
                  return;
              }
          }
           
       })
  },
  watch:{
          $route (to, from) {
      //this.$router.go(0)
      window.location.reload()
    },
  },
    beforeRouteEnter (to, from, next) {
        var list=document.cookie
        var islogin=false
        list=list.split("; ")
       for(var i=0;i<list.length;i++){
           if(list[i].indexOf("true")!=-1){
             islogin=true
           }else{
               islogin=false
           }
       }
       if(islogin){
           next()
       }else{
           next("/login")
       }
  },
}
</script>
<style lang=scss scoped>
     .box{
         width: 100%;
        overflow: hidden;
            button{
        display: block;
        height: 44px;
        line-height: 44px;
        text-align: center;
        width: 80%;
        margin: 20px auto;
        border: 0;
        background-color: #ff5f16;
        color: white;
        border-radius: 10px;
    }
     }
</style>