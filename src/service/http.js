import axios from 'axios';
import dayjs from 'dayjs';
// 先简单获取下语言
const getLang = () => {
  let lang = 'en-us';
  return `${lang}`;
};
// 获取本地时区
const utcOffset = () => String(dayjs().utcOffset() / 60);

// 取消重复请求
const pending = [];
// const CancelToken = axios.CancelToken
// 移除重复请求
const removePending = (config) => {
  for (const key in pending) {
    const item = +key;
    const list = pending[key];
    // 当前请求在数组中存在时执行函数体
    if (
      list.url === config.url &&
      list.method === config.method &&
      JSON.stringify(list.params) === JSON.stringify(config.params) &&
      JSON.stringify(list.data) === JSON.stringify(config.data)
    ) {
      // 执行取消操作
      list.cancel('操作太频繁，请稍后再试');
      // 从数组中移除记录
      pending.splice(item, 1);
    }
  }
};

/* 实例化请求配置 */
const instance = axios.create({
  headers: {
    // php 的 post 传输请求头一定要这个 不然报错 接收不到值
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin-Type': '*',
    'Accept-Language': getLang() // TODO 根据当前页面语言传参数
  },
  // 请求时长
  timeout: 1000 * 5,
  // 请求的base地址 TODO:这块以后根据不同的模块调不同的api
  baseURL: process.env.VUE_APP_API_URL,
  //     ? "测试"
  //     : "正式",
  // 表示跨域请求时是否需要使用凭证
  withCredentials: false
});
/**
 * 错误处理方法
 *
 * @param {Object} err 错误对象
 * @return {Object}
 */
// const error = (err) => ({
//   success: false,
//   code: 500,
//   message: '访问出错，请稍后重试',
//   data: null,
//   trace: err.stack ? err.stack : err
// })

// 请求参数处理
axios.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line
    config.params = {
      ...config.params
    };

    // eslint-disable-next-line
    config.headers = {
      'Accept-Language': getLang(),
      'Content-Type': 'application/json',
      token: localStorage.getItem('token') || '',
      'User-Time-Zone': utcOffset(),
      ...config.headers
    };
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other = {}) => {
  // 状态码判断
  switch (status) {
    case 302:
      console.log('接口重定向了！');
      break;
    case 400:
      console.log('发出的请求有错误，服务器没有进行新建或修改数据的操作==>' + status);
      break;
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      console.log('登录过期,用户得到授权，但是访问是被禁止的==>' + status);
      break;
    case 404:
      console.log('网络请求不存在==>' + status);
      break;
    case 406:
      console.log('请求的格式不可得==>' + status);
      break;
    case 408:
      console.log(' 请求超时！');
      break;
    case 410:
      console.log('请求的资源被永久删除，且不会再得到的==>' + status);
      break;
    case 422:
      console.log('当创建一个对象时，发生一个验证错误==>' + status);
      break;
    case 500:
      console.log('服务器发生错误，请检查服务器==>' + status);
      break;
    case 502:
      console.log('网关错误==>' + status);
      break;
    case 503:
      console.log('服务不可用，服务器暂时过载或维护==>' + status);
      break;
    case 504:
      console.log('网关超时==>' + status);
      break;
    default:
      console.log('其他错误错误==>' + status);
  };
  console.log(other);
};

// 响应拦截器
axios.interceptors.response.use(
  function (config) {
    removePending(config.config);
    // 请求成功
    if (config.status === 200 || config.status === 204) {
      return Promise.resolve(config);
    } else {
      return Promise.reject(config);
    }
    // 请求失败
  },
  function (error) {
    const { response } = error;
    if (response) {
      errorHandle(response.status, response.data.message);

      // 超时重新请求
      const config = error.config;
      // 全局的请求次数,请求的间隙
      const [RETRY_COUNT, RETRY_DELAY] = [3, 1000];

      if (config && RETRY_COUNT) {
        // 设置用于跟踪重试计数的变量
        config.__retryCount = config.__retryCount || 0;
        // 检查是否已经把重试的总数用完
        if (config.__retryCount >= RETRY_COUNT) {
          return Promise.reject(response || { message: error.message });
        }
        // 增加重试计数
        config.__retryCount++;
        // 创造新的Promise来处理指数后退
        const backoff = new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, RETRY_DELAY || 1);
        });
        // instance重试请求的Promise
        return backoff.then(() => {
          return instance(config);
        });
      }

      return Promise.reject(response);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 后续增加断网情况下做的一些操作
      // store.commit("networkState", false);
    }
  }
);

export class Request {
  /**
   * get方法
   *
   * @param {string} url 路径
   * @param {Object} params 参数
   * @param headers
   */
  static get = (url, params = {}, headers = {}) => {
    return new Promise((resolve, reject) => {
      axios
        .get(url, { params })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  static post = (url, params = {}, headers = {}) => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, { ...params }, headers)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}
