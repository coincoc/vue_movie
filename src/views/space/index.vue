<template>
    <div>
    <mt-index-list v-show="isshow">
        <mt-index-section v-for="item in list" :key="item.index" :index="item.index">
            <div @click="handleclick(item1.cityId,item1.name)"  v-for="item1 in item.list" :key="item1.cityId">
                <mt-cell :title="item1.name" ></mt-cell>
            </div>
    </mt-index-section>
     </mt-index-list>
    </div>
</template>
<script>
import axios  from 'axios'
export default {
    data(){
        return{
            list:[],
            msg:"",
            newlist:[],
            isshow:true
        }
    },
    mounted(){
        axios({
            url:"https://m.maizuo.com/gateway?k=7740296",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1595160935853105059037188"}',
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then((res)=>{
            this.handlespace(res.data.data.cities)
            // for(var item in (res.data.data.cities){
            //     if((item.pinying).indexOf(0,1).toUpperCase)
            // }
            //console.log(res.data.data.cities)
            
        }).catch(()=>{
            console.log("error")
        })
    },
     watch:{
    $route (to, from) {
      //this.$router.go(0)
      window.location.reload()
    },
 },
    methods:{
        handlespace(data){
            var indexList=[]
            for(var i = 65;i<=90;i++){
                indexList.push(String.fromCharCode(i));
            }
            var newList=[]
            for(var j=0;j<indexList.length;j++){
                var arr=data.filter(item=>item.pinyin.substring(0,1)===indexList[j].toLowerCase())
                if(arr!=""){
                    this.list.push({
                    index:indexList[j],
                    list:arr
                });
                }
            }
            console.log(this.newlist)
        },
        handleclick(id,name){
            var cityinfo={
                "cityId":id,
                "cityname":name
            }
            localStorage.setItem("city",JSON.stringify(cityinfo))
            this.$router.push(`/movie`)
        }
    }
}

</script>