import { createRouter, createWebHistory } from 'vue-router'

const home = () => import('@/page/HomePage.vue')

// Mês Novembro - 2023
const News11_01 = () => import('@/news/2023/11_November/NewsPage01/NewsPage01.vue')
const News11_02 = () => import('@/news/2023/11_November/NewsPage02/NewsPage02.vue')
const News11_03 = () => import('@/news/2023/11_November/NewsPage03/NewsPage03.vue')
const News11_04 = () => import('@/news/2023/11_November/NewsPage04/NewsPage04.vue')
// Mês Dezembro - 2023
const News12_01 = () => import('@/news/2023/12_December/NewsPage01/NewsPage01.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: home },
    /* Mês Novembro - 2023 */
    { path: '/news11_01/:title', name: 'news1', component: News11_01 },
    { path: '/news11_02/:title', name: 'news2', component: News11_02 },
    { path: '/news11_03/:title', name: 'news3', component: News11_03 },
    { path: '/news11_04/:title', name: 'news4', component: News11_04 },
    /* Mês Dezembro - 2023 */
    { path: '/news12_01/:title', name: 'news5', component: News12_01 }
  ]
})

export default router
