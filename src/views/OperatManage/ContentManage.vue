
<template>
    <div>
        <div class='form-horizontal'>
            <el-row :gutter='20'>
                <el-col :span='6'>
                    <div class='form-group'>
                        <el-col :span='8' type="flex" justify="end">
                            <label class="form-lable">标题</label>
                        </el-col>
                        <el-col :span='16'>
                            <el-input v-model="title"></el-input>
                        </el-col>
                    </div>

                </el-col>
                <el-col :span='6'>
                    <div class='form-group'>
                        <el-col :span='8' type="flex" justify="end">
                            <label class="form-lable">编辑者</label>
                        </el-col>
                        <el-col :span='16'>
                            <el-input v-model="author"></el-input>
                        </el-col>

                    </div>
                </el-col>
                <el-col :span='12'>
                    <div class='form-group'>
                        <el-col :span='4' type="flex" justify="end">
                            <label class="form-lable">编辑时间</label>
                        </el-col>
                        <el-col :span='8'>
                            <el-date-picker type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-col>
                    </div>
                    <div class='form-group'>
                        <el-col :span='4' type="flex" justify="end">
                            <label class="form-lable2">~</label>
                        </el-col>
                        <el-col :span='8'>
                            <el-date-picker type="date" placeholder="选择日期">
                            </el-date-picker>
                        </el-col>
                    </div>

                </el-col>

            </el-row>


            <el-row :gutter='20'>
                <el-col :span='6'>
                    <div class='form-group'>

                        <el-col :span='8' type="flex" justify="end">
                            <label class="form-lable">状态</label>
                        </el-col>
                        <el-col :span='16'>
                            <el-select v-model="statuSelected">
                                <el-option v-for='(statu,index) in status' :key='index' :label="statu.message"
                                    :value='statu.value'></el-option>

                            </el-select>
                        </el-col>

                    </div>
                </el-col>
                <el-col :span='6'>

                    <div class='form-group'>
                        <el-col :span='8' type="flex" justify="end">
                            <label class="form-lable">类&emsp;型</label>
                        </el-col>
                        <el-col :span='16'>
                            <el-select v-model="typeSelected">
                                <el-option v-for='(type,index) in types' :key='index' :label="type.message"
                                    :value='type.value'></el-option>
                            </el-select>
                        </el-col>
                    </div>

                </el-col>

                <el-col :span='10' :offset='2'>
                    <el-button type="danger" round>清空</el-button>
                    <el-button type="success" round>搜索</el-button>
                </el-col>
            </el-row>

        </div>
        <!-- 表格 -->
        <div class='lists-panel'>
            <div class="list-header">
                <strong>内容列表</strong>
                <el-button class='add' size='mini' type="success">+新增</el-button>
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
                        <td>{{list.type}}</td>
                        <td>{{list.status}}</td>
                        <td>{{list.update_by}}</td>
                        <td>{{list.update_at}}</td>
                        <td>
                            <el-button size='mini'>下线</el-button>
                            <el-button size='mini'>编辑</el-button>
                            <el-button size='mini'>删除</el-button>
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                title: "",
                author: '',
                creatAt: '',
                creatEnd: '',
                lists: '',
                statuSelected: '',
                status: [{
                    message: '全部',
                    value: ''
                }, {
                    message: '草稿',
                    value: '0'
                }, {
                    message: '上线',
                    value: '1'
                }],
                typeSelected: '',
                types: [{
                    message: '全部',
                    value: ''
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
        }

    }
</script>
<style lang="scss" scoped>
    .form-horizontal {
        margin-bottom: 30px;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
        border: 1px solid #F2F2F2;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    }

    .form-group {
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

    .el-date-editor {
        width: 100%;
    }

    .el-row {
        margin-bottom: 20px;
    }


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

        table {
            width: 100%;
            border: 1px solid #eeeeee;
        }
    }

</style>