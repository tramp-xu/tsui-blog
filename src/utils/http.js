import axios from 'axios';
import qs from 'qs'; // 用来将payload方式转成formdata
import {message} from 'antd';

// axios.defaults.baseURL = 'http://localhost:8888';
// 配置允许跨域携带cookie
// axios.defaults.withCredentials = true

// 配置超时时间
axios.defaults.timeout = 100000;

// axios.interceptors.request.use(
//   // config => {
//   //   if (store.state.token) {
//   //     config.headers.Authorization = `token ${store.state.token}`;
//   //   }
//   //   return config
//   // },
//   error => {
//     message.error(error)
//     return Promise.reject(error)
//   }
// )
let token = localStorage.getItem('token');

axios.interceptors.request.use(config => {
  config.headers.authorization = 'Bearer ' + token;
  return config;
}, error => {
  return Promise.reject(error);
});


axios.interceptors.response.use(
  response => {
    const data = response.data;
    const status = data.status;
    const code = data.code;
    const resMessage = data.message;
    if (code === 200) {
      if (status === 1) {
        message.success(resMessage);
      }
      return data;
    } else {
      message.error(resMessage);
      return data;
    }
  },
  err => {
    let error = {};
    if (err && err.response) {
      const {status, statusText} = err.response;
      switch (status) {
      case 400:
        message.error(`请求错误：${status}`);
        break;
      case 401:
        message.error(`未授权，或登录过期：${status}`);
        setTimeout(() => {
          window.location.href = '/';
        }, 200);
        break;
      case 408:
        message.error(`请求超时：${status}`);
        break;
      case 500:
        message.error(`服务器内部错误：${status}`);
        break;
      case 502:
        message.error(`网关错误：${status}`);
        break;
      case 503:
        message.error(`服务不可用：${status}`);
        break;
      case 504:
        message.error(`网关超时：${status}`);
        break;
      default:
        message.error(`其他错误：${statusText || ''}, 错误代码：${status}`);
        break;
      }
      error = {
        code: status,
        statusText: statusText
      };
    }
    // if (err.status)
    return error;
  }
);

let http = {
  post: '',
  get: ''
};

http.urlencodedPost = (api, data) => {
  let fd = null;
  for (const [key, value] of Object.entries(data)) {
    if (!fd) {
      fd = `${key}=${value}`;
    } else {
      fd = `${fd}&${key}=${value}`;
    }
  }
  console.log(fd);
  let config = {
    headers: {
      ContentType: 'application/x-www-form-urlencoded'
    }
  };
  return new Promise((resolve) => {
    axios.post(api, fd, config).then((res) => {
      resolve(res);
    });
  });
};

http.get = (api, data) => {
  let params = {...data};
  return new Promise((resolve) => {
    axios.get(api, {params}).then((res) => {
      resolve(res);
    });
  });
};

http.post = (api, data) => {
  // let params = qs.stringify(data);
  return new Promise((resolve) => {
    axios.post(api, data).then((res) => {
      resolve(res);
    });
  });
};

export default http;