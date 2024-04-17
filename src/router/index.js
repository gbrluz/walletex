import { createWebHistory, createRouter } from 'vue-router'
import routes from './router'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const isAuthenticated = () => {
  return !!localStorage.getItem('intranet-token')
}

const closeRoute = ({ meta }) => {
  return meta.requiresAuth
}

router.beforeEach((to, from, next) => {
  if (closeRoute(to) && isAuthenticated()) {
    return next()
  }
  if (!closeRoute(to)) {
    if (isAuthenticated) {
      return next()
    }
    next({ name: 'RH' })
  }
})

export default router