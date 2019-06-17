<template>
    <div class="list">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <h2 class="titles">申请详情</h2>
            <h3 class="title">个人信息</h3>
            <form action="" class="listHead">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="用户编号">
                            <el-input v-model="userNo" placeholder="" :disabled="true"></el-input>
                        </el-form-item>

                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="真实姓名">
                            <el-input v-model="realName" placeholder="" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="身份证号">
                            <el-input v-model="cardNo" placeholder="" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="手机号">
                            <el-input v-model="phone" placeholder="" :disabled="true"></el-input>
                        </el-form-item>


                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="注册时间">
                            <el-input :value="createAt | timeChange" placeholder="" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="电子邮箱">
                            <el-input v-model="email" placeholder="" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-form-item label="详细地址">
                            <el-input v-model="address" placeholder="" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </form>
            <div :style="{display:noRealName}">
                <h3 class="title">证件信息</h3>
                <form action="" class="listHead">
                    <el-row :gutter="20">
                        <el-col :span="3">
                            <label for="">身份证正面:</label>
                        </el-col>
                        <el-col :span="6">
                            <img :src="positiveUrl" alt="配图预览" :onerror='errorGoodsImg'>
                        </el-col>
                        <el-col :span="3">
                            <label for="">身份证反面:</label>
                        </el-col>
                        <el-col :span="6">
                            <img :src="backUrl" alt="配图预览" :onerror='errorGoodsImg'>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" :style="{display:refuse}" class="refuse">
                        <el-col :span="3">
                            <label for="">拒绝理由:</label>
                        </el-col>
                        <el-col :span="3">
                            <el-input type="textarea" :disabled="true" :rows="2" placeholder="请输入内容"
                                v-model="params.reason" class="refuseReason">
                            </el-input>
                        </el-col>

                    </el-row>
                </form>
            </div>
            <div style="margin:10px;">
                <el-button type="primary" @click="uncertainty">{{audit}}</el-button>
                <el-button type="danger" @click="back">返回</el-button>
            </div>
        </el-form>
    </div>
</template>
<script>
    import {
        lookName,
        
        getNameList
    } from '@/api/BusinessManage/NameApprove/NameList.js'

     import {
      fiveout
    } from '@/api/BusinessManage/UserManage/UserList.js'
    export default {
        data() {
            return {
                msg: '',
                userNo: '', //用户编号
                realName: '',
                cardNo: '', //身份证号
                phone: '',
                createAt: '', //注册时间
                email: '',
                address: '',
                formInline: {},
                positiveUrl: '', //身份证正面
                backUrl: '', //反面
                errorGoodsImg: 'this.src="' + require('@/assets/img/show.png') + '"', //初始图 已定不需要更改
                noRealName: 'block',

                // audit:'',//审核 或者 取消实名              
                params: {
                    rid: '',
                    reason: '',
                    realStatus:''
                    // authentication: ''
                }
            }
        },
        created() {
            this.search(1);
        },
        computed: {
            refuse: function () {
                if (this.params.realStatus == 3) {
                    return 'block';
                } else {
                    return 'none';
                }
            },
            audit: function () { //审核 或者 取消实名
                if (this.params.realStatus == 1) {
                    return '取消实名';
                } else {
                    return '审核';
                }
            }
        },
        watch: {

        },
        methods: {
            search(arg) { //搜索接口
                lookName(arg).then(
                    res => {
                        if (res.status === 200) {
                            this.msg = res.data.data;

                            console.log(this.msg);


                            this.userNo = this.msg.userNo;
                            this.realName = this.msg.realName;
                            if (this.realName == '') {
                                this.noRealName = 'none';
                            }
                            this.cardNo = this.msg.cardNo;
                            this.phone = this.msg.phone;
                            this.email = this.msg.email;
                            this.address = this.msg.address;
                            this.createAt = this.msg.createAt;

                            this.params.rid = this.msg.rid;
                            this.params.reason = this.msg.reason;
                            this.params.realStatus = this.msg.realStatus;

                            // this.positiveUrl = this.msg.positiveUrl;
                            // this.backUrl = this.msg.backUrl;

                            // this.total = res.data.data.user.length;
                            // console.log(this.total);
                            //   this.pageSize = ;
                        }
                    }
                );
            },
            back() { //返回

            },
            uncertainty(el) { //审核 或者 取消实名
                console.log(el);
                if (el.target.innerText == '审核') {
                    // 审核


                } else {
                    // 取消实名
                    this.$confirm(`取消实名将删除用户身份信息,确认取消?`, '操作提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        console.log('已经确定了1');
                       
                        fiveout(this.params).then(
                            res => {
                                console.log('已经确定了2')
                                console.log(res)
                                if (res.data.code === 0) {
                                    this.$message({
                                        type: 'success',
                                        message: `成功!`
                                    });                                  
                                    // 清空数据：
                                    this.noRealName = 'none';
                                    this.realName = '';
                                    this.phone = '';
                                    this.address = '';
                                    this.cardNo = '';
                                    this.email = '';
                                } else {
                                    this.$message({
                                        type: 'success',
                                        message: `失败!`
                                    });
                                }
                            }
                        )
                    }).catch(() => {
                        console.log('已经取消了')
                        this.$message({
                            type: 'info',
                            message: '已取消'
                        });
                    });
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .list {
        margin: 10px;

        border: 1px solid darkgray;
        border-radius: 10px;

        .listHead {
            margin: 0 10px 10px 10px;
            padding: 10px;
            border: 1px solid darkgray;
        }
    }

    .titles {
        padding: 10px;
        border-bottom: 1px solid darkgray;
    }

    .title {
        margin: 10px 10px 0 10px;
        padding: 10px;
        border: 1px solid darkgray;
        border-bottom: 0;

    }

    .refuse {
        margin-top: 30px;
    }

    .refuseReason {
        width: 200px;
    }

    img {
        @include w-h(200px, 100px);
    }
</style>