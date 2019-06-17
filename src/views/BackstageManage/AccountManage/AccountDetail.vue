<template>
  <div class="container">
    <div class="accountTitle">
      <span class="accountWord">{{headText}}</span>
    </div>

    <div class="input-panel">
      <!-- <div class="input-content">
        登录名 <input type="text" class="input-width" placeholder="请输入登录名">

      </div>
      <div class="input-content">
        手机号码 <input type="text" class="input-width" placeholder="请输入手机号码">

      </div>
      <div class="input-content">
        密码 <input type="text" class="input-width" placeholder="请输入密码">

      </div>
      <div class="input-content">
        密码确认 <input type="text" class="input-width" placeholder="请输入密码">

      </div>
      <div class="input-content">
        角色 <select v-model="selected">
          <option v-for="role in roles" :value="role.value" :key="role.id">
            {{role.text}}
          </option>
        </select>
      </div> -->

      <div class="input-content">
        <span class="beforeWord">登录名</span>
        <el-input v-model="loginName" placeholder="请输入登录名"></el-input>
      </div>

      <div class="input-content">
        <span class="beforeWord">手机号码</span>
        <el-input v-model="phoneNum" placeholder="请输入手机号码" @blur="BlurTest($event)"></el-input>
      </div>
                                                                <!-- 还需正则优化 -->
      <div class="input-content">
        <span class="beforeWord">密码 </span>
        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
      </div>

      <div class="input-content">
        <span class="beforeWord">密码确认</span>
        <el-input placeholder="请确认密码" v-model="passwordDouble" show-password></el-input>
      </div>

      <div class="input-content">
        <span class="beforeWord">角色</span>
        <el-select v-model="value" placeholder="请选择" class="select-bkg">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>

      <div class="btn-panel">
        <!-- <button class="btn ensure">确定</button> -->
        <!-- <button class="btn cancel">取消</button> -->

        <el-button class="btn ensure" type="success" @click="btnEnsure">确定</el-button>
        <el-button class="btn cancel" type="danger">
          <router-link to="AccountList" class="word cancel" tag="div">取消</router-link>
        </el-button>



      </div>


    </div>



  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0,
        options: [{
          value: 0,
          label: "请选择"
        }, {
          value: 1,
          label: "超级管理员"
        }, {
          value: 2,
          label: "管理员"
        }, {
          value: 3,
          label: "运营"
        }],
        loginName: "",
        phoneNum: "",
        password: "",
        passwordDouble: "",
        headText: "新增账户",
        id: ""

      }
    },
    created(){
      console.log(this.$route.params)
      this.loginName = this.$route.params.username
      this.phoneNum = this.$route.params.phone
      this.id = this.$route.query.id
      if(this.id){ //如果是query传参过来有id，则显示编辑
      this.headText = "编辑账户"  
      }
      this.value = this.$route.params.roleId



    },
    methods:{
      BlurTest(e){ //输入框失焦后触发--不需要这个需求，但是需要点击确定后进行校验表单内容
        // let rightNum = new RegExp("^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$").test(e.target.value)
        // if(!rightNum){
        //   // this.$message.warning('请正确输入')
        //   // e.target.value = ''
        //   alert("请输入正确的手机号")
        //   e.target.value = ''
        // }



      },
      btnEnsure(){
        
      }
    }
  




  }
</script>

<style lang="scss" scoped>
  .container{
    border: 1px solid #F2F2F2;
    background-color: #fff;
  }

  .accountTitle {
    height: 40px;
    font-size: 18px;
    font-weight: bold;
    border: 1px solid #F2F2F2;
    line-height: 40px;

    .accountWord{
      margin-left: 15px;
    }
  }

  .input-content {
    display: flex;
    align-items: center;
    margin: 20px 0 20px 0;
    padding: 10px 35px 10px 35px;
  }

  .input-panel {
    border: 1px solid #F2F2F2;
  }

  .beforeWord {
    width: 75px;
    font-size: 14px;
    color: #333;
  }

  .btn-panel {
    padding: 30px 0 30px 0;
    margin-left: 115px;
  }

  .btn {
    height: 40px;
    width: 140px;
    border-style: none;
    border-radius: 5px;
    cursor: pointer!important;
  }
  
  .btn.cancel {
    margin-left: 30px;
  }

  // .word.cancel{
  //   text-decoration: none;
  //   color: #fff;
  // }
</style>