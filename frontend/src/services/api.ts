import axios from 'axios';

// 创建axios实例
const api = axios.create({
  baseURL: 'http://localhost:8000/api',  // 后端API的基础URL
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// 请求拦截器 - 添加授权令牌
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器 - 处理常见错误
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // 401错误 - 未授权，可能是令牌过期
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      // 可以在这里触发重定向到登录页面
    }
    return Promise.reject(error);
  }
);

export default api; 