<template>
  <div class="movie-list">
    <ul>
      <my-movie-item
        v-for="(item, index) in movieList"
        :key="index"
        :item="item"
      ></my-movie-item>
    </ul>
    <p v-if="isToBottom">别拉了！到底了~~~~</p>
  </div>
</template>

<script>
import MyMovieItem from "com/home/MyMovieItem";
export default {
  props: {
    movieList: Array,
    isToBottom: Boolean
  },
  data() {
    return {};
  },
  components: {
    MyMovieItem
  }
};
</script>
<style lang="scss" scoped>
.movie-list {
  background: #fff;
  margin-top: 10px;
}
p {
  color: red;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
