import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/homepage/HomePage.vue'
import Login from '../pages/login/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'homePage',
    redirect: '/login',
    component: HomePage,
    children: [{
      path: '/login',
      component: Login
    }]
  }]
})
