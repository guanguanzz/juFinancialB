<template>
  <div class="container">
    <div class="account">
      <span>新增账户</span>
    </div>

    <div class="input-panel">
      <div class="input-content">
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

      </div>
    </div>

    <div class="btn-panel">
      <button class="btn ensure">确定</button>
      <button class="btn cancel">取消</button>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: 0,
        roles: [{
            value: 0,
            text: "超级管理员"
          },{
            value: 1,
            text: "管理员"
          }, {
            value: 2,
            text: "运营"
          }
        ]

      }
    }





  }
</script>

<style lang="scss" scoped>








</style>