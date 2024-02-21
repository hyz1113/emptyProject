module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    historyApiFallback: true,
    allowedHosts: 'all',
    proxy: {
      '/api': {
        // 由于我们上面在请求头里有添加 gatwat 所以能拦截
        target: 'https://au1.app-alpha.com:18008', // 接口域名
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
    // https: true,
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/css/main.scss";
        `
      }
    }
  }
}
