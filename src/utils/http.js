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
    const code = data.code;
    const resMessage = data.message;
    if (code === 200) {
      return data;
    } else if (code === 401) {
      message.warning(resMessage);
      window.location.href = '/';
    } else {
      message.error(resMessage);
      return data;
    }
  },
  err => {
    message.error(err);
    return Promise.reject(err);
  }
);

let http = {
  post: '',
  get: ''
};

http.post = (api, data) => {
  let params = qs.stringify(data);
  return new Promise((resolve) => {
    axios.post(api, params).then((res) => {
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

export default http;