import Vue from "vue";
import VueRouter from "vue-router";
//固定样式
Vue.use(VueRouter);
//定义routes
const routes = [
  // app为最大的页面入口 所以设为主页面，然后跳转到home界面里的movie界面
  {
    path: "/",
    redirect: "/movie"
  },
  {
    path: "/home",
    component: () => import("../views/Home.vue"),
    children: [
      //底部页面的切换都算是home页面的耳机效果
      {
        path: "/movie",
        component: () => import("../views/Movie.vue"),
        children: [
          //头部页面的切换为movie页面的二级效果
          {
            path: "/movie",
            redirect: "/movie/hot"
          },
          {
            path: "hot",
            component: () => import("../views/movie/Hot.vue")
          },
          {
            path: "wait",
            component: () => import("../views/movie/Wait.vue")
          },
          {
            path: "cinema",
            component: () => import("../views/movie/Cinema.vue")
          },
          {
            path: "classic",
            component: () => import("../views/movie/Classic.vue")
          }
        ]
      },
      {
        path: "/smallvideo",
        component: () => import("../views/SmallVideo.vue")
      },
      {
        path: "/perform",
        component: () => import("../views/Perform.vue")
      },
      {
        path: "/mine",
        component: () => import("../views/Mine.vue")
      },
      {
        path: "/video",
        component: () => import("../views/Video.vue")
      }
    ]
  },
  //实现home页面与404页面的切换所以两个是同一级的，404页面不出现任何效果
  {
    path: "*",
    component: () => import("../views/Not404.vue")
  }
];
//定义router
const router = new VueRouter({
  routes
});

//暴露router
export default router;
