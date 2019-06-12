<template>
    <div class="secondPageContent">
        <form class="listOne">
            <!-- 以下用了饿了么的栅格布局 -->
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-row :gutter="20" style="margin-bottom: 20px;">

                    <el-col :span="6">
                        <el-form-item label="产品名称">
                            <el-input v-model="productName" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="6">
                        <el-form-item label="出借合同编号">
                            <el-input v-model="loanSequence" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="起息日期">
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
                        <el-form-item label="债权协议编号">
                            <el-input v-model="claimSequence" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="6">
                        <el-form-item label="投资状态">
                            <el-select v-model="status" placeholder="">
                                <el-option label="全部" value=""></el-option>
                                <el-option :value="index" v-for="(item,index) in totalStatus" :key="index">{{item}}
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="到期日期">
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="开始日期" v-model="date3" style="width: 100%;">
                                </el-date-picker>
                            </el-col>
                            <el-col class="line" :span="2" style="    text-align: center;">-</el-col>
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="结束日期" v-model="date4" style="width: 100%;">
                                </el-date-picker>
                            </el-col>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12" :offset="12">
                        <el-form-item>
                            <el-button type="primary" @click="seek">搜索</el-button>
                            <el-button type="danger" @click="empty">清空</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </form>
        <div class="listHead">
            <span>{{`${names}的投资记录`}}</span>
        </div>
        <div class="list">
            <table rules="none" class="listTwo">
                <tr>
                    <th v-for="(item,index) in listHead" :key="index">{{item}}</th>
                </tr>
                <tr v-for="(item,index) in msg " :key="index" :class="index%2==0?'cs':'sc'">
                    <td>{{+index+1}}</td>
                    <td>{{item.startAt}}</td>
                    <td>{{item.endAt}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.realName}}</td>
                    <td>{{item.productName}}</td>
                    <td>{{item.contractNo}}</td>
                    <td>{{item.totalMoney}}</td>
                    <td>{{item.unallocated}}</td>
                    <td>{{item.allocated}}</td>
                    <td>{{item.status}}</td>
                    <td>{{item.protocol}}</td>
                </tr>
            </table>
            <div class="block" style="margin-left: 50%;padding: 10px;">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page.sync="currentPage" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/assets/scss/commonList.scss'
    export default {
        data() {
            return {
                productName: '',
                loanSequence: '', //出借合同编号
                // value1: '', //起息时间范围
                date1: '',
                date2: '',
                date3: '',
                date4: '',
                // value2: '', //到期时间范围
                claimSequence: '', //债权协议编号
                status: '',
                totalStatus: ['投资中', '退出中'],
                msg: '',
                names: '',
                listHead: ['序号', '起息日期', '到期日期', '手机号', '姓名', '产品名称', '出借合同编号', '投资金额(元)', '未分配收益(元)', '已分配收益(元)',
                    '投资状态', '债权协议编号'
                ],
                currentPage: 1,
            }
        },
        computed: {

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