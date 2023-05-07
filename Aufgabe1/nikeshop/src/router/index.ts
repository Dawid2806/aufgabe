import homeVue from '@/views/Home.vue'
import MenVue from '@/views/Men.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: homeVue
    },
    {
      path: '/men',
      component: MenVue
    }
  ]
})

export default router
