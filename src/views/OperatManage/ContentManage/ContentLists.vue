<template>
    <div>
        <div class='form-horizontal'>
            <el-row :gutter='20'>
                <el-col :span='6'>

                    <div class='form-group'>
                        <el-row :gutter='20'>
                            <el-col :span='7' type="flex" justify="end">
                                <label class="form-lable">标题</label>
                            </el-col>
                            <el-col :span='17'>
                                <el-input v-model="title"></el-input>
                            </el-col>
                        </el-row>
                    </div>

                </el-col>
                <el-col :span='6'>
                    <div class='form-group'>
                        <el-row :gutter='20'>
                            <el-col :span='7' type="flex" justify="end">
                                <label class="form-lable">编辑者</label>
                            </el-col>
                            <el-col :span='17'>
                                <el-input v-model="author"></el-input>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span='6'>
                    <div class='form-group'>
                        <el-row :gutter='20'>
                            <el-col :span='8' type="flex" justify="end">
                                <label class="form-lable">编辑时间</label>
                            </el-col>
                            <el-col :span='16'>
                                <el-date-picker type="date" v-model="updateBegin" placeholder="选择日期"
                                    :picker-options='beginOptions'>
                                </el-date-picker>
                            </el-col>
                        </el-row>
                    </div>

                </el-col>
                <el-col :span='6'>
                    <div class='form-group'>
                        <el-row :gutter='20'>
                            <el-col :span='8' type="flex" justify="end">
                                <label class="form-lable2">~</label>
                            </el-col>
                            <el-col :span='16'>
                                <el-date-picker type="date" v-model="updateEnd" placeholder="选择日期"
                                    :picker-options='endOptions'>
                                </el-date-picker>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>

            </el-row>

            <el-row :gutter='20'>
                <el-col :span='6'>
                    <div class='form-group'>
                        <el-row :gutter='20'>
                            <el-col :span='7' type="flex" justify="end">
                                <label class="form-lable">状态</label>
                            </el-col>
                            <el-col :span='17'>
                                <el-select v-model="statuSelected">
                                    <el-option v-for='(statu,index) in status' :key='index' :label="statu.message"
                                        :value='statu.value'></el-option>

                                </el-select>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span='6'>

                    <div class='form-group'>
                        <el-row :gutter='20'>
                            <el-col :span='7' type="flex" justify="end">
                                <label class="form-lable">类&emsp;型</label>
                            </el-col>
                            <el-col :span='17'>
                                <el-select v-model="typeSelected">
                                    <el-option v-for='(type,index) in types' :key='index' :label="type.message"
                                        :value='type.value'></el-option>
                                </el-select>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span='24' class='button-group'>
                    <el-button type="danger" round @click='clear'>清空</el-button>
                    <el-button type="success" round
                        v-on:click='getList(1,title,typeSelected,statuSelected,author,updateBegin,updateEnd)'>搜索
                    </el-button>
                </el-col>
            </el-row>


        </div>
        <!-- 表格 -->
        <div class='lists-panel'>
            <div class="list-header">
                <strong>内容列表</strong>
                <el-button class='add' size='mini' type="success" @click='add'>+新增</el-button>
            </div>
            <div class="body-panel">


                <table>
                    <tr>
                        <th>序号</th>
                        <th>标题</th>
                        <th>类型</th>
                        <th>状态</th>
                        <th>编辑者</th>
                        <th>编辑时间</th>
                        <th>操作</th>
                    </tr>
                    <tr v-for='(list,index) in lists' :key=index>
                        <td>{{index+1}}</td>
                        <td>{{list.title}}</td>
                        <td>{{list.itype}}</td>
                        <td :class="list.status===1 ? 'red' : 'green'">{{list.status|statusFilters}}</td>
                        <td>{{list.updateBy}}</td>
                        <td>{{list.updateAt*1000|timeFilters}}</td>
                        <td>
                            <el-button size='mini' @click='changeStatus(list.id,list.status)'
                                :class="list.status===2 ? 'red' : 'green'">
                                {{list.status|upDownFilters}}</el-button>
                            <el-button size='mini' @click='edit(list.id)'>编辑</el-button>
                            <el-button size='mini' @click='cutOut(list.id)'>删除</el-button>
                        </td>
                    </tr>
                </table>

                <!-- 
                <el-table :data='lists' style='width:100%' stripe>
                    <el-table-column type='index' align='center'></el-table-column>
                    <el-table-column label='标题' prop='title' header-align='center' align='center'></el-table-column>
                    <el-table-column label='类型' prop='itype' header-align='center' align='center'></el-table-column>

                    <el-table-column label='状态' prop='status' header-align='center' align='center' width='50px'>
                    </el-table-column>

                    <el-table-column label='编辑者' prop='update_by' header-align='center' align='center'>
                    </el-table-column>

                    <el-table-column label='编辑时间' prop='updateAt' header-align='center' align='center'>
                    </el-table-column>
                    <el-table-column label="操作" header-align='center' align='center'>

                        <el-button size="mini">上线</el-button>
                        <el-button size="mini">编辑</el-button>
                        <el-button size="mini" type="danger">删除
                        </el-button>

                    </el-table-column>
                </el-table> -->
                <el-row>
                    <el-col :span='24' class="pagination">
                        <el-pagination @current-change="handleCurrentChange" :current-page.sync="onPage" :page-size="10"
                            layout="total, prev, pager, next,jumper" :total="total">
                        </el-pagination>
                    </el-col>
                </el-row>
            </div>

        </div>
        <!-- <el-dialog width='30%' title='操作提示' :visible='outerVisible'>
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="outerVisible = false">取 消</el-button>
                <el-button type="primary" @click="outerVisible = false">确 定</el-button>
            </span>
        </el-dialog> -->
    </div>
</template>
<script>
    import {
        getlist,
        changestatus,
        cut
    } from '@/api/OperatManage/ContentManage/ContentLists.js'
    import {
        time
    } from '@/utils/date.js'

    export default {
        data: function () {
            return {
                //开始日期规则  小于当天且小于结束日期
                beginOptions: this.beginDate(),
                //结束日期规则 小于当天且大于开始日期
                endOptions: this.endDate(),
                outerVisible: false,
                // pages: {
                onPage: 1,
                total: 100,
                // },
                title: null,
                author: null,
                updateBegin: null,
                updateEnd: null,
                lists: [],
                statuSelected: null,
                status: [{
                    message: '全部',
                    value: null
                }, {
                    message: '草稿',
                    value: 1
                }, {
                    message: '上线',
                    value: 2
                }],
                typeSelected: null,
                types: [{
                    message: '全部',
                    value: null
                }, {
                    message: 'banner推荐',
                    value: 'banner推荐'
                }, {
                    message: '帮助中心',
                    value: '帮助中心'
                }, {
                    message: '关于我们',
                    value: '关于我们'
                }],
            }
        },
        created() {
            this.getList(this.onPage,this.title,this.typeSelected,this.statuSelected, this.author, this.updateBegin, this.updateEnd)
        },
        methods: {
            //开始日历
            beginDate() {
                let self = this
                return {
                    disabledDate(time) {
                        if (self.updateEnd) {
                            return time.getTime() > self.updateEnd //结束时间存在时，结束时间之后的天数都被禁用
                        } else {
                            return time.getTime() > Date.now() //结束时间不选时，结束时间最大值小于等于当天
                        }
                    }
                }
            },
            //提出结束时间必须大于提出开始时间
            endDate() {
                let self = this
                return {
                    disabledDate(time) {
                        if (self.updateBegin) {
                            return time.getTime() < self.updateBegin || time.getTime() > Date.now()
                        } else {
                            return time.getTime() > Date.now() //开始时间不选时，结束时间最大值小于等于当天
                        }
                    }
                }
            },
            //情况
            clear() {
                this.title = this.author = this.updateBegin = this.updateEnd = this.typeSelected = this
                    .statuSelected = null
            },
            //新增
            add() {
                this.$router.push({
                    name: 'contentDetails'
                })
            },
            //分页栏改变当前页
            handleCurrentChange() {
                // console.log(this.onPage)
                this.getList(this.onPage, this.title, this.typeSelected, this.statuSelected, this.author, 
                this.updateBegin, this.updateEnd)
            },
            //获取列表
            getList(onPage, title, type, status, creatBy, updateBegin, updateEnd) {
                let start = time(updateBegin)
                let end = time(updateEnd)
                getlist(onPage, title, type, status, creatBy, start, end)
                    .then((res) => {
                        console.log(res.data.data)
                        console.log(res)
                        this.lists = res.data.data
                        this.total = res.data.page.total
                        this.onPage=onPage
                    })
                    .catch((res) => {
                        console.log(res)
                    })
            },
            //上下线
            changeStatus(id, status) {
                // this.outerVisible = true
                let msg = ''
                //变为目的状态
                switch (status) {
                    case 1:
                        msg = '确认上线？';
                        status = 2;
                        break;
                    case 2:
                        msg = '确认下线？';
                        status = 1;
                        break;
                }
                this.$confirm(msg,'操作提示', {
                        dangerouslyUseHTMLString:true,
                        message:`<div><i class='el-icon-warning' style='font-size:25px;color:#E6A23C;display: block;text-align:center'></i>
                                <div style='text-align:center;margin: 20px 0;'>${msg}</div></div>`
                    })
                    .then(() => {
                        //确认则发起改变状态请求        
                        changestatus(id, status)
                            //成功则弹出成功信息
                            .then((res) => {
                                switch (status) {
                                    case 1:
                                        msg = '下线成功';
                                        break;
                                    case 2:
                                        msg = '上线成功';
                                        break;
                                }
                                this.$message({
                                     type: 'success',
                                     message:msg,
                                })
                            })
                            //重新请求当前数据
                            .then(() => {
                                this.getList(this.onPage, this.title, this.typeSelected, this
                                    .statuSelected, this.author, this
                                    .updateBegin, this.updateEnd)
                            })
                            .catch((res) => {
                                console.log(res)
                            })
                    })
                    .catch((res) => {
                        console.log(res)
                    })
            },
            //进入标记页
            edit(id) {
                this.$router.push({
                    path: "contentDetails",
                    query: {
                        id,
                    }
                })
            },
            //删除
            cutOut(id) {
                this.$confirm('确认删除吗？','操作提示', {
                        dangerouslyUseHTMLString:true,
                        // type: 'warning',
                        // center: true,
                        message:<div><i class='el-icon-warning  message_icon' ></i>
                                <div class='message_content'>确认要删除吗?</div></div>
                    })
                    //确认则发起删除请求
                    .then(() => {
                        cut(id)
                            .then(() => {
                                this.$message({
                                     type: 'success',
                                     message:'删除成功'
                                })
                            })
                            .catch((res) => {
                                console.log(res)
                            })
                    })
                    //删除成功后重新请求界面
                    .then(() => {
                        this.getList(this.onPage, this.title, this.typeSelected, this
                            .statuSelected, this.author, this
                            .updateBegin, this.updateEnd)
                    })
                    //任何错误都会打断此过程
                    .catch((res) => {
                        console.log(res)
                    })
            }
        }

    }
</script>
<style lang="scss" scoped>
    .message_icon{
        display: block;
        color:#E6A23C;
        text-align: center ;
        font-size: 25px;
    }
    .message_content{
        text-align: center;
        margin:20px 0;
    }
    .form-horizontal {
        margin-bottom: 30px;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
        border: 1px solid #F2F2F2;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    }

    .form-group {
        margin-bottom: 20px;

        .form-lable {
            display: block;
            height: 40px;
            width: 100%;
            line-height: 40px;
            text-align: right;
        }

        .form-lable2 {
            @extend .form-lable;
            text-align: center;
        }
    }

    .button-group {
        display: flex;
        justify-content: flex-end;
    }

    .pagination {
        @extend .button-group;
        margin-top: 20px;
    }

    .el-date-editor,
    .el-select {
        width: 100%;
    }

    // .el-row {
    //     margin-bottom: 20px;
    // }

    .lists-panel {
        background-color: #fff;
        border-radius: 5px;
        border: 1px solid #F2F2F2;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    }

    .list-header {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        padding: 5px 15px;
        border-bottom: 1px solid #F2F2F2;

        strong {
            line-height: 28px;
        }
    }

    .body-panel {
        padding: 5px 15px;
    }

    .green {
        color: #008000;
    }

    .red {
        color: #FF0000;
    }
</style>