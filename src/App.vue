<template>
  <div id="app">
    <!-- 存在底部tab的页面 -->
    <!-- 实现home和404的切换 -->
    <!-- <Home /> -->
    <!-- 没有底部tab的页面 -->
    <!-- router-view显示的是第一层的内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f5f5f5;
  color: #777;
}
</style>
