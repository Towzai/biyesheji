import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home_index'
import contact from '@/components/contact/contact_index'
import news from '@/components/news/news_index'
import team from '@/components/team/team_index'
import about from '@/components/about/about_index'
import project from '@/components/project/project_index'
import product from '@/components/product/product_index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/project',
      name: 'project',
      component: project
    }, 
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/team',
      name: 'team',
      component: team
    }
  ]
})
