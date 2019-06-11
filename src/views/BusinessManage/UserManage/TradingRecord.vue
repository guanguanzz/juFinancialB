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
                    <div class="grid-content bg-purple">交易类型<select  v-model="type"
                            style="height: 42px; margin: 10px;">
                            <option value=''>全部</option>
                            <option :value="index" v-for="(item,index) in totalType" :key="index">{{item}}</option>
                        </select></div>
                </el-col>
                <el-col :span="11">
                    <div class="grid-content bg-purple">
                        <div class="block">
                            <span class="demonstration">交易时间</span>
                            <el-date-picker v-model="value1" type="daterange" range-separator="至"
                                style="  height: 42px; margin: 10px;" start-placeholder="开始日期" end-placeholder="结束日期">
                            </el-date-picker>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6.5">
                    <div class="grid-content bg-purple">交易状态<select v-model="status"
                            style="height: 42px; margin: 10px;">
                            <option value=''>全部</option>
                            <option :value="index" v-for="(item,index) in totalStatus" :key="index">{{item}}</option>
                        </select></div>
                </el-col>
                <el-col :span="17.5">
                    <div class="grid-content bg-purple">
                        <div class="block">
                            <div style="margin:10px 0 10px 285px;">
                                <button type="button" @click="empty" class="empty">清空</button>
                                <button @click="seek" type="button" class="seek">搜索</button>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
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
    export default {
        data() {
            return {
                productName:'',
                type: '',
                totalType: ['付款','回款'],
                value1: '', //时间范围
                status:'',
                totalStatus:['成功','失败'],
                msg: '',
                names:'',
                listHead: ['序号', '交易时间', '手机号', '姓名','交易流水', '产品名称', '交易金额(元)', '交易类型', '交易状态', '交易方式'],
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