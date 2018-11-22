import VueRouter from 'vue-router'
//导入对应的路由组件
import home from './components/tabbar/home.vue'
import shopcar from './components/tabbar/shopcar.vue'
import member from './components/tabbar/member.vue'
import search from './components/tabbar/search.vue'
import newsList from './components/news/newsList.vue'



//创建路由对象
var router = new VueRouter ({
    routes:[
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
        { path: '/shopcar', component: shopcar },
        { path: '/member', component: member },
        { path: '/search', component: search },
        { path:'/home/newsList',component:newsList }
    ],
    linkActiveClass:'mui-active'
})


//把路由暴露出去
export default router