import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/MainLayout.vue'),
      meta: { protected: true, transition: 'slideX' },
      children: [
        {
          path: 'home',
          alias: '',
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: 'quem-somos',
          component: () => import('@/views/QuemSomosView.vue'),
        },
        {
          path: 'servicos',
          component: () => import('@/views/ServicosView.vue'),
        },
        {
          path: 'servicos/nossos-planos',
          component: () => import('@/components/servicos/NossosPlanos.vue'),
        },
        {
          path: 'noticias',
          component: () => import('@/views/NoticiasView.vue'),
        },
        {
          path: 'fale-conosco',
          component: () => import('@/views/FaleConoscoView.vue'),
        },
      ],
    },
  ],
})

export default router
