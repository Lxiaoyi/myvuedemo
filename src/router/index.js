import Vue from 'vue'
import Router from 'vue-router'
import stuIndex from '@/views/stuIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'stuIndex',
      component: stuIndex
    },
  ]
})
