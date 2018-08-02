import Vue from 'vue/dist/vue'
import Router from 'vue-router'
import Index from '$src/components/page/index/Index.vue'
import Home from '$src/components/page/home/Home.vue'
import Linger from '$src/components/page/linger/Linger.vue'
import Mine from '$src/components/page/mine/Mine.vue'


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
