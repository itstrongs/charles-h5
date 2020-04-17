import axios from 'axios';

// 这里自己获取token
// let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxIn0.Y4nHCEunF6YCdPxRCftfhnB7uetWwaih9ZAiQumJ4SQ'

// config 配置
axios.defaults.timeout = 60 * 1000;
axios.defaults.baseURL = 'http://192.168.18.137:8090';

// http request 拦截器
axios.interceptors.request.use (
    config => {
        if (localStorage.getItem('Authorization')) {
            config.headers.Authorization = localStorage.getItem('Authorization');
        }
        return config;
        // if (token) {
        //     // 判断是否存在token，如果存在的话，则每个http header都加上token
        //     config.headers.Authorization = `${token}`; // 根据实际情况自行修改
        // }
    },
    err => {
        return Promise.reject(err);
    }
);
export default axios;