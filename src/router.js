import Vue from 'vue'
import Router from 'vue-router'

// import Home from './views/Home.vue'

import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      // path: '/nav',

      path: '/',
      name: 'nav',
      component: () => import('@/views/Nav.vue'),
      children: [{
          path: '/welcome',
          name: 'welcome',
          component: () => import("@/views/Welcome.vue")
        },
        {
          path: '/UserList',
          name: 'userList',
          component: () => import("@/views/BusinessManage/UserManage/UserList.vue")
        },
        {
          path: '/debtManage',
          name: 'debtManage',
          component: () => import("@/views/BusinessManage/DebtManage.vue")
        },
        {
          path: '/contentLists',
          name: 'contentLists', //内容列表
          component: () => import("@/views/OperatManage/ContentManage/ContentLists.vue")
        },
        {
          path: '/contentDetails',
          name: 'contentDetails', //内容详情
          component: () => import("@/views/OperatManage/ContentManage/ContentDetails.vue")
        },
        {
          path: '/messageLists',
          name: 'messageLists', //消息列表
          component: () => import("@/views/OperatManage/MessageManage/MessageLists.vue")
        },
        {
          path: '/messageDetails',
          name: 'messageDetails', //消息详情
          component: () => import("@/views/OperatManage/MessageManage/MessageDetails.vue")
        },
        {
          path: '/NameList',
          name: 'NameList',
          component: () => import("@/views/BusinessManage/NameApprove/NameList.vue")
        },
        {
          path: '/productManage',
          name: 'productManage',
          component: () => import("@/views/BusinessManage/ProductManage.vue")
        },
        {
          path: '/bankManage',
          name: 'bankManage',
          component: () => import("@/views/OperatManage/BankManage/BankManage.vue")
        },
        {
          path: '/paraManage',
          name: 'paraManage',
          component: () => import("@/views/OperatManage/ParaManage.vue")
        },
        {
          path: '/opinionFeed',
          name: 'opinionFeed',
          component: () => import("@/views/OperatManage/OpinionFeed/OpinionFeed.vue")
        },
        {
          path: '/editionManage',
          name: 'editionManage',
          component: () => import("@/views/OperatManage/EditionManage/EditionManage.vue")
        },
        {
          path:'/debtManage',
          name:'debtManage',
          component:()=>import("@/views/BusinessManage/DebtManage.vue")
         },
         {
          path:'/NameList',
          name:'NameList',
          component:()=>import("@/views/BusinessManage/NameApprove/NameList.vue")
         },
         {
          path:'/productManage',
          name:'productManage',
          component:()=>import("@/views/BusinessManage/DebtManage.vue")
         },
         {
          path:'/contentLists',
          name:'contentLists',
           component:()=>import("@/views/OperatManage/ContentManage/ContentLists.vue")
         },
         {
          path:'/paraManage',
          name:'paraManage',
           component:()=>import("@/views/OperatManage/ParaManage.vue")
         },{ //统计信息
          path:'/salesStatistic',
          name:'salesStatistic',
           component:()=>import("@/views/StatisticManage/SalesStatistic.vue")
         },{ //销量详情
          path:'salesDetail',
          name:'/salesDetail',
          component:()=>import("@/views/StatisticManage/SalesDetail.vue")
         },{//账户管理
          path:'/accountList',
          name:'accountList',
           component:()=>import("@/views/BackstageManage/AccountManage/AccountList.vue")
         },{ //账户管理新增/编辑
           path:'/accountDetail',
           name:'accountDetail',
           component:()=>import("@/views/BackstageManage/AccountManage/AccountDetail.vue") 
         },{  //修改密码
          path:'/changePwd',
          name:'changePwd',
           component:()=>import("@/views/BackstageManage/ChangePwd/ChangePwd.vue")
         },{ //角色管理
          path:'/roleManage',
          name:'roleManage',
           component:()=>import("@/views/BackstageManage/RoleManage/RoleManage.vue")
         },{ //角色新增
          path:'/roleDetail',
          name:'roleDetail',
           component:()=>import("@/views/BackstageManage/RoleManage/RoleDetail.vue")
         },
         { //模块管理
          path:'/moduleManage',
          name:'moduleManage',
           component:()=>import("@/views/BackstageManage/ModuleManage/ModuleManage.vue")
         },
      ]
    },
  ]
})