<template>
    <!-- Slider main container -->
    <div ref="swiper" class="swiper"  data-swiper-autoplay="2000">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
                <img src="../assets/sample1.jpeg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../assets/sample2.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../assets/sample3.jpg" alt="">
            </div>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
    </div>
</template>
<script >
import Swiper from 'swiper';
import { Navigation, Pagination ,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {

    mounted() {
        new Swiper(this.$refs.swiper, {
            // configure Swiper to use modules
            modules: [Navigation, Pagination,Autoplay],
            loop: true,

            pagination: {
                el: '.swiper-pagination',
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 3000,
            },

            scrollbar: {
                el: '.swiper-scrollbar',
            },
            
        })
    },

};
</script>


<style scoped>
.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper {
    width: 600px;
    height: 300px;
}
</style>