import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Signup from '../components/Auth/Signup.vue'
import Login from '../components/Auth/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
