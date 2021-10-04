<template>
<swiper
  :slidesPerView="3"
  :spaceBetween="10"
>
  <SwiperSlide v-for="(item, index) in list" :key="index">
    <img :src="item.picUrl" :alt="item.name">
    <div class="name">{{item.name}}</div>
    <div class="count">
      <SvgIcon name="icon-24gl-play"></SvgIcon>
      <span>{{changeValue(item.playCount)}}</span>
    </div>
  </SwiperSlide>
</swiper>
</template>

<script>
export default {
  name: 'Swiper',
}
</script>

<script setup>
import { reactive, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { getMusicLit } from '@/api'
import SvgIcon from './SvgIcon.vue'

const list = reactive([])

function changeValue(num) {
  let res = 0

  if (num >= 100000000) {
    res = (num/100000000).toFixed(2) + '亿'
  } else if (num >= 10000) {
    res = (num/10000).toFixed(2) + '万'
  }

  return res;
}

onMounted(async() => {
  try {
    const {data, status} = await getMusicLit()
    if (status === 200 && data.code === 200) {
      list.length = 0
      

      list.push(...data.result)
      console.log(data)
    }
  } catch (error) {
    console.error(error)
  }
})

</script>

<style lang="less" scoped>
.swiper {
  width: 100%;
  height: 2.9rem;

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 0.1rem;
    }

    .name {
      margin-top: 0.1rem;
      height: 0.6rem;
      font-size: 0.18rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .count {
      position: absolute;
      right: 0.05rem;
      top: 0.1rem;
      height: 0.34rem;
      line-height: 0.34rem;
      font-size: 0.12rem;
      color: #FFF;
      background-color: rgba(204, 204, 204, .4);
      padding: 0 0.1rem;
      border-radius: 0.4rem;

      .svg-icon {
        vertical-align: middle;
        fill: #FFF;
      }
    }
  }

  .swiper-pagination-bullet-active {
    background-color: orangered;
  }
}


</style>