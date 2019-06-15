<template>
    <div class="container">

        <div class="user-list">
            <div class="userLsit-title">
                <span class="list-word">角色管理</span>

                <!-- <button class="btn add" @click="add">+新增</button> -->
                <el-button type="primary" size="mini" class="btn add" @click="add">+新增</el-button>
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
    .container {
        background-color: #fff;
        padding: 30px;
    }

    .user-content {
        height: 25px;
    }

    .btn {
        padding: 7px 15px;
        line-height: 1.2;
        border-style: none;
        border: 1px solid ：#F2F2F2;
        font-weight: 500;
    }

    .btn.add {
        position: absolute;
        right: 20px;
    }

    .user-list {
        // padding: 12px 0 0 0;
        margin-top: 30px;
    }

    .userLsit-title {
        position: relative;
        display: flex;
        height: 50px;
        align-items: center;
        background-color: #fff;
        border: 1px solid #F2F2F2;

        .list-word {
            padding-left: 37px;
            color: black;
            font-weight: bold;
        }
    }

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
