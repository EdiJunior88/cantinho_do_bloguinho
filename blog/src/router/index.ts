import { createRouter, createWebHistory } from 'vue-router'

const home = () => import('@/page/HomePage.vue')

// Mês Novembro - 2023
const News11_23_01 = () => import('@/news/2023/11_November/NewsPage01/NewsPage01.vue')
const News11_23_02 = () => import('@/news/2023/11_November/NewsPage02/NewsPage02.vue')
const News11_23_03 = () => import('@/news/2023/11_November/NewsPage03/NewsPage03.vue')
const News11_23_04 = () => import('@/news/2023/11_November/NewsPage04/NewsPage04.vue')
// Mês Dezembro - 2023
const News12_23_01 = () => import('@/news/2023/12_December/NewsPage01/NewsPage01.vue')
// Mês Fevereiro - 2024
const News02_24_01 = () => import('@/news/2024/02_February/NewsPage01/NewsPage01.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: home },
    /* Mês Novembro - 2023 */
    { path: '/news11_23_01/:title', name: 'news1', component: News11_23_01 },
    { path: '/news11_23_02/:title', name: 'news2', component: News11_23_02 },
    { path: '/news11_23_03/:title', name: 'news3', component: News11_23_03 },
    { path: '/news11_23_04/:title', name: 'news4', component: News11_23_04 },
    /* Mês Dezembro - 2023 */
    { path: '/news12_23_01/:title', name: 'news5', component: News12_23_01 },
    /* Mês Dezembro - 2023 */
    { path: '/News02_24_01/:title', name: 'news6', component: News02_24_01 }
  ]
})

export default router
