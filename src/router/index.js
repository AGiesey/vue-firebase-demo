import Vue from 'vue';
import VueRouter from 'vue-router';
import { auth } from 'firebase';

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
    meta: {
      requiresAuth: true
    },
    component: () => import('../components/BloodPressurePage.vue')
  },
  {
    path: '/weight',
    name: 'Weight',
    linkExactActiveClass: 'active',
    meta: {
      requiresAuth: true
    },
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
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.auth)) {
    auth.onAuthStateChanged(user => {
      if (!user) {
          next({
              name: 'Login'
          })
      } else {
          next()
      }
    })
  } else {
    next()
  }
})

// router.beforeEach(async (to, from, next) => {
//   if (to.name !== 'Login' && !await firebase.getCurrentUser()){
//     next({ name: 'Login' });
//   }else{
//     next();
//   }
// })

export default router
