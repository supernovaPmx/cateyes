//接口 存放路径
//封装接口
import http from "./http";

//向外面暴露了一些接口
///首页最受欢迎列表接口
//将接口设置为固定，参数设置为传入的数据
export const getRatedListApi = params => {
  //调用http的get方法
  return http.get("rated/list", params);
};
//首页的电影列表
export const getMovieListApi = params => {
  //调用http的get方法
  return http.get("movies/list", params);
};
//首页加载更多
export const getMovieListMoreApi = params => {
  //调用http的get方法
  return http.post("movies/more", params);
};
