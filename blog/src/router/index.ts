import { createRouter, createWebHistory } from 'vue-router'

const home = () => import('@/page/HomePage.vue')
const News01 = () => import('@/news/2023/November/NewsPage01/NewsPage01.vue')
const News02 = () => import('@/news/2023/November/NewsPage02/NewsPage02.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/news/:title', name: 'news1', component: News01 },
    { path: '/news/:title', name: 'news2', component: News02 }
  ]
})

export default router
