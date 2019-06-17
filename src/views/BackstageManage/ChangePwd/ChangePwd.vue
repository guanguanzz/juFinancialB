<template>
    <div class="container">

        <div class="user-list">
            <div class="userLsit-title">
                <span class="list-word">修改密码</span>
            </div>

            <div class="table-panel">
                <div class="input-content">
                    <span class="beforeWord">请输入旧密码</span>
                    <el-input placeholder="请输入旧密码" v-model="unlessPwd" show-password></el-input>
                </div>
                <div class="input-content">
                    <span class="beforeWord">请设置新密码</span>
                    <el-input placeholder="请设置新密码" v-model="newPwd" show-password></el-input>
                </div>
                <div class="input-content">
                    <span class="beforeWord">请确认新密码</span>
                    <el-input placeholder="请确认新密码" v-model="newPwdDouble" show-password></el-input>
                </div>
                <div class="input-content">
                    <!-- <button>保存</button> -->
                    <el-button type="success" class="save">保存</el-button>
                </div>

            </div>
        </div>
    </div>
</template>


<script>
    // import https from "@/api/BackstageManage/AccountList.js"

    export default {
        data() {
            return {
                unlessPwd: "",
                newPwd: "",
                newPwdDouble: ""


            }
        },
        created() {


        },
        methods:{
            add(){

            }
        }
        
    }
</script>

<style lang="scss" scoped>

    .beforeWord{
        width:120px
    }

    .input-content {
        display: flex;
        align-items: center;
        margin: 20px 0 20px 0;
        padding: 10px 85px 10px 185px;
    }

    .save{
        margin: auto;
        width: 350px;
    }

</style>
