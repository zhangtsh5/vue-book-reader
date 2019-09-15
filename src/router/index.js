import Vue from 'vue'
import Router from 'vue-router'
// eslint-disable-next-line no-unused-vars
import Reader from '@/Reader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/reader'
    },
    {
      path: '/reader',
      component: Reader
    }
  ]
})
