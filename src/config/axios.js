import axios from 'axios';

// config 配置
axios.defaults.timeout = 60 * 1000;
axios.defaults.baseURL = 'http://192.168.31.51:1781';
// axios.defaults.baseURL = 'http://129.204.231.152:1781';

// http request 拦截器
axios.interceptors.request.use (
    config => {
        if (localStorage.getItem('Authorization')) {
            config.headers.Authorization = localStorage.getItem('Authorization');
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);
export default axios;
