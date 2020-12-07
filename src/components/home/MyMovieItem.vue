<template>
  <li class="movie-item">
    <img :src="item.img | formatUrl" alt="" />
    <div class="item-right">
      <div class="item-main">
        <h2>{{ item.nm }}</h2>
        <p class="score">{{ item.sc ? "观众评" + item.sc : "暂无评分" }}</p>
        <p class="score">主演：{{ item.star }}</p>
        <p class="score">{{ item.showInfo }}</p>
      </div>
      <div class="item-button" v-if="item.showst === 3">购票</div>
      <div class="item-button book-ticket" v-if="item.showst === 4">购票</div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {};
  },
  //filters 过滤器
  filters: {
    formatUrl(val) {
      return val.split("/w.h").join("");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/var.scss";
.movie-item {
  padding: 0 15px;
  height: 114px;
  display: flex;
  justify-content: space-between;
  img {
    width: 64px;
    height: 90px;
    margin-top: 12px;
  }

  .item-right {
    width: 270px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    .item-main {
      width: 212px;
      height: 100%;

      h2 {
        font-size: 17px;
        color: #333;
        font-weight: 700;
        margin-top: 12px;
      }

      .score {
        font-size: 12px;
        color: #777;
        margin-top: 7px;
        width: 100%;
        @include text-overflow;
      }
    }

    .item-button {
      height: 27px;
      width: 47px;
      background: #e54847;
      font-size: 12px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }
    .book-ticket {
      background: #3c9fe6;
    }
  }
}
</style>
