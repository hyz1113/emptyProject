
const routes = [
  {
    path: '/',
    component: () => import("@/views/support/register/entry.vue"),
    meta: {
      layout: 'Default',
      name: '首页',
    },
  },
  {
    path: '/home',
    component: () => import("@/views/support/register/register.vue"),
    meta: {
      layout: 'Default',
      name: '首页',
    },
  },
]
export default routes;
