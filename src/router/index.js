import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '@/layouts/AdminLayout.vue'
import TablesView from '@/views/TablesView.vue'
import MetricsView from '@/views/MetricsView.vue'
import LoginView from '@/views/LoginView.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ErrorView from '@/views/ErrorView.vue'
import DashboardView from '@/views/DashboardView.vue'
import TestView from '@/views/TestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      component: AdminLayout,
      children: [
        { path: '/dashboard', name: 'Dashboard', component: DashboardView },
        { path: '/tables', name: 'Tables', component: TablesView },
        { path: '/metrics', name: 'New', component: MetricsView },
        { path: '/profile', name: 'Profile', component: DashboardView },
        { path: '/sign-up', name: 'Sign-up', component: DashboardView },
        { path: '/404', name: '404', component: ErrorView },
        { path: '/test', name: 'test', component: TestView },
      ]
    },
    {
      path: '/auth',
      redirect: '/login',
      component: DefaultLayout,
      children: [
        { path: '/login', name: 'Login', component: LoginView }]
    }
  ]
})

export default router
