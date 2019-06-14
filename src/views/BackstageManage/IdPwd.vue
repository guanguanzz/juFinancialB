<template>
  <div class="container">




    <!-- <div class="select-header">
      <div class="role-panel">角色 <select v-model="selected" class="select-bkg">
          <option v-for="role in roles" :value="role.value" :key="role.id">
            {{role.text}}
          </option>
        </select>
      </div>

      <div class="user-panel">用户名 <input type="text" class="user-content"></div>

      <div class="btn-panel">
        <button class="btn reset">
          重置
        </button>
        <button class="btn search">
          查询
        </button>
      </div>

    </div>

 -->


    <el-row class="header-height">
      <el-col :span="2" class="word-panel">
        角色
      </el-col>
      <el-col :span="4">
        <select v-model="selected" class="select-bkg">
          <option v-for="role in roles" :value="role.value" :key="role.id">
            {{role.text}}
          </option>
        </select>
      </el-col>


      <el-col :span="2" class="word-panel">
        用户名
      </el-col>
      <el-col :span="4">
        <input type="text" class="user-content">
      </el-col>


      <el-col :span="12" class="btn-panel">
        <button class="btn reset">
          重置
        </button>
        <button class="btn search">
          查询
        </button>
      </el-col>
    </el-row>


    <div class="user-list">
      <div class="userLsit-title">
        <span class="list-word">用户列表</span>

        <button class="btn add">+新增</button>
      </div>

      <div class="table-panel">
        <table class="table-set">
          <thead>
            <tr>
              <th>ID</th>
              <th>登录名</th>
              <th>角色</th>
              <th>创建人</th>
              <th>创建时间</th>
              <th>更新人</th>
              <th>更新时间</th>
              <th>操作</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item, index) in inform" :key="index">
              <td>{{item.aid}}</td>
              <td>{{item.username}}</td>
              <td>{{item.role_name}}</td>
              <td>{{item.create_by}}</td>
              <td>
                <div>{{item.create_at | timeChange}}</div>
                <!-- <div>{{item.create_at | formatDate2}}</div> -->
              </td>
              <td>{{item.update_by}}</td>
              <td>
                <div>{{item.update_at | timeChange}}</div>
                <!-- <div>{{item.update_at | formatDate2}}</div> -->
              </td>
              <td>
                <button class="btn edit">编辑</button>

                <button class="btn delete">删除</button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>

  </div>



</template>
<script>

import https from "@/api/BackstageManage/IdPwd.js"
import {timeChange} from "@/utils/date.js"


  export default {
    data() {
      return {
        selected: '0',
        roles: [{
            value: 0,
            text: "————请选择————"
          }, {
            value: 1,
            text: "超级管理员"
          }, {
            value: 2,
            text: "管理员"
          }, {
            value: 3,
            text: "运营"
          }

        ],
        inform:[],
      }



    },
    created(){

        https.idPwd()
        .then(res=>{
            this.inform = res.data.data.list


            console.log(res.data.data)
            console.log(res.data.data.list)
        })








    },
    methods:{

    },








  }
</script>
<style lang="scss" scoped>
  .container {
    padding: 30px;
  }

  // .select-header {
  //   display: flex;
  //   padding: 30px;
  //   background-color: rgb(250, 250, 250);
  //   align-items: center;
  // }

  .select-bkg {
    height: 28px;
    background-color: #fff;
  }

  .header-height {
    display: flex;
    align-items: center;
    height: 58px;
    background-color: #1111;
    border: 1px solid;
  }

  .word-panel {
    text-align: right;
    padding: 0 21px 0 0;
  }

  .btn-panel{
    text-align: right;
    padding-right: 44px;
  }

  .user-content {
    height: 25px;
  }

  .btn {
    padding: 4px 8px 4px 8px;
    margin: 0 8px 0 8px;
    border-style: none;
    border: 1px solid;

    .btn.reset {
      background-color: #fff;
    }

    .btn.search {
      background-color: rgb(226, 222, 219)
    }
  }

  .btn.add {
    position: absolute;
    right: 40px;
  }

  .user-list {
    padding: 12px 0 0 0;
  }

  .userLsit-title {
    position: relative;
    display: flex;
    height: 50px;
    align-items: center;
    border: 1px solid;

    .list-word {
      padding-left: 37px;
      color: black;
      font-weight: bold;
    }
  }

  .table-panel {
    padding: 10px;
  }

  .table-set {
    width: 100%;
    border: 1px solid;
    border-spacing: 0;
    border-collapse: collapse;

    th {
      border: 1px solid;
      padding: 5px;
    }

    tr{
        height: 50px;
    }

    td{
        text-align: center;
        border: 1px solid;
    }

  }
</style>