import Vue from "vue";
import App from "./App.vue";

//引入了路由和vuex
// import router from "./router";
// import store from "./store";

//引入reset.css文件
import "./assets/css/reset.scss";
//引用fonts中的字体图标
import "./assets/fonts/iconfont.css";

//引入amfe-flexible,用于设置跟字体大小
import "amfe-flexible";

//关闭了生产环境下的警告提示
Vue.config.productionTip = false;

//将App.vue 挂载到index.html的静态页面上
new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount("#app");
