import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageA from '@/components/a'
import PageB from '@/components/b'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'pageA',
      component: PageA
    },
    {
      path: '/b',
      name: 'pageB',
      component: PageB
    }
  ]
})
