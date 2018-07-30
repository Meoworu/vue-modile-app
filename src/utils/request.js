
import axios from 'axios'
import { getToken,setToken } from "../utils/auth"
import router from '../router/index'
const instance = axios.create({
  headers: {'Content-Type': 'application/json;charset=UTF-8'},
  validateStatus: function (status) {
    return status >= 200 && status < 500; // 默认的
  },
});

instance.interceptors.request.use(
  config => {
    if (getToken()) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
     config.headers['hyt-token'] = getToken();
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
instance.interceptors.response.use(
  response => {
    if(response){
      switch (response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          this.$Message.warning("token已失效，请重新登录！");
          router.push({path:"/login"})
      }
      if(response.headers['hyt-token']){
        setToken(response.headers['hyt-token'])
      }
    }
    return response;
  },
  error => {
    if (error.response) {
      console.log(error.response)
    }
    return Promise.reject(error)   // 返回接口返回的错误信息
  });



/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,headers = {},params={}){
  return new Promise((resolve,reject) => {
    instance.get(url,{
      params:params,
      headers:headers
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {},headers = {}){
  return new Promise((resolve,reject) => {
    this.$Loading.start();
    instance.post(url,data,{
      headers:headers
    })
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {},headers = {}){
  return new Promise((resolve,reject) => {
    instance.patch(url,data,{
      headers:headers
    })
      .then(response => {
        resolve(response);
      },err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {},headers = {},){
  return new Promise((resolve,reject) => {
    instance.put(url,data,{
    headers:headers
    })
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function leave(url,data = {},headers){
  return new Promise((resolve,reject) => {
    instance.delete(url,{
      data:data,
      headers:headers
    })
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}
