import Router from 'vue-router'
import Vue from 'vue'

import Index from '@/views/index'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
          path: '/',
          name: 'index',
          component: Index
        }
      ]
})



export default router