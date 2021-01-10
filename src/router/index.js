import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/bloodpressure',
    name: 'Bloodpressure',
    linkExactActiveClass: 'active',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/BloodPressurePage.vue')
  },
  {
    path: '/weight',
    name: 'Weight',
    linkExactActiveClass: 'active',
    component: () => import('../components/WeightPage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    linkExactActiveClass: 'active',
    component: () => import('../components/LoginPage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
