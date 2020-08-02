<template>
    <div>
        <div :class="myclass">
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
    props:["mynum","myclass"],
    mounted(){
        console.log(this.myclass)
        new Swiper("."+this.myclass,{
                 slidesPerView: this.mynum,
                 spaceBetween: 30,
                 freeMode: true,
        })
    }
}
</script>

<style lang="scss" scoped>
.swiper-wrapper img{
    width: 100%;
    height: 100%;
}
</style>