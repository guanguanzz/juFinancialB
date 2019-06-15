import axios from 'axios'
import { Message } from 'element-ui'


const service = axios.create();

// 请求拦截器 
service.interceptors.request.use(
    // config 配置
    config => {
      return config
    },
    error => {
      // 处理错误的请求
      console.log(error) 
      Promise.reject(error)
    }
  )
  
  // 响应拦截器
  service.interceptors.response.use(
    response => {
        console.log(response);
         return  response
    },
    error => {
      console.log('err' + error)
      Message({
        message: error.message,
        type: 'error',
        duration: 3 * 1000
      })
      return Promise.reject(error)
    }
  )
  
  export default service


