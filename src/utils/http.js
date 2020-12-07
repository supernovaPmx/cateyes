//封装请求
const prefix = "http://pudge.wang:3080/api/";
const http = {
  //get函数需要接收两个参数
  get(url, params) {
    //先判断是否传入数据
    if (params) {
      let arr = Object.keys(params);
      url += "?";
      arr = arr.map(item => {
        return item + "=" + params[item];
      });
      url += arr.join("&");
    }
    //fetch请求数据
    return fetch(prefix + url).then(response => response.json());
  },
  post() {}
};

//将方法暴露出去
export default http;
