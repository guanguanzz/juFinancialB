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
      component: () => import ('@/views/Nav.vue'),
      children:[
        {
         path:'/welcome',
         name:'welcome',
         component:()=>import("@/views/Welcome.vue")
        },
        {
          path:'/UserList',
          name:'userList',
          component:()=>import("@/views/BusinessManage/UserManage/UserList.vue")
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
          component:()=>import("@/views/BusinessManage/ProductManage.vue")
         },
         {
          path:'/contentLists',
          name:'contentLists',
           component:()=>import("@/views/OperatManage/ContentManage/ContentLists.vue")
         },
         {
          path:'/messageList',
          name:'messageList',
           component:()=>import("@/views/OperatManage/MessageList.vue")
         },{
          path:'/bankManage',
          name:'bankManage',
           component:()=>import("@/views/OperatManage/BankManage.vue")
         },{
          path:'/paraManage',
          name:'paraManage',
           component:()=>import("@/views/OperatManage/ParaManage.vue")
         },{
          path:'/opinionFeed',
          name:'opinionFeed',
           component:()=>import("@/views/OperatManage/OpinionFeed.vue")
         },{
          path:'/editionManage',
          name:'editionManage',
           component:()=>import("@/views/OperatManage/EditionManage.vue")
         },{
          path:'/saleCensus',
          name:'saleCensus',
           component:()=>import("@/views/DateMessage/SaleCensus.vue")
         },{//账户管理
          path:'/AccountList',
          name:'AccountList',
           component:()=>import("@/views/BackstageManage/AccountManage/AccountList.vue")
         },{ //账户管理新增
           path:'/AccountDetail',
           name:'AccountDetail',
           component:()=>import("@/views/BackstageManage/AccountManage/AccountDetail.vue") 
         },{  //修改密码
          path:'/ChangePwd',
          name:'ChangePwd',
           component:()=>import("@/views/BackstageManage/ChangePwd/ChangePwd.vue")
         },{ //角色管理
          path:'/roleManage',
          name:'roleManage',
           component:()=>import("@/views/BackstageManage/RoleManage/RoleManage.vue")
         },{ //模块管理
          path:'/moduleManage',
          name:'moduleManage',
           component:()=>import("@/views/BackstageManage/ModuleManage/ModuleManage.vue")
         },
      ]
    },
  ]
})
