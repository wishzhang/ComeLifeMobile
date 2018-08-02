import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/page/index/Index'
import Home from '@/components/page/home/Home'
import Linger from '@/components/page/linger/Linger'
import Mine from '@/components/page/mine/Mine'


Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'index',
      path:'/index',
      components:{
        index:Index
      },
      children:[
        {
          name:'home',
          path:'home',
          component:Home
        },
        {
          name:'linger',
          path:'linger',
          component:Linger
        },
        {
          name:'mine',
          path:'mine',
          component:Mine
        }
      ]
    }
  ]
})
