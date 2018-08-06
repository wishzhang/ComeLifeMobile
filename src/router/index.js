import Vue from 'vue/dist/vue'
import Router from 'vue-router'
import Index from '$src/components/page/index/Index.vue'
import Home from '$src/components/page/home/Home.vue'
import Linger from '$src/components/page/linger/Linger.vue'
import Mine from '$src/components/page/mine/Mine.vue'
import Register from '$src/components/page/register/Register.vue'
import Login from '$src/components/page/login/Login.vue'
import IndexBack from '$src/components/page/indexBack/IndexBack.vue'
import Contribution from '$src/components/page/contribution/Contribution.vue'
import ContributionAdd from '$src/components/page/contribution/ContributionAdd.vue'
import Collection from '$src/components/page/collection/Collection.vue'
import Setting from '$src/components/page/setting/Setting.vue'
import Advice from '$src/components/page/advice/Advice.vue'
import Talk from '$src/components/page/talk/talk.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {name: 'home'}
        },
        {
            name: 'indexBack',
            path: '/indexback',
            components: {
                index: IndexBack
            },
            children:[
                {
                    name:'register',
                    path:'register',
                    component:Register
                },
                {
                    name:'login',
                    path:'login',
                    component:Login
                },
                {
                    name:'contribution',
                    path:'contribution',
                    component:Contribution
                },
                {
                    name:'contributionAdd',
                    path:'contributionAdd',
                    component:ContributionAdd
                },
                {
                    name:'collection',
                    path:'collection',
                    component:Collection
                },
                {
                    name:'setting',
                    path:'setting',
                    component:Setting
                },
                {
                    name:'setting',
                    path:'setting',
                    component:Setting
                },
                {
                    name:'advice',
                    path:'advice',
                    component:Advice
                },
                {
                    name:'talk',
                    path:'talk',
                    component:Talk
                }
            ]
        },
        {
            name: 'index',
            path: '/index',
            components: {
                index: Index
            },
            children: [
                {
                    name: 'home',
                    path: 'home',
                    component: Home
                },
                {
                    name: 'linger',
                    path: 'linger',
                    component: Linger
                },
                {
                    name: 'mine',
                    path: 'mine',
                    component: Mine
                }
            ]
        }
    ]
})
