<template>
  <footer>
    <ul>
      <router-link
        v-for="(item, index) in footerList"
        :key="index"
        :to="item.url"
        tag="li"
        active-class="active"
      >
        <span class="iconfont" :class="item.icon"></span>
        <p>{{ item.title }}</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerList: [
        {
          title: "电影",
          icon: "icon-dianying",
          url: "/movie"
        },
        {
          title: "视频",
          icon: "icon-shipin",
          url: "/video"
        },
        {
          title: "小视频",
          icon: "icon-shipin1",
          url: "/smallvideo"
        },
        {
          title: "演出",
          icon: "icon-piaoquan",
          url: "/perform"
        },
        {
          title: "我的",
          icon: "icon-dibudaohanglan-",
          url: "/mine"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/var.scss";
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 48px;
  border-top: 1px solid $border-color;
  background: #fff;
  ul {
    display: flex;
    width: 100%;
    height: 100%;

    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .iconfont {
        font-size: 20px;
      }

      p {
        font-size: 12px;
        margin-top: 5px;
      }

      &.active {
        color: $theme-color;
      }
    }
  }
}
</style>
