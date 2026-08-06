import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/resume',
      name: 'Resume',
      component: () => import('../views/ResumeView.vue'),
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('../views/PortfolioView.vue'),
    },
  ],
})

export default router
