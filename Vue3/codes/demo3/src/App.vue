<template>
  <section class="conn">
    <header class="header">
      <MyHeader></MyHeader>
    </header>
    <div class="main">
      <div class="content">
        <MyMain msg="this is app msg;" :title="title" />
      </div>
      <div class="sidebar">
        <MySidebar></MySidebar>
      </div>
    </div>
    <footer class="footer">footer</footer>
  </section>
</template>

<script>
export default { name: 'App' }
</script>
<script setup>
import { ref, reactive } from 'vue'
import MyHeader from './components/MyHeader.vue';
import MyMain from './components/MyMain.vue';
import MySidebar from './components/MySidebar.vue';

const title = ref('app title')

</script>
<style lang="scss" scoped>
$width: 600px;
$color1: #ccc;
$color2: #888;

html,body {
  margin: 0;
  padding: 0;
}

.conn {
  width: $width;
  background: $color1;
  margin: 0 auto;
}

.header {
  width: $width;
  height: 80px;
  background-color: $color2;
}

.main {
  display: flex;
  height: 300px;
  background-color: yellow;

  .content {
    flex: 1 1 auto;
    background-color: skyblue;
  }

  .sidebar {
    width: 30%;
    background-color: palegreen;
  }
}

.footer {
  height: 100px;
  background-color: green;
}
</style>