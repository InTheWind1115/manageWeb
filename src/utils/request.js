import axios from 'axios';
axios.defaults.baseURL = "http://localhost:9090/njtech/";
export const myRequest = options => {
  if (options.method === 'get') {
    return axios({
      url: options.url,
      method: 'get',
      headers: options.headers || {},
      //params用于get请求时
      params: options.method === 'get'? options.params : {},
      //data用于post请求时
      data: options.method === 'post'? options.data : {},
      // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
      responseType: options.responseType || 'json',
      // 跨域请求时是否携带凭证
      // 在跨域请求时带上cookie，否则后端每次收到的session都不一样
      withCredentials: true,
    })
  }
  return axios({
    url: options.url,
    method: options.method || 'get',
    headers: options.headers || {},
    //params用于get请求时
    params: options.method === 'get'? options.params : {},
    //data用于post请求时
    data: options.method === 'post'? options.data : {},
    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: options.responseType || 'json',
    // 跨域请求时是否携带凭证
    // 在跨域请求时带上cookie，否则后端每次收到的session都不一样
    withCredentials: true,
    // `transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    // transformRequest: [function (data) {
    //   let str = '';
    //   for (let key in data) {
    //     str = str + '&' +  key + '=' + data[key]
    //   }
    //   console.log(str.substring(1, str.length));
    //   return str.substring(1, str.length);
    // }],
  })
}