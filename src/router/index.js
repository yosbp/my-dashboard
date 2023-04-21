import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '@/layouts/AdminLayout.vue'
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
        { path: '/dashboard', name: 'Dashboard', component: NewView },
        { path: '/test', name: 'Test', component: TestView },
        { path: '/new', name: 'New', component: NewView},
        { path: '/sign-in', name: 'Sign-in', component: NewView},
        { path: '/profile', name: 'Profile', component: NewView},
        { path: '/sign-up', name: 'Sign-up', component: NewView},
        { path: '/rtl', name: 'rtl', component: NewView},
      ]
    },
  ]
})

export default router
