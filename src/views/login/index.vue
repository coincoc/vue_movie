<template>
    <div class="box">
        <div class="header">
            请登录
        </div>
        <div class="login">
            <input type="text" class="user" placeholder="用户名" v-model="username">
            <input type="password" class="pass" placeholder="密码" v-model="password">
            <button @click="handlelogin">登录</button>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:"login",
    data(){
        return{
            username:"",
            password:"",
        }
    },
    methods:{
        handlelogin(){
            axios.get("api/userinfo.json").then((res)=>{
                var datas=res.data
                for(var i=0;i<datas.length;i++){
                    var userinfo=datas[i]
                     if(this.username==userinfo.username && this.password==userinfo.password){
                        document.cookie=`username=${userinfo.username}; expires=1`
                        document.cookie=`password=${userinfo.password}; expires=1`
                        document.cookie="islogin=true; expires=1"
                        this.$router.push("/center")
                        return
                    }else{
                        console.log(111)
                        if(i==datas.length-1){
                            document.cookie="islogin=false;  expires=1"
                            alert("账号或密码错误，请重新输入")
                        }else{
                            continue
                        }
                         
                     }

                }
               
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .box{
        overflow: hidden;
        .header{
        height: 80px;
        background-color: #ff5f16;
        line-height: 80px;
        text-align: center;
        color: white;
        font-size: 20px;
    }
    .login{
        *{
            display: block;
        }
        input{
            box-sizing: border-box;
           height: 50px;
           width: 100%;
           margin: 10px 0;
           border: 0;
           border-bottom: 1px solid #bdc0c5;
        }
        button{
            height: 44px;
            line-height: 44px;
            text-align: center;
            width: 80%;
            margin: 0 auto;
            border: 0;
            background-color: #ff5f16;
            color: white;
            border-radius: 10px;
        }
    }
    }


</style>