import HomeViewVue from '@/views/HomeView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import RegisterViewVue from '@/views/RegisterView.vue'
import StartViewVue from '@/views/StartView.vue'
import ServicesViewVue from '@/views/ServicesView.vue'
import ContactViewVue from '@/views/ContactView.vue'
import SubscriptionViewVue from '@/views/SubscriptionView.vue'
import DashboardVueVue from '@/views/DashboardView.vue'
import ThemesViewVue from '@/views/ThemesView.vue'
import CostsViewVue from '@/views/CostsView.vue'


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
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardVueVue
    },
    {
      path: '/subscription',
      name: 'subscription',
      component: SubscriptionViewVue
    },
    {
      path: '/themes',
      name: 'themes',
      component: ThemesViewVue
    },
    {
      path: '/costs',
      name: 'costs',
      component: CostsViewVue
    },
  ]
})

export default router
