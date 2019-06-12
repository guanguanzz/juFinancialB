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
                            <el-input v-model="name" placeholder=""></el-input>
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
                                <el-option :value="index" v-for="(item,index) in totalStatus" :key="index">{{item}}
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6" :offset="6">
                        <el-form-item>
                            <el-button type="primary" @click="seek">搜索</el-button>
                            <el-button type="danger" @click="empty">清空</el-button>
                        </el-form-item>
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
                    <td>{{item.createAt}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.manager}}</td>
                    <td>{{item.realName}}</td>
                    <td>{{item.assets}}</td>
                    <td>{{item.income}}</td>
                    <td>{{item.status}}</td>
                    <td colspan="2">
                        <a href="javascript:;" @click="redact(item)">{{makeStatus}}</a>
                        <a href="javascript:;" @click="Look(item)">查看</a>
                    </td>
                </tr>
            </table>
            <el-row :gutter="20">
                <el-col :span="14" :offset="10">
                    <div class="grid-content bg-purple">
                        <div class="block" style="padding: 20px 0;">
                            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                :current-page.sync="currentPage" :page-size="100" layout="prev, pager, next, jumper"
                                :total="1000">
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
    import {getList} from '@/api/BusinessManage/UserManage/UserList.js'
    export default {
        data() {
            return {
                phoneNumber: '',
                name: '',
                manager: '',
                status: '', //账户状态
                totalStatus: ['投资中', '回款中', '退款中'],
                value1: '', //时间范围
                listHead: ['用户编号', '注册日期', '手机号', '理财经理', '真实姓名', '总资产(元)', '累计收益(元)', '账户状态', '操作'],
                msg: '',
                currentPage: 1,
                formInline: {},
                // form:[date1,date2],
                date1: '',
                date2: '',
            }
        },
        created(){
               getList(); 
        },
        computed: {
            makeStatus: function () {
                if (this.status === 0) {
                    return '解冻'
                } else {
                    return '冻结'
                }
            }
        },
        methods: {
            empty() {
                console.log('清空')
            },
            seek() {
                console.log('搜索')
            },
            Look() {
                console.log('查看')
            },
            handleSizeChange(val) { // 每页多少
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }

    }
</script>
<style lang="scss" scoped>

</style>