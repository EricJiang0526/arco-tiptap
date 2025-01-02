import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'demo',
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/pages/demo.vue'),
  },
  {
    path: '/ai-doctor-demo',
    name: 'ai-doctor-demo',
    component: () => import('@/pages/ai-doctor-demo/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
