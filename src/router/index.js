import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/app/bling/comm'
    },
    {
      path: '/app/bling/comm',  // 共识社区
      component: resolve => require(['../views/community/index'], resolve),
    },
    {
      path: '/app/bling/pp',//隐私政策
      component: resolve => require(['../views/aboutUs/privacyPolicy'], resolve),
    },
    {
      path: '/app/bling/ts', //服务条款
      component: resolve => require(['../views/aboutUs/termsService'], resolve),
    },
    {
      path: '/app/bling/cu',  //联系我们
      component: resolve => require(['../views/aboutUs/contactUs'], resolve),
    },
  ]
})

