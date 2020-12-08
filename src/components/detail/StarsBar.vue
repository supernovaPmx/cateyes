<template>
  <div class="stars-percent-bar">
    <div class="left">
      <img
        src="https://s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/star-not-graded.png"
        alt=""
        v-for="(item, index) in startsCount"
        :key="index"
      />
    </div>
    <div class="center">
      <div class="bg">
        <div class="progress-bar" :style="{ width: proportion + '%' }"></div>
      </div>
    </div>
    <div class="right">
      {{ proportion + "%" }}
    </div>
  </div>
</template>

<script>
export default {
  //接收父组件的参数 星星的数量
  props: ["startsCount", "proportion"],
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.stars-percent-bar {
  width: 180px;
  height: 18px;
  margin: 5px 0;
  display: flex;

  .left {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    img {
      width: 8px;
      height: 8px;
      margin: 0 2px;
    }
  }

  .center {
    flex: 5;

    .bg {
      width: 100%;
      height: 12px;
      margin: 3px;
      background: rgba(255, 255, 255, 0.05);
      position: relative;
      .progress-bar {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background: orange;
      }
    }
  }

  .right {
    flex: 2;
  }
}
</style>
