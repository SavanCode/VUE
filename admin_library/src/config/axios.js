import axios from 'axios' 
import router from '@/router'
import store from '@/store';
import {failMessage} from '@/util/util'
import {getStore} from "@/util/store";

//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;

//返回其他状态码
axios.defaults.validateStatus = function (status) {
    return status >= 200 && status <= 500;
};

//HTTP Request拦截
axios.interceptors.request.use(config => {
    console.log(' axios.interceptors request',config) 
    config.headers['Content-Type'] = 'application/json';
    config.headers['X-Auth-User'] = getStore({name: 'user'}) || '';
    config.headers['X-Auth-Token'] = getStore({name: 'token'}) || '';
    return config;
}, error => {
    console.error('Request interceptors:', error);
    return Promise.reject(error)
});

//HTTP Response拦截
axios.interceptors.response.use(res => {
    console.log(' axios.interceptors response',res)
    const ok = res.data.ok || false, status = res.status || 200, message = res.data.message || 'Internal Server Error!';
    //console.log(ok,status,message);
    if (!ok) {
        if (status === 401) {
            store.dispatch('ClearToken').then(() => router.push({path: '/login'}));
        } else {
            failMessage(message);
        }
        return Promise.reject(new Error(message)); 
    }

    return res.data;
}, error => {
    console.error('Response interceptors:', error);
    return Promise.reject(error);
});

export default axios
