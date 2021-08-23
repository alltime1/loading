import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Base',
    component: () => import('../views/Base.vue')
  },
  {
    path: '/people',
    name: 'People',
    component: () => import('../views/People.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
