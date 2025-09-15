import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SearchView from '../views/SearchView.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
