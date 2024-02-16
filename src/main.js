import { createApp } from 'vue'
import App from './App.vue'
// 1. 引入Vant 组件
import { Button, Icon } from 'vant'
// 2. 引入组件样式
import 'vant/lib/index.css'

import router from './router'
import { store } from './store'
import vconsole from '@/utils/vconsole'
import "core-js/stable";
import "regenerator-runtime/runtime";

// 全局注册组件
const components = [Button, Icon]

const app = createApp(App)

// 全局注册组件
for (const cpn of components) {
  app.component(cpn.name, cpn)
}
app.use(store)
app.use(router)
app.use(vconsole)
app.mount('#app')
