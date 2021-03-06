import axios from "axios";

export default function request(config) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/w6/",
    timeout: 5000
  });

  // 请求拦截器
  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {}
  );

  // 响应拦截器
  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {}
  );

  return instance(config);
}
