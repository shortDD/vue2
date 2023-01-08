import axios from "axios";
import Vue from "vue";
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

http.interceptors.request.use(
  (config) => {
    config.headers.Authorization = localStorage.getItem("token");
    return config;
  },
  (error) => {
    return Promise.reject(new Error(error));
  }
);

http.interceptors.response.use(
  (response) => {
    const { data, meta } = response.data;
    if (meta.status === 200 || meta.status === 201) {
      return data;
    } else {
      Vue.prototype.$message.error(meta.msg);
      return Promise.reject(new Error(meta.msg));
    }
  },
  (error) => {
    return Promise.reject(new Error(error.response.data));
  }
);
export default http;
