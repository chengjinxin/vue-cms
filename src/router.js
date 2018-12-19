import VueRouter from 'vue-router'
//导入对应的路由组件
import home from './components/tabbar/home.vue'
import shopcar from './components/tabbar/shopcar.vue'
import member from './components/tabbar/member.vue'
import search from './components/tabbar/search.vue'
import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
import photolist from './components/photos/photolist.vue'
import photoinfo from './components/photos/photoinfo.vue'
import goodslist from './components/goods/goodslist.vue'
import goodsInfo from './components/goods/goodsInfo.vue'



//创建路由对象m
var router = new VueRouter ({
    routes:[
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
        { path: '/shopcar', component: shopcar },
        { path: '/member', component: member },
        { path: '/search', component: search },
        { path:'/home/newsList',component:newsList },
        { path:'/home/newsInfo/:id',component:newsInfo },
        { path:'/home/photolist',component:photolist },
        { path:'/home/photoinfo/:id',component:photoinfo},
        { path:'/home/goodslist',component:goodslist},
        { path:'/home/goodsInfo/:id',component:goodsInfo}
    ],
    linkActiveClass:'mui-active'
})


//把路由暴露出去
export default router