import axios from "axios";
import store from "./../store/reducers/index"

const url = {
  baseUrl: "https://restfulapi.dnd-group.net/api",
  login: "/login",
  majors: "/majors", //bên trái là của js bên phải là của api
  students: "/student", //bên trái là của js bên phải là của api

};

const instance = axios.create({
  baseURL: url.baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use((request) =>{
      const state = store.getState();
      if (state.auth.token){
        request.headers.Authorization =  `Bearer ${state.auth.token}`
      }
      return request;
}
);

instance.interceptors.response.use(
  (response) => response.data, // thanh cong
  (err) => { // loi
    if (err.code === "ERR_NETWORK") { // loi do nha mang
      window.location.href = "/network-error"; // quay ve trang trang network error
    } else {
      switch (err.response.status) {
        case 401:
          window.location.href = "/login";
          break;
        case 403:
          window.location.href = "/no-permission";
          break;
        default:
          break;
      }
    }
    return Promise.reject(err);
  }
);

const api = {
  url,
  instance,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
  patch: instance.patch,
};

export default api;
