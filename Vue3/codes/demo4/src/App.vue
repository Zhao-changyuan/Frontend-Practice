<template>
  <div id="nav">
    <router-link class="bg" active-class="active" to="/">首页</router-link> | 
    <router-link class="bg" to="/about">关于我们</router-link> | 
    <router-link class="bg" to="/user">个人中心</router-link> |
    <router-link to="/about" custom v-slot="{ navigate }">
      <button @click="navigate" @keypress.enter="navigate" role="link">About Us</button>
    </router-link> |
    <button :class="{active: $route.path === '/user'}" @click="$router.push('/user')">个人中心</button>
  </div>

  <hr>
  <router-view></router-view>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  .bg {
    background-color: palegreen;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }

    &.active {
      color: red;
    }
  }
}
</style>
