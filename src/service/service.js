import axios from 'axios' //引入axios
import qs from 'qs' //引入qs，用来序列化post类型的数据，否则后端无法接收到数据
// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8;application/json';
//请求默认地址
axios.defaults.baseURL = '/api';//api反向代理地址
// axios.defaults.baseURL = 'http://njsg.f3322.org:12101';

 
//创建axios实例，请求超时时间为10秒
const instance = axios.create({
 timeout: 10000,
});
 
//请求和响应拦截可以根据实际项目需求进行编写
// 请求发起前拦截
instance.interceptors.request.use((config) => {
   //  config.headers['x-access-token'] = window.localStorage.getItem('token')
   //  config.headers['keyid'] = window.localStorage.getItem('keyid')
//这里可以对接口请求头进行操作 
//请求前操作
 return config;
}, (error) => {
 // Do something with request error
 return Promise.reject(error)
})
 
// 响应拦截（请求返回后拦截）
instance.interceptors.response.use(response => {
 //请求得到响应返回结果前操作
 return response;
}, error => {
 console.log('catch', error)
 return Promise.reject(error)
})
 

export {instance}//导出
//或者单独的导出export default instance对象