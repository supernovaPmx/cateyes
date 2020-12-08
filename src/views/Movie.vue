<template>
  <div>
    <section class="fix-head">
      <my-header :hasBack="true" />
      <my-nav-tab />
    </section>
    <!-- router-view来保存hot的内容 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MyHeader from "com/home/MyHeader";
import MyNavTab from "com/home/MyNavTab";
export default {
  components: {
    MyHeader,
    MyNavTab
  }
};
</script>
<style lang="scss" scoped>
.fix-head {
  position: fixed;
  width: 100%;
  height: 96px;
  top: 0;
  left: 0;
  z-index: 999;
}
.content {
  margin-top: 96px;
}
</style>
