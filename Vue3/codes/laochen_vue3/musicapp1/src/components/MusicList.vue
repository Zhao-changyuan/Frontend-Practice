
<template>
<div class="musicList">
  <div class="musicList-top">
    <div class="title">发现好歌单</div>
    <div class="more">查看更多</div>
  </div>

  <div class="mlist">
    <MusicListSwiperComp></MusicListSwiperComp>
  </div>
</div>
</template>

<script>
export default {
  name: 'MusicList'
}
</script>

<script setup>
import { ref, reactive } from 'vue'
import MusicListSwiperComp from './MusicListSwiperComp.vue';

</script>


<style lang="less" scoped>
.musicList {
  width: 7.5rem;
  padding: 0 0.4rem;

  .musicList-top {
    display: flex;
    justify-content: space-between;
    align-items: enter;
    height: 1rem;

    .title {
      font-size: 0.4rem;
      font-weight: 700;
    }

    .more {
      border: 1px solid #ccc;
      border-radius: 0.2rem;
      font-size: 0.24rem;
      height: 0.4rem;
      width: 1.2rem;
      text-align: center;
      line-height: 0.4rem;
    }
  }
}
</style>