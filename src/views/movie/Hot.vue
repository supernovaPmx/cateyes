<template>
  <section class="wrapper">
    <div>
      <my-rated :ratedList="ratedList" />
      <my-movie-list :movieList="movieList" :isToBottom="isToBottom" />
    </div>
  </section>
</template>

<script>
//将MyHeader引入Home
//引入API接口
import {
  getRatedListApi,
  getMovieListApi,
  getMovieListMoreApi
} from "@/utils/api";
//引入上拉滚动条
import BetterScroll from "better-scroll";
//引入qs用于fetch的post的数据请求解析
// import qs from "qs";
import MyRated from "com/home/MyRated";
import MyMovieList from "com/home/MyMovieList";
export default {
  data() {
    return {
      ratedList: [],
      movieList: [],
      //电影总条数
      count: 0,
      //所有电影的id
      ids: [],
      //从哪个id开始
      start: 0,
      //获取的条数
      num: 5
    };
  },
  components: {
    MyRated,
    MyMovieList
  },
  mounted() {
    this.getRatedList();
    this.getMovieList();
  },
  computed: {
    isToBottom() {
      return this.start > this.count;
    }
  },
  methods: {
    //获取最受欢迎列表
    //这个方法return的时promise
    async getRatedList() {
      //直接调用api里面的方法
      const res = await getRatedListApi();
      this.ratedList = res.result;
    },
    //首页的电影列表
    async getMovieList() {
      const res = await getMovieListApi();
      this.movieList = res.result;
      this.count = res.count;
      this.ids = res.ids;
      this.start = this.movieList.length;
      //用于解决页面渲染后完成后 再执行实例化滚动条操作
      //$nextTick() 页面渲染完毕才触发的事情
      //数据请求结束后 实例化滚动条
      await this.$nextTick();
      const bs = new BetterScroll(".wrapper", {
        scrollX: false,
        scrollY: true,
        click: true,
        pullUpLoad: true
      });
      bs.on("pullingUp", async () => {
        //整理字符串
        const arr = this.ids.slice(this.start, this.start + this.num);
        //这一步是在干什么？
        const str = arr.join();
        //请求数据
        const res = await getMovieListMoreApi({
          ids: str
        });
        //合并数据,将新的数据和之前的数据合并
        this.movieList = this.movieList.concat(res.result);
        //只要刷新数据 那么长度和start得重新计算
        this.start += this.num;
        //需要重新计算better-scroll的高度 用refresh()方法
        //数据更新后才触发
        await this.$nextTick();
        bs.refresh();
        //表示这次下拉结束了，可以进行下一次的下拉了
        //刷新的长度不能超过countd的总长度 若两者相等 ,表示已经到底不能再下拉了
        if (this.start <= this.count) {
          bs.finishPullUp();
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 96px;
  left: 0;
  right: 0;
  bottom: 48px;
  overflow: hidden;
}
</style>
