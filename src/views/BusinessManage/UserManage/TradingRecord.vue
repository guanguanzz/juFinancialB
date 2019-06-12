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
                        <el-form-item label="交易类型">
                            <el-select v-model="type" placeholder="">
                                <el-option label="全部" value=""></el-option>
                                <el-option :value="index" v-for="(item,index) in totalType" :key="index">{{item}}
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="交易时间">
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
                        <el-form-item label="交易状态">
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
            <span>{{`${names}的交易记录`}}</span>
        </div>
        <div class="list">
            <table rules="none" class="listTwo">
                <tr>
                    <th v-for="(item,index) in listHead" :key="index">{{item}}</th>
                </tr>
                <tr v-for="(item,index) in msg " :key="index" :class="index%2==0?'cs':'sc'">
                    <td>{{+index+1}}</td>
                    <td>{{item.createAt}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.realName}}</td>
                    <td>{{item.transactionNo}}</td>
                    <td>{{item.productName}}</td>
                    <td>{{item.money}}</td>
                    <td>{{item.type}}</td>
                    <td>{{item.status}}</td>
                    <td>{{item.cardId}}</td>
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
                type: '',
                totalType: ['付款', '回款'],

                status: '',
                totalStatus: ['成功', '失败'],
                msg: '',
                names: '',
                listHead: ['序号', '交易时间', '手机号', '姓名', '交易流水', '产品名称', '交易金额(元)', '交易类型', '交易状态', '交易方式'],
                currentPage: 1,
                date1: '',
                date2: ''
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