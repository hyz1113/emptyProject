import {createApp} from 'vue';
import App from './App.vue';
import {
  Button,
  Icon
} from 'vant';
import router from './router';
import { store } from './store';
import vconsole from '@/utils/vconsole';

const components = [
  Button,
  Icon
]

const app = createApp(App);

// 全局注册组件
for (const cpn of components) {
  app.component(cpn.name, cpn)
}
app.use(store);
app.use(router);
app.use(vconsole);
app.mount('#app');
