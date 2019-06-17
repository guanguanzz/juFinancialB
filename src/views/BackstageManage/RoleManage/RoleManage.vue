<template>
    <div class="container">

        <div class="user-list">
            <div class="userLsit-title">
                <span class="list-word">角色管理</span>

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
                            <td>{{item.createBy}}</td>
                            <td>
                                <div>{{item.createAt | timeFilters}}</div>
                                <!-- <div>{{item.create_at | formatDate2}}</div> -->
                            </td>
                            <td>{{item.updateBy}}</td>
                            <td>
                                <div>{{item.updateAt | timeFilters}}</div>
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

        },
        methods:{
            add(){
                this.$router.push("roleDetail")
            },
            handleCurrentChange(){

            }
            
        }
    }
</script>

<style lang="scss" scoped>
    
</style>