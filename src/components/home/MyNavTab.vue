<template>
  <nav>
    <address>杭州</address>
    <ul>
      <li
        v-for="(item, index) in navList"
        :key="index"
        @click="handleClick(index)"
        :class="{ active: activeIndex === index }"
      >
        {{ item }}
      </li>
    </ul>
    <span class="iconfont icon-fangdajing"></span>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navList: ["热映", "影院", "待映", "电影"],
      activeIndex: 0
    };
  },
  methods: {
    handleClick(i) {
      this.activeIndex = i;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/var.scss";

nav {
  background: #fff;
  height: 46px;
  border-bottom: 1px solid $border-color;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;

  ul {
    display: flex;
    height: 100%;
    li {
      padding: 0 10px;
      height: 100%;
      width: 66px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      font-weight: 900;
    }
    .active {
      color: $active-color;
      font-size: 16px;

      &::after {
        content: "";
        position: absolute;
        width: 25px;
        height: 2px;
        background: $theme-color;
        bottom: 2px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
