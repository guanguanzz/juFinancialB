<template>
    <div class="secondPageContent">
        <form class="listOne">
            <!-- 以下用了饿了么的栅格布局 -->
            <el-row :gutter="20">
                <el-col :span="6.5">
                    <div class="grid-content bg-purple">产品名称<input type="text" name="productName" v-model="productName"
                            autocomplete="off"></div>
                </el-col>
                <el-col :span="6.5">
                    <div class="grid-content bg-purple">出借合同编号<input type="text" name="loanSequence" v-model="loanSequence"></div>
                </el-col>
                <el-col :span="11">
                    <div class="grid-content bg-purple">
                        <div class="block">
                            <span class="demonstration">起息日期</span>
                            <el-date-picker v-model="value1" type="daterange" range-separator="至"
                                style="  height: 42px; margin: 10px;" start-placeholder="开始日期" end-placeholder="结束日期">
                            </el-date-picker>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6.5">
                    <div class="grid-content bg-purple">债权协议编号<input type="text" name="claimSequence" v-model="claimSequence"
                            autocomplete="off"></div>
                </el-col>
                <el-col :span="6.5">
                    <div class="grid-content bg-purple">投资状态<select  v-model="status"
                            style="height: 42px; margin: 10px;">
                            <option value=''>全部</option>
                            <option :value="index" v-for="(item,index) in totalStatus" :key="index">{{item}}</option>
                        </select></div>
                </el-col>
                <el-col :span="11">
                    <div class="grid-content bg-purple">
                        <div class="block">
                            <span class="demonstration">到期日期</span>
                            <el-date-picker v-model="value2" type="daterange" range-separator="至"
                                style="  height: 42px; margin: 10px;" start-placeholder="开始日期" end-placeholder="结束日期">
                            </el-date-picker>
                        </div>
                    </div>
                </el-col>
            </el-row>
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
    export default {
        data() {
            return {
                productName:'',
                loanSequence: '',//出借合同编号
                value1: '', //起息时间范围
                value2: '', //到期时间范围
                claimSequence:'',//债权协议编号
                status:'',
                totalStatus:['投资中','退出中'],
                msg: '',
                names:'',
                listHead: ['序号', '起息日期', '到期日期','手机号', '姓名', '产品名称', '出借合同编号','投资金额(元)', '未分配收益(元)', '已分配收益(元)', '投资状态','债权协议编号'],
                currentPage:1,
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
            handleSizeChange(val) {// 每页多少
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }

    }
</script>
<style lang="scss" scoped>
    // .secondPageContent {
    //     float: right;
    //     @include w-h(80%, calc(100% - 60px));
    //     background-color: #f5f5f5;

    // }

    // @media (max-width: 940px) {
    //     .secondPageContent {
    //         @include w-h(70%, calc(100% - 60px));
    //     }
    // }

    select {
        @include w-h(166px, 34px);
        border: 1px solid #DCDFE6;
        border-radius: 8px;
        outline: none;
    }



    .listOne {
        position: relative;
        margin: 20px;
        padding: 20px;
        border: 1px solid darkgray;
        border-radius: 10px;
        background-color: white;

        input {
            margin: 10px;
            border: 1px solid #DCDFE6;
            height: 40px;
            border-radius: 5px;
            outline: none;
        }

        button {
            border: 0;
            border-radius: 5px;
            @include w-h(60px, 40px);
            margin-right: 20px;
        }
    }

    .listHead {
        @include flex(space-between, center);
        margin: 20px 20px 0 20px;
        padding: 10px;
        border: 1px solid darkgray;
        border-radius: 10px 10px 0 0;
    }

    .list {
        margin: 0 20px 20px 20px;
        padding: 10px;
        border: 1px solid darkgray;
        border-radius: 0 0 10px 10px;
        border-top: 0;
    }

    .listTwo {
        border: 1px solid darkgray;
        @include w-h(100%, 100%);
        background-color: white;
        text-align: center;

        tr {
            border-bottom: 1px solid darkgray;
        }

        img {
            @include w-h(50px, 50px);
        }
    }

    a {
        padding-left: 5px;
        color: darkblue;
        text-decoration: none;
    }

    .cs {
        background-color: #f5f5f5;
    }

    .sc {
        background-color: white;
    }

    .empty {
        color: white;
        background-color: brown;
    }

    .seek {
        color: white;
        background-color: darkcyan;
    }
</style>