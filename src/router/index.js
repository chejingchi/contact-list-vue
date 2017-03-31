import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/homepage/HomePage.vue'
import Login from '../pages/login/Login.vue'
import ContactList from '../pages/contactlist/ContactList.vue'
import AddLinkMan from '../pages/addlinkman/AddLinkMan.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      redirect: '/login',
      component: HomePage,
      children: [
        {
          path: '/login',
          component: Login
        },
        {
          path: '/contact-list/:id',
          name: 'listPage',
          component: ContactList
        },
        {
          path: '/add-linkman/:id',
          name: 'addLinkman',
          component: AddLinkMan
        }
      ]
    }

  ]
})
