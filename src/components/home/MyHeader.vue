<template>
  <header>
    <!-- 使用v-if进行判断是否要显示这个组件 -->
    <span class="iconfont icon-fanhui2" v-if="hasBack"></span>
    <h3>猫眼电影</h3>
    <span class="iconfont icon-mulu"></span>
  </header>
</template>

<script>
export default {
  //接收父组件传进来的值
  props: {
    hasBack: Boolean
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
//引入var.scss
@import "../../assets/css/var.scss";
header {
  width: 100%;
  height: 50px;
  background: $theme-color;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  h3 {
    font-size: 18px;
    color: #fff;
  }

  .icon-mulu {
    color: #fff;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }

  .icon-fanhui2 {
    color: #fff;
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
