<template>
<div class="topNav">
  <div class="topLeft">
    <SvgIcon name="icon-31liebiao"></SvgIcon>
  </div>
  <div class="topCenter">
    <span class="navBtn">我的</span>
    <span class="navBtn active">发现</span>
    <span class="navBtn">云存</span>
    <span class="navBtn">视频</span>
  </div>
  <div class="topRight">
    <SvgIcon class="search" name="icon-sousuo"></SvgIcon>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import SvgIcon from './SvgIcon.vue'

export default defineComponent({
  name: 'TopNav',
  components: {SvgIcon},
  setup() {

    return {

    }
  }
})
</script>
<style lang="less" scoped>
.topNav {
  width: 7.5rem;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;

  .svg-icon {
    width: 0.5rem;
    height: 0.5rem;
  }

  .search {
    width: 0.45rem;
    height: 0.45rem;
  }

  .topCenter {
    width: 4.5rem;
    display: flex;
    justify-content: space-around;

    .active {
      font-weight: 700;
    }
  }
}
</style>