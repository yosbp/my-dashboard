import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '@/layouts/AdminLayout.vue'
import DashboardView from '@/views/DashboardView.vue'
import TestView from '@/views/TestView.vue'
import NewView from '@/views/NewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      component: AdminLayout,
      children: [
        { path: '/dashboard', name: 'Dashboard', component: DashboardView },
        { path: '/test', name: 'Dashboard', component: TestView },
        { path: '/new', name: 'New', component: NewView}
      ]
    },
  ]
})

export default router
