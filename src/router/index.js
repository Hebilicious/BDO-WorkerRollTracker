import Vue from 'vue'
import Router from 'vue-router'
import Roller from '@/components/Roller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Roller',
      component: Roller
    }
  ]
})
