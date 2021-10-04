<template>
<swiper
  :pagination="true"
>
  <SwiperSlide v-for="(item, index) in imgs" :key="index">
    <img :src="item.pic" alt="">
  </SwiperSlide>
</swiper>
</template>

<script>
export default {
  name: 'Swiper',
}
</script>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

// 导入图片
import SwiperImg1 from '@/assets/img/swiper1.jpg'
import SwiperImg2 from '@/assets/img/swiper2.jpg'
import SwiperImg3 from '@/assets/img/swiper3.jpg'

const imgs = reactive([
  {pic: SwiperImg1},
  {pic: SwiperImg2}, 
  {pic: SwiperImg3}
])
import {getBanner} from '@/api'

onMounted(async() => {
  try {
    const {data, status} = await getBanner(2)
    if (status === 200 && data.code === 200) {
      imgs.length = 0
      imgs.push(...data.banners)
    }
  } catch (error) {
    console.error(error)
  }
})

</script>

<style lang="less">
.swiper {
  width: 7.1rem;
  height: 3rem;

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.1rem;
    }
  }

  .swiper-pagination-bullet-active {
    background-color: orangered;
  }
}


</style>