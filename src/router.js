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

      path: '/',
      // path: '/nav',
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
          path: '/NameList',
          name: 'NameList',
          component: () => import("@/views/BusinessManage/NameApprove/NameList.vue")
        },
        {
          path: '/productManage',
          name: 'productManage',
          component: () => import("@/views/BusinessManage/DebtManage.vue")
        },
        {
          path: '/contentLists',
          name: 'contentLists',//内容列表
          component: () => import("@/views/OperatManage/ContentManage/ContentLists.vue")
        },
        {
          path: '/contentDetails',
          name: 'contentDetails',//内容详情
          component: () => import("@/views/OperatManage/ContentManage/ContentDetails.vue")
        },
        {
          path: '/messageList',
          name: 'messageList',//消息列表
          component: () => import("@/views/OperatManage/MessageManage/MessageList.vue")
        },
        {
          path: '/messageList',
          name: 'messageDetails',//消息详情
          component: () => import("@/views/OperatManage/MessageManage/MessageDetails.vue")
        },
        {
          path: '/bankManage',
          name: 'bankManage',
          component: () => import("@/views/OperatManage/BankManage/BankManage.vue")
        },
        {
          path: '/bankDetails',
          name: 'bankDetails',
          component: () => import("@/views/OperatManage/BankManage/BankDetails.vue")
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
          path: '/opinionDetails',
          name: 'opinionDetails',
          component: () => import("@/views/OperatManage/OpinionFeed/OpinionDetails.vue")
        }, 
        {
          path: '/editionManage', 
          name: 'editionManage',
          component: () => import("@/views/OperatManage/EditionManage/EditionManage.vue")
        }, 
        {
          path: '/editionUpdate',
          name: 'editionUpdate',
          component: () => import("@/views/OperatManage/EditionManage/EditionUpdate.vue")
        }, 
        {
          path: '/saleCensus',
          name: 'saleCensus',
          component: () => import("@/views/DateMessage/SaleCensus.vue")
        }, {
          path: '/idPwd',
          name: 'idPwd',
          component: () => import("@/views/BackstageManage/IdPwd.vue")
        }, {
          path: '/revisePwd',
          name: 'revisePwd',
          component: () => import("@/views/BackstageManage/RevisePwd.vue")
        }, {
          path: '/roleManage',
          name: 'roleManage',
          component: () => import("@/views/BackstageManage/RoleManage.vue")
        }, {
          path: '/moduleManage',
          name: 'moduleManage',
          component: () => import("@/views/BackstageManage/ModuleManage.vue")
        },
      ]
    },
  ]
})