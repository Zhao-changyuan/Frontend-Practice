<template>
  <div class="home">
    <TopNav></TopNav>

    <swiper
      :slides-per-view="3"
      :space-between="50"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Home',
});
</script>

<script lang="ts" setup>
import TopNav from '@/components/TopNav.vue';
import { Swiper, SwiperSlide } from 'swiper/vue'

const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
</script>

<style lang="less" scoped>


</style>
