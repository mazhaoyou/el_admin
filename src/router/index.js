import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export const constantRoutes = [{
    path: '/index',
    component: Layout,
    hidden: true,
    children: [{
      path: '/index/:path*',
      component: () => import('@/views/index/index')
    }]
  }

]
export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})
