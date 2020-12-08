<template>
  <div
    class="detail"
    :style="{ background: detailData.backgroundColor }"
    v-if="detailData.nm"
  >
    <p class="title">猫眼电影 > {{ detailData.nm }}</p>
    <div class="content">
      <img class="content-img" :src="detailData.img | formatUrl" alt="" />
      <div class="content-right">
        <h2>{{ detailData.nm }}</h2>
        <h5>{{ detailData.enm }}</h5>
        <h5>{{ detailData.cat | formatCat }}</h5>
        <h5>{{ detailData.star | formatCat }}</h5>
        <h5>{{ detailData.pubDesc + detailData.dur + "分钟 > " }}</h5>
        <div class="buttonAll">
          <div class="button">想看</div>
          <div class="button">看过</div>
        </div>
      </div>
    </div>
    <div class="score">
      <div class="score-title">
        <span>实时口碑</span>
        <span>{{ detailData.watched }}人看过 {{ detailData.wish }}人想看</span>
      </div>
      <div class="middle">
        <div class="cont-left">
          <div class="big-num">{{ detailData.sc }}</div>
          <div class="people-score">{{ detailData.snum }}人评分</div>
        </div>
        <div class="cont-right">
          <stars-bar
            v-for="(item, index) in detailData.distributions"
            :key="index"
            :startsCount="3 - index"
            :proportion="item.proportion"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//引入详情数据的接口
import { getMovieDetailApi } from "../utils/api";
//引入评分条组件
import StarsBar from "../components/detail/StarsBar";
export default {
  data() {
    return {
      id: "",
      detailData: {}
    };
  },
  components: {
    StarsBar
  },
  //接收id
  created() {
    //$route 为当前页面的数据
    //这里的movieId和index中的movieId需要相同
    this.id = this.$route.params.movieId;
  },
  //过滤器写在mounted的前面
  filters: {
    formatUrl(val) {
      return val.split("/w.h").join("");
    },
    formatCat(val) {
      return val.split(",").join(" / ");
    }
  },
  //拿到iid需要请求数据
  mounted() {
    this.getDetailData();
  },
  //定义一个方法
  methods: {
    async getDetailData() {
      //请求数据
      const res = await getMovieDetailApi({ id: this.id });
      this.detailData = res.result;
    }
  }
};
</script>
<style lang="scss" scoped>
.detail {
  padding: 0 15px;
  overflow: hidden;
  color: #fff;
  font-size: 12px;
  .title {
    font-size: 14px;
    margin: 15px 0;
  }
  .content {
    width: 100%;
    height: 138px;
    display: flex;
    justify-content: space-between;
    .content-img {
      width: 100px;
      height: 100%;
    }
    .content-right {
      width: 230px;
      height: 100%;

      h2 {
        font-size: 20px;
      }

      h5 {
        font-size: 12px;
        margin: 7px 0;
      }
      .buttonAll {
        height: 30px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .button {
          width: 45%;
          height: 100%;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

  .score {
    width: 100%;
    margin-top: 15px;
    padding: 10px 12px;
    background: rgba(255, 255, 255, 0.2);
    .score-title {
      height: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .middle {
      height: 128px;
      padding: 20px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .cont-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .big-num {
          font-size: 35px;
          color: #ffb400;
        }
        .people-score {
          font-size: 12px;
          color: #fff;
          opacity: 0.4;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
