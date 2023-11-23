import { createRouter, createWebHistory } from 'vue-router'

const home = () => import('@/page/HomePage.vue')
const News01 = () => import('@/news/2023/November/NewsPage01/NewsPage01.vue')
const News02 = () => import('@/news/2023/November/NewsPage02/NewsPage02.vue')
const News03 = () => import('@/news/2023/November/NewsPage03/NewsPage03.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/news01/:title', name: 'news1', component: News01 },
    { path: '/news02/:title', name: 'news2', component: News02 },
    { path: '/news03/:title', name: 'news3', component: News03 }
  ]
})

export default router
