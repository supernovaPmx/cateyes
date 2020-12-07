<template>
  <div>
    <section class="fix-head">
      <my-header :hasBack="true" />
      <my-nav-tab />
    </section>
    <section class="wrapper">
      <div>
        <my-rated :ratedList="ratedList" />
        <my-movie-list :movieList="movieList" />
      </div>
    </section>
    <my-footer />
  </div>
</template>

<script>
//将MyHeader引入Home
//引入API接口
import { getRatedListApi, getMovieListApi } from "@/utils/api";
//引入上拉滚动条
import BetterScroll from "better-scroll";
import MyHeader from "com/home/MyHeader";
import MyNavTab from "com/home/MyNavTab";
import MyRated from "com/home/MyRated";
import MyMovieList from "com/home/MyMovieList";
import MyFooter from "com/home/MyFooter";

export default {
  data() {
    return {
      ratedList: [],
      movieList: []
    };
  },
  components: {
    MyHeader,
    MyNavTab,
    MyRated,
    MyMovieList,
    MyFooter
  },
  mounted() {
    this.getRatedList();
    this.getMovieList();
  },
  methods: {
    //获取最受欢迎列表
    //这个方法return的时promise
    async getRatedList() {
      //直接调用api里面的方法
      const res = await getRatedListApi();
      if (res.status === 0) {
        this.ratedList = res.result;
      }
    },
    //首页的电影列表
    async getMovieList() {
      const res = await getMovieListApi();
      if (res.status === 0) {
        this.movieList = res.result;
        //用于解决页面渲染后完成后 再执行实例化滚动条操作
        //$nextTick() 页面渲染完毕才触发的事情
        this.$nextTick(() => {
          //数据请求结束后 实例化滚动条
          new BetterScroll(".wrapper", {
            scrollX: false,
            scrollY: true,
            click: true
          });
        });
      }
    }
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
.wrapper {
  position: absolute;
  top: 96px;
  left: 0;
  right: 0;
  bottom: 48px;
  overflow: hidden;
}
</style>
