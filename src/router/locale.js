/**
 * @file 路由中语言处理-导航守卫
 */
import { store } from '@/store'
const localDeal = [
  // 识别语言
  (to, from, next) => {
    const { token, lang } = to.query;
    if(token) {
      store.dispatch('saveState', {
        token,
        lang,
      }).then(r => {
        next();
      });
    }
  },
];

export default localDeal;
