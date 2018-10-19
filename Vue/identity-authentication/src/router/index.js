import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/index'
import signin from '@/pages/auth/signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: 'auth/signin',
      name: 'signin',
      components: signin
    }
  ]
})