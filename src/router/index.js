import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import example from './example'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home'),
      redirect: '/example',
      children: [
        ...example
      ]
    }
  ]
})

export default router