import { createRouter, createWebHistory } from 'vue-router'
import rules from '@/config/routes'
import routeLocale from './locale'

const routes = []

rules.forEach((item) => {
  routes.push({
    ...item,
    path: item.path,
    meta: {
      layout: 'Default',
      ...item.meta
    }
  })
})

function isArray (context) {
  return Array.isArray(context)
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0, left: 0 })
      }, 500)
    })
  }
})

// 安装导航守卫
const installEach = (context) => {
  if (isArray(context)) {
    context.forEach((item) => {
      return router.beforeEach(item)
    })
  } else {
    if (Array.isArray(context.beforeEach)) {
      context.beforeEach.forEach((item) => {
        router.beforeEach(item)
      })
    }

    if (Array.isArray(context.afterEach)) {
      context.afterEach.forEach((item) => router.afterEach(item))
    }
  }
}

installEach(routeLocale)

export default router
