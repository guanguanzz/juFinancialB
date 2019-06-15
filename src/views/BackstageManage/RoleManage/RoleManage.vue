<template>
    <div class="container">

        <div class="user-list">
            <div class="userLsit-title">
                <span class="list-word">用户列表</span>

                <!-- <button class="btn add" @click="add">+新增</button> -->
                <el-button type="primary" size="mini" class="btn add" @click="add">+新增</el-button>
            </div>

            <div class="table-panel">
                <table class="table-set">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>角色名</th>
                            <th>创建人</th>
                            <th>创建时间</th>
                            <th>更新人</th>
                            <th>更新时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(item, index) in inform" :key="index">
                            <td>{{item.rid}}</td>
                            <td>{{item.rolename}}</td>
                            <td>{{item.create_by}}</td>
                            <td>
                                <div>{{item.create_at | timeChange}}</div>
                                <!-- <div>{{item.create_at | formatDate2}}</div> -->
                            </td>
                            <td>{{item.update_by}}</td>
                            <td>
                                <div>{{item.update_at | timeChange}}</div>
                                <!-- <div>{{item.update_at | formatDate2}}</div> -->
                            </td>
                            <td>
                                <!-- <button class="btn edit">编辑</button> -->
                                <!-- <button class="btn delete">删除</button> -->

                                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
                                </el-button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div class="pagination">
                <el-pagination @current-change="handleCurrentChange" :current-page.sync="onsize" :page-size="10"
                    :total="totalPage" layout="prev, pager, next, jumper">
                </el-pagination>
            </div>
        </div>
    </div>
</template>


<script>
    import https from "@/api/BackstageManage/AccountList.js"

    export default {
        data() {
            return {
                inform: [],
                totalPage: 10,
                onsize: 1,


            }
        },
        created() {
            https.roleList()
                .then(res => {
                    this.inform = res.data.data.list
                    this.totalPage = res.data.data.total
                    this.onsize = res.data.data.size

                    console.log(res.data.data)
                    console.log(res.data.data.list)
                })

        }
    }
</script>

<style lang="scss" scoped>
    .container {
        background-color: #fff;
        padding: 30px;
    }

    .user-content {
        height: 25px;
    }

    .btn {
        padding: 7px 15px;
        line-height: 1.2;
        border-style: none;
        border: 1px solid ：#F2F2F2;
        font-weight: 500;
    }

    .btn.add {
        position: absolute;
        right: 20px;
    }

    .user-list {
        // padding: 12px 0 0 0;
        margin-top: 30px;
    }

    .userLsit-title {
        position: relative;
        display: flex;
        height: 50px;
        align-items: center;
        background-color: #fff;
        border: 1px solid #F2F2F2;

        .list-word {
            padding-left: 37px;
            color: black;
            font-weight: bold;
        }
    }

    .table-set {
        width: 100%;
        border: 1px solid;
        border-spacing: 0;
        border-collapse: collapse;

        th {
            border: 1px solid #F2F2F2;
            padding: 5px;
        }

        tr {
            height: 50px;
        }

        td {
            text-align: center;
            border: 1px solid #F2F2F2;
        }

    }

    .pagination {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 25px;
        margin-right: 40px;
        height: 50px;
        background-color: #fff;
    }
</style>