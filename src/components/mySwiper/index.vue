<template>
    <div>
        <div class="swiper-container">
        <div class="swiper-wrapper">
                <slot></slot>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    </div>
</template>

<script>
import Swiper from "swiper"
import 'swiper/dist/css/swiper.min.css'
export default {
    data(){
        return {
        }
    },
    mounted(){
        //this.mystyle.width=window.screen.width+"px";
        new Swiper(".swiper-container",{ 
            pagination: {
               el: '.swiper-pagination',
            },

        })
    }
}
</script>

<style lang="scss" scoped>
    .swiper-container{
        .swiper-pagination{
            text-align: right;
        }
    }


</style>