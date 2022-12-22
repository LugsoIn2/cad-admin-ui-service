import HomeViewVue from '@/views/HomeView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import RegisterViewVue from '@/views/RegisterView.vue'
import StartViewVue from '@/views/StartView.vue'
import ServicesViewVue from '@/views/ServicesView.vue'
import ContactViewVue from '@/views/ContactView.vue'
import CockpitViewVue from '@/views/CockpitView.vue'


import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue,
    },
    {
      path: '/start',
      name: 'start',
      component: StartViewVue,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginViewVue
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterViewVue
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesViewVue
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactViewVue
    },
    {
      path: '/cockpit',
      name: 'cockpit',
      component: CockpitViewVue
    },
  ]
})

export default router
