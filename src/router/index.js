import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import contact from '@/components/contact/contact_index'
import news from '@/components/news/news_index'
import team from '@/components/team/team_index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
