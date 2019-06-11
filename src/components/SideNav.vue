<template>
  <div>

    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->

    <el-menu default-active="welcome" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      :collapse="$store.state.isCollapse" :router='true'>
      <div class="topBar-brand">理财管理平台</div>

      <el-menu-item index='welcome'>
        <i class="iconfont icon-zhuye"></i>
        <span slot="title">欢迎页</span>
      </el-menu-item>

      <el-submenu :index='menu.index' v-for='(menu,index) in menus' :key='index'>

        <template slot="title">
          <i class="iconfont" :class="menu.icon"></i>
          <span slot="title">{{menu.title}}</span>
        </template>

      
          <el-menu-item class='title' :disabled=true v-show='$store.state.isCollapse'>{{menu.title}}</el-menu-item>
          <el-menu-item v-for='(item,index) in menu.items' :key='index' :index='item.path'>{{item.name}}</el-menu-item>

     
      </el-submenu>

    </el-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isCollapse: this.$store.state.isCollapse,
        menus: [{
          title: '业务管理',
          icon: 'icon-yewuguanli',
          index: '1',
          items: [{
            name: '用户管理',
            path: 'userList'
          }, {
            name: '实名认证',
            path: 'nameList'
          }, {
            name: '产品管理',
            path: 'productManage'
          }, {
            name: '债券管理',
            path: 'debtManage'
          }]
        }, {
          title: '运营管理',
          index: '2',
          icon: 'icon-yunyingguanli',
          items: [{
            name: '内容管理',
            path: 'contentManage'
          }, {
            name: '消息列表',
            path: 'messageList'
          }, {
            name: '银行管理',
            path: 'bankManage'
          }, {
            name: '参数设置',
            path: 'paraManage'
          }, {
            name: '意见反馈',
            path: 'opinionFeed'
          }, {
            name: '版本管理',
            path: 'editionManage'
          }]
        }, {
          title: '统计信息',
          index: '3',
          icon: 'icon-tongji',
          items: [{
            name: '销量统计',
            path: 'saleCensus'
          }]
        }, {
          title: '后台管理',
          index: '4',
          icon: 'icon-huaban',
          items: [{
            name: '账户密码',
            path: 'idPwd'
          }, {
            name: '修改密码',
            path: 'revisePwd'
          }, {
            name: '角色管理',
            path: 'roleManage'
          }, {
            name: '模块管理',
            path: 'moduleManage'
          }]
        }, ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(this.isCollapse)
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="scss" scoped>
  .topBar-brand {
    min-height: 50px;
    line-height: 50px;
    text-align: center;

  }

  .title {
    color: red;
    font-size: 25px !important;
    height:60px !important;
    line-height: 60px !important;
    cursor: default;
    
  }


  .el-menu-item {
    height: 50px;
    line-height: 50px;
    font-size: 14px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100vh;
  }

  .el-menu {
    min-height: 100vh;
  }

  .el-menu-item-group {
    padding: 0px;

  }
</style>