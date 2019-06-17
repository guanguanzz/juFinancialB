<template>
    <div class="lookuser">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <h2 class="user">用户详情</h2>
            <div>
                <h3 class="title">个人信息</h3>
                <form action="" class="listHead">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="用户编号">
                                <el-input v-model="userNo" placeholder="" :disabled="true"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="7" :offset="3">
                            <el-form-item label="真实姓名">
                                <el-input v-model="realName" placeholder="" :disabled="true"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="7" :offset="1">
                            <el-form-item label="身份证号">
                                <el-input v-model="cardNo" placeholder="" :disabled="true"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20">
                        <el-col :span="5">
                            <el-form-item label="手机号">
                                <el-input v-model=" params.phone" placeholder="" :disabled="isShowOne"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-button type="primary" @click="amend" size='mini' :style=" { display:oneIfShow}">修改
                            </el-button>
                            <el-button type="primary" @click="save(1)" size="mini" :style=" { display:ifShowOne}">保存
                            </el-button>
                            <el-button type="primary" @click="cancel(1)" size="mini" :style=" { display:ifShowOne}">取消
                            </el-button>
                        </el-col>
                        <el-col :span="7">
                            <el-form-item label="注册时间">
                                <el-input placeholder="" :value="createAt | timeChange" :disabled="true"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="7" :offset="1">
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
                    <el-button type="primary" @click="transaction" size='mini'>交易记录</el-button>
                    <el-button type="danger" @click="investment" size='mini'>投资记录</el-button>
                </form>
            </div>

            <div>
                <h3 class="title">账户信息</h3>
                <form action="" class="listHead">
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item label="总资产">
                                <el-input v-model="assets" placeholder="" :disabled="true"></el-input>
                            </el-form-item>

                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="累计收益">
                                <el-input v-model="income" placeholder="" :disabled="true"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </form>

            </div>

            <div>
                <h3 class="title">理财经理信息</h3>
                <form action="" class="listHead">
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item label="工号">
                                <el-input v-model=" params.manager" placeholder="" :disabled="isShowTwo"></el-input>
                            </el-form-item>
                        </el-col>

                        <el-button type="primary" @click="change" size="mini" :style=" { display:twoIfShow}">更换
                        </el-button>
                        <el-button type="primary" @click="save(2)" :style=" { display:ifShowTwo}" size="mini">保存
                        </el-button>
                        <el-button type="primary" @click="cancel(2)" :style=" { display:ifShowTwo}" size="mini">取消
                        </el-button>
                    </el-row>
                </form>
            </div>

            <div :style=" { display:ifShow}">
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
                        <el-col :span="6">
                            <el-button type="primary" @click="cancelName" size="mini">取消实名</el-button>
                        </el-col>
                    </el-row>
                </form>

            </div>

            <div :style=" { display:ifShowThere}">
                <h3 class="title">银行卡信息(最多绑两张卡)</h3>
                <form action="" class="listHead">
                    <el-row :gutter="20" :style=" { display:ifShowFour}">
                        <el-col :span="8">
                            <el-form-item label="开户行">
                                <el-select v-model="bankOne" placeholder="" :disabled="true">
                                    <el-option :label="bankOne" value=""></el-option>
                                    <!-- <el-option :value="item" v-for="(item,index) in bank" :key="index">{{item}}
                            </el-option> -->
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="银行卡号">
                                <el-input v-model="incomeOne" placeholder="" :disabled="true"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item>
                                <el-button type="danger" @click="untieOne" size="small">解绑</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row :gutter="20" :style=" { display:ifShowFive}">
                        <el-col :span="8">
                            <el-form-item label="开户行">
                                <el-select v-model="bankTwo" placeholder="" :disabled="true">
                                    <el-option :label="bankTwo" value=""></el-option>
                                    <!-- <el-option :value="item" v-for="(item,index) in bank" :key="index">{{item}}
                            </el-option> -->
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="银行卡号">
                                <el-input v-model="incomeTwo" placeholder="" :disabled="true"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item>
                                <el-button type="danger" @click="untieTwo" size="small">解绑</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>

                </form>
            </div>


            <el-button type="danger" @click="back" class="back">返回</el-button>
        </el-form>
    </div>
</template>
<script>
    // import '@/assets/scss/commonList.scss'
    import {
        lookUser,
        amendUser,
        bankcard
    } from '@/api/BusinessManage/UserManage/UserList.js'
    export default {
        data() {
            return {
                msg: '',
                formInline: {},
                userNo: '', //用户编号
                realName: '',
                cardNo: '', //身份证号
                isShowOne: true,
                isShowTwo: true,
                ifShow: 'block',
                ifShowThere: 'block',
                ifShowFour: 'none',
                ifShowFive: 'none',
                createAt: '', //注册时间
                email: '',
                address: '',
                assets: '', //总资产
                income: '', //累计收益
                positiveUrl: '', //身份证正面
                backUrl: '', //反面
                errorGoodsImg: 'this.src="' + require('@/assets/img/show.png') + '"', //初始图 已定不需要更改
                incomeOne: '', //银行卡一
                incomeTwo: '', //银行卡二
                bankOne: '', //开户银行一 名字
                bankTwo: '', //开户银行二
                bankidOne:'',
                bankidTwo:'',
                bank: '',
                oneIfShow: 'inline',
                ifShowOne: 'none',
                twoIfShow: 'inline',
                ifShowTwo: 'none',
                params: {
                    uid: '',
                    phone: '',
                    manager: '',
                    realStatus: ''
                }
            }
        },
        created() {
            this.search(1);
        },
        computed: {
   
        },
        watch: {
            params: {
                deep: true,
                handler: function (a, b) {
                    console.log(a, '新参数');
                    console.log(b, '老参数');
                }
            }
        },
        methods: {
            search(arg) { //搜索接口
                lookUser(arg).then(
                    res => {
                        if (res.status === 200) {
                            this.msg = res.data.data.user;
                            this.bank = res.data.data.bankInfo;
                            console.log(this.msg);
                            console.log(this.bank);

                            this.userNo = this.msg.userNo;
                            this.realName = this.msg.realName;
                            this.cardNo = this.msg.cardNo;
                            this.email = this.msg.email;
                            this.assets = this.msg.assets;
                            this.address = this.msg.address;
                            this.createAt = this.msg.createAt;
                            this.income = this.msg.income;
                            this.params.uid = this.msg.id;
                            this.params.phone = this.msg.phone;
                            this.params.manager = this.msg.manager;
                            // this.positiveUrl = this.msg.positiveUrl;
                            // this.backUrl = this.msg.backUrl;
                            if (this.bank.length == 0) {
                                this.ifShowThere = 'none';
                            } else if (this.bank.length == 1) {
                                this.ifShowFour = ' inline';
                                this.bankOne = this.bank[0].bankName;
                                this.incomeOne = this.bank[0].cardNumber;
                                this.bankidOne = this.bank[0].bid;
                            } else {
                                this.ifShowFour = ' inline';
                                this.ifShowFive = ' inline';
                                this.bankOne = this.bank[0].bankName;
                                this.incomeOne = this.bank[0].cardNumber;
                                 this.bankidOne = this.bank[0].bid;
                                this.bankTwo = this.bank[1].bankName;
                                this.incomeTwo = this.bank[1].cardNumber;
                                 this.bankidOne = this.bank[1].bid;
                            }

                            // this.total = res.data.data.user.length;
                            // console.log(this.total);
                            //   this.pageSize = ;
                        }
                    }
                );
            },
            amend() { //修改手机号
                this.isShowOne = false;
                this.ifShowOne = 'inline';
                this.oneIfShow = 'none';
            },
            transaction() { //交易记录
                console.log('交易记录')
            },
            investment() { //投资记录
                console.log('投资记录')
            },
            change() { //更换工号
                this.isShowTwo = false;
                this.ifShowTwo = 'inline';
                this.twoIfShow = 'none';
            },
            save(a) { //保存
                this.$confirm(`保存修改个人信息, 确认修改?`, '操作提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    amendUser(this.params.uid, this.params).then(
                        res => {
                            console.log(this.params)
                            console.log(res)
                            if (res.data.code === 0) {
                                this.$message({
                                    type: 'success',
                                    message: `修改成功!`
                                });
                                if (a === 1) {
                                    this.isShowOne = true;
                                    this.ifShowOne = 'none';
                                    this.oneIfShow = 'inline';
                                } else {
                                    this.isShowTwo = true;
                                    this.ifShowTwo = 'none';
                                    this.twoIfShow = 'inline';
                                }
                            } else {
                                this.$message({
                                    type: 'success',
                                    message: `修改失败!`
                                });
                            }
                        }
                    )
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
            },
            cancel(a) { //取消
                if (a === 1) {
                    this.isShowOne = true;
                    this.ifShowOne = 'none';
                    this.oneIfShow = 'inline';
                } else {
                    this.isShowTwo = true;
                    this.ifShowTwo = 'none';
                    this.twoIfShow = 'inline';
                }
            },
            cancelName() { //取消实名
                this.$confirm(`取消实名吗?`, '操作提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.params.realStatus = 3;
                     amendUser(this.params.uid, this.params).then(
                        res => {
                            console.log(this.params)
                            console.log(res)
                            if (res.data.code === 0) {
                                this.$message({
                                    type: 'success',
                                    message: `成功!`
                                });
                             this.ifShow = 'none';
                             this.ifShowThere = 'none';
                            } else {
                                this.$message({
                                    type: 'success',
                                    message: `失败!`
                                });
                            }
                        }
                    )
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
            },
            untieOne() { //解绑卡一

                this.$confirm(`确认解绑?`, '操作提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    bankcard(this.bankidOne).then(
                        res => {
                            console.log(res)
                            if (res.data.code === 0) {
                                this.ifShowFour = 'none';
                                this.bankOne = '';
                                if(this.bankTwo == ''){
                                   this.ifShowThere = 'none';
                                }
                                this.$message({
                                    type: 'success',
                                    message: `成功!`
                                });
                                
                            } else {
                                this.$message({
                                    type: 'success',
                                    message: `失败!`
                                });
                            }
                        }
                    )
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
            },
            untieTwo() { //解绑卡二
                this.$confirm(`确认解绑?`, '操作提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    bankcard(this.bankidTwo).then(
                        res => {
                            console.log(res)
                            if (res.data.code === 0) {
                                this.isShowFive = 'none';
                                this.bankTwo = '';
                                  if(this.bankOne == ''){
                                   this.ifShowThere = 'none';
                                }
                                this.$message({
                                    type: 'success',
                                    message: `成功!`
                                });
                            } else {
                                this.$message({
                                    type: 'success',
                                    message: `失败!`
                                });
                            }
                        }
                    )
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
            },
            back() { //返回

            }
        }
    }
</script>
<style lang="scss" scoped>
    .user {
        padding: 10px;
        border-bottom: 1px solid darkgray;
    }

    .lookuser {
        margin: 10px;

        border: 1px solid darkgray;
        border-radius: 10px;

        .listHead {
            margin: 0 10px 10px 10px;
            border: 1px solid darkgray;
            border-top: 0;
            padding: 10px;
        }
    }

    .title {
        border: 1px solid darkgray;
        margin: 10px 10px 0 10px;
        padding: 10px;
    }

    img {
        @include w-h(200px, 100px);
    }

    .back {
        margin: 10px;
    }
</style>