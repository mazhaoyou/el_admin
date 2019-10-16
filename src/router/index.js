import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Index from '../views/index/index' //用户协议详情
import Login from '../views/login/index'
export default new Router({
    routes: [{
            path: '/',
            component: Index,
            name: Index,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
    ]
})
