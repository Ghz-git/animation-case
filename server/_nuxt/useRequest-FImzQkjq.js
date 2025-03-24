import { F as useUserToken, G as ElMessage, H as useUserInfo, n as nuxtTo } from "../server.mjs";
import "dayjs";
import { v as vLoading, L as Loading } from "./directive-o9p6vhNm.js";
import "vue";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { u as useAppConfig } from "./config-81Rc5edc.js";
const ElLoading = {
  install(app) {
    app.directive("loading", vLoading);
    app.config.globalProperties.$loading = Loading;
  },
  directive: vLoading,
  service: Loading
};
const useRequest = async (url, options) => {
  const userToken = useUserToken();
  const headers = {
    ["X-Mc-Token"]: userToken.token
  };
  const config = useAppConfig();
  const defaultOptions = {
    baseURL: config.public.baseUrl,
    headers,
    watch: false,
    //响应拦截
    onResponse({ response }) {
      if (response.ok) {
        const res = response._data;
        if (res.code === "200" || res.code === "0") {
          if (options.msg) {
            ElMessage.success(res.msg);
          }
        } else if (res.code === "401") {
          ElMessage.warning("Login Timeout, Please Login Again!");
          useUserToken().setToken("");
          useUserInfo().setInfo({});
          nuxtTo("/login");
          return Promise.reject(res.msg);
        } else {
          ElMessage.warning(res.msg);
          return Promise.reject(res.msg);
        }
      } else {
        ElMessage({
          type: "error",
          message: response.statusText,
          grouping: true
        });
        options.loading ? loadingInstance.close() : "";
        return Promise.reject(response.statusText);
      }
    },
    // 请求错误
    onRequestError({ error }) {
      ElMessage({
        type: "error",
        message: error == null ? void 0 : error.toString(),
        grouping: true
      });
      return Promise.reject(error);
    }
  };
  const newOptions = { ...defaultOptions, ...options };
  const loadingInstance = options.loading ? ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
    customClass: "loading"
  }) : "";
  return $fetch(url, newOptions).then((res) => {
    if (loadingInstance) {
      loadingInstance.close();
    }
    return Promise.resolve(res);
  }).catch((error) => {
    if (loadingInstance) {
      loadingInstance.close();
    }
    return Promise.reject(error);
  });
};
const get = (url, data = {}, data2 = {}, options) => {
  const params = { ...data, ...data2 };
  let paramsArray = [];
  Object.keys(params).forEach((key) => paramsArray.push(key + "=" + params[key]));
  if (url.search(/\?/) === -1) {
    url += "?" + paramsArray.join("&");
  } else {
    url += "&" + paramsArray.join("&");
  }
  return useRequest(url, {
    method: "GET",
    ...options
  });
};
const post = (url, data = {}, data2 = {}, options = {}) => {
  return useRequest(url, {
    method: "POST",
    body: { ...data, ...data2 },
    ...options
  });
};
export {
  ElLoading as E,
  get as g,
  post as p
};
//# sourceMappingURL=useRequest-FImzQkjq.js.map
