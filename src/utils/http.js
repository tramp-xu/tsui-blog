import axios from 'axios';
import qs from 'qs';

// axios.defauls.baseURL = '/';
// 配置允许跨域携带cookie
// axios.defaults.withCredentials = true

// 配置超时时间
axios.defaults.timeout = 100000;

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
  let params = qs.stringify(data);
  return new Promise((resolve) => {
    axios.get(api, params).then((res) => {
      resolve(res);
    });
  });
};

export default http;