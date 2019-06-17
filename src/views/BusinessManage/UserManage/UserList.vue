<template>
    <div class="secondPageContent">
        <form class="listOne">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-form-item label="手机号码">
                            <el-input v-model="phoneNumber" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="真实姓名">
                            <el-input v-model="realName" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="注册日期">
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="开始日期" v-model="date1" style="width: 100%;">
                                </el-date-picker>
                            </el-col>
                            <el-col class="line" :span="2" style="    text-align: center;">-</el-col>
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="结束日期" v-model="date2" style="width: 100%;">
                                </el-date-picker>
                            </el-col>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-form-item label="理财经理">
                            <el-input v-model="manager" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="账户状态">
                            <el-select v-model="status" placeholder="">
                                <el-option label="全部" value=""></el-option>
                                <el-option :value="index" v-for="(item,index) in totalStatus" :key="index"
                                    :label="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6" :offset="6">
                      
                            <el-button type="primary" @click="seek">搜索</el-button>
                            <el-button type="danger" @click="empty">清空</el-button>
                      
                    </el-col>
                </el-row>
            </el-form>
        </form>
        <div class="listHead">
            <span>用户列表</span>
        </div>
        <div class="list">
            <table rules="none" class="listTwo">
                <tr>
                    <th v-for="(item,index) in listHead" :key="index">{{item}}</th>
                </tr>
                <tr v-for="(item,index) in msg " :key="index" :class="index%2==0?'cs':'sc'">
                    <td>{{item.userNo}}</td>
                    <td>{{item.createAt|timeChange}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.manager}}</td>
                    <td>{{item.realName}}</td>
                    <td>{{item.assets}}</td>
                    <td>{{item.income}}</td>
                    <td>{{item.status|loStatus(totalStatus[0],totalStatus[1])}}</td>
                    <td colspan="2">
                        <el-button :type="item.status===0?'info':'danger'" size='small' @click="redact($event,item)">
                            {{item.status|loStatus(statusTotal[0],statusTotal[1])}}</el-button>
                        <el-button type="primary" size='small' @click="Look(item)">查看</el-button>
                    </td>
                </tr>
            </table>
            <el-row :gutter="20">
                <el-col :span="14" :offset="10">
                    <div class="grid-content bg-purple">
                        <div class="block" style="padding: 20px 0;">
                            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                :current-page.sync="currentPage" :page-size="pageSize"
                                layout="total,prev, pager, next, jumper" :total="total">
                            </el-pagination>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import '@/assets/scss/commonList.scss'
    import {
        getList,
        amendUser
    } from '@/api/BusinessManage/UserManage/UserList.js'
    import {
        time
    } from '@/utils/date.js'

    export default {
        data() {
            return {
                phoneNumber: '',
                realName: '',
                manager: '',
                status: '', //账户状态
                totalStatus: ['冻结', '正常'],
                statusTotal: ['解冻', '冻结'],
                listHead: ['用户编号', '注册日期', '手机号', '理财经理', '真实姓名', '总资产(元)', '累计收益(元)', '账户状态', '操作'],
                msg: '',
                currentPage: 1, //当前页
                formInline: {},
                // form:[date1,date2],
                date1: '',
                date2: '',
                total: 100,
                pageSize: 10, //每页条数
                params: {
                    pageNum: this.currentPage,
                    pageCount: this.pageSize,
                    phone: this.phoneNumber,
                    realName: this.realName,
                    createAtA: time(this.date1),
                    createAtB: time(this.date2),
                    manager: this.manager,
                    status: this.status
                },
            }
        },
        created() {
            // let params = {
            //     pageNum: this.currentPage,
            //     pageCount: this.pageSize
            // };

            this.search(this.params);
        },
        computed: {

        },
        methods: {
            search(arg) { //搜索接口
                getList(arg).then(
                    res => {
                        if (res.status === 200) {
                            this.msg = res.data.data.user;
                            console.log(this.msg)

                            // this.total = res.data.data.user.length;
                            console.log(this.total);
                            //   this.pageSize = ;
                        }
                    }
                );
            },
            empty() {
                console.log('清空')
                console.log(this.params, '搜索3');
                this.params = {};
                console.log(this.params, '搜索3');
            },
            seek() {
                console.log(this.params, '搜索2');
                this.search(this.params);

            },
            redact(el, item) { //冻结 解冻
                console.log(item.id, item.status, "ID")
                var formDataTwo = new FormData();
                formDataTwo.append('status', item.status);
                
                this.$confirm(`此操作将${el.target.innerText}账户, 是否继续?`, '操作提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    amendUser(item.id, formDataTwo).then(
                        res => {
                            console.log(res)
                            if (res.data.code === 0) {
                                this.$message({
                                    type: 'success',
                                    message: `${el.target.innerText}成功!`
                                });
                            }else{
                                 this.$message({
                                    type: 'success',
                                    message: `${el.target.innerText}失败!`
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
            Look() {

                console.log('查看')
            },
            handleSizeChange(val) { // 每页多少
                this.search(this.params);
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.search(this.params);
                console.log(`当前页: ${val}`);
            },
        }
    }
</script>
<style lang="scss" scoped>

</style>