<template>
<div class="iconList">
  <div class="iconItem">
    <SvgIcon name="icon-aireczhinengtuijian"></SvgIcon>
    <span>每日推荐</span>
  </div>
  <div class="iconItem">
    <SvgIcon name="icon-FM_weixuanze"></SvgIcon>
    <span>私人FM</span>
  </div>
  <div class="iconItem">
    <SvgIcon name="icon-gedan"></SvgIcon>
    <span>歌单</span>
  </div>
  <div class="iconItem">
    <SvgIcon name="icon-paihangbang"></SvgIcon>
    <span>排行榜</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'IconList'
}
</script>

<script setup>
import { ref, reactive } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'


</script>

<style lang="less" scoped>
.iconList {
  display: flex;
  justify-content: space-between;
  padding: 0.4rem;

  .iconItem {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 0.22rem;
    }
  }

  .svg-icon {
    width: 1rem;
    height: 1rem;
  }

}
</style>
