import { createRouter, createWebHistory } from 'vue-router'

const home = () => import('@/Page/HomePage.vue')
const topics = () => import('@/Page/TopicsPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/topics/:title',
      name: 'topics',
      component: topics
    }
  ]
})

export default router
