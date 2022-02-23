import {api ,instance} from "./service.js";   

export function haveImg(data) {
    return instance({
      url: '/PersonJoin/ActivityQuery',
      method: 'post',
    //   data: forms,
      params:data
    })
  }//图获取
export function upFile(data,forms) {
    return instance({
      url: 'fileutil/UpLoadFile',
      method: 'post',
      data: forms,
      params:{userid: 2}
    })
  }//文件上传
  //二方法
//可以根据封装的方法进行使用，可以使用二方法，则可以对应每个单独的接口方法名，在组件中导入使用
//或者通过一方法，在封装时指定对应对应的请求方法，然后挂载到main。js的vue原型上，那么在组件使用时则不必每个单独导入，可以只通过原型对象使用

