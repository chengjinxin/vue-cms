// 入口文件
import Vue from 'vue'

//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

//导入格式化时间插件
import moment from 'moment'

//定义全局过滤器
Vue.filter('dateFormat',function(dataStr,pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
})

//導入和安裝vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.http.options.root = 'http://www.lovegf.cn:8899';
//设置全局提交数据的格式
Vue.http.options.emulateHTTP = true;

//导入mui样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//导入缩略图插件
import VuePreview from 'vue2-preview'

// defalut install
Vue.use(VuePreview)


//按需导入mint-ui中的组件
// import { Header,Swipe, SwipeItem,Button,Lazyload } from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)
import mintUi from 'mint-ui'
Vue.use(mintUi)
import 'mint-ui/lib/style.css'

//导入router.js模块
import router from './router.js'

//导入app跟组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router
})