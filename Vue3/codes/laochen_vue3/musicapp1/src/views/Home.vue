<template>
  <div class="home">
    <TopNav></TopNav>
    <SwiperComp></SwiperComp>
    <IconList></IconList>
    <MusicList></MusicList>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Home',
});
</script>

<script setup>
import TopNav from '@/components/TopNav.vue';
import SwiperComp from '@/components/SwiperComp.vue';
import IconList from '@/components/IconList.vue';
import MusicList from '@/components/MusicList.vue';

</script>

<style lang="less" scoped>
.home {
  width: 7.5rem;
}
</style>
