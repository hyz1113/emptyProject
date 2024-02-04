/**
 * @file 路由中语言处理-导航守卫
 */
import { store } from '@/store'
const localDeal = [
  // 识别语言
  (to, from, next) => {
    const { token, lang, theme } = to.query;
    store.dispatch('saveState', {
      token,
      lang,
      theme
    }).then(r => {
      next();
    });
  },
];

export default localDeal;
