import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing'
import Menu from '../views/Menu'
import About from '../views/About'
import Profile from '../views/Profile'
import Status from '../views/Status'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/menu',
    component: Menu
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/status',
    component: Status
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
