<template>
    <div class="container">

        <div class="user-list">
            <div class="userLsit-title">
                <span class="list-word">模块管理</span>

                <!-- <button class="btn add" @click="add">+新增</button> -->
                <el-button type="primary" size="mini" class="btn add" @click="add">+新增</el-button>
            </div>

            <div class="table-panel">
                <table class="table-set">
                    <thead>
                        <tr>
                            <th>模块ID</th>
                            <th>模块名</th>
                            <th>模块对应url地址</th>
                            <th>父模块ID</th>
                            <!-- <th>模块类型</th> -->
                            <th>请求方式</th>
                            <th>更新时间</th>
                            <th>更新人ID</th>
                            <th>创建时间</th>
                            <th>创建人ID</th>
                            <th>操作</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(item, index) in inform" :key="index">
                            <td>{{item.mid}}</td>
                            <td>{{item.moduleName}}</td>
                            <td>{{item.moduleUrl}}</td>
                            <td>{{item.fid}}</td>
                            <!-- <td>{{web}}</td> -->
                            <td>{{item.method}}</td>
                            <td>
                                <div>{{item.updateAt | timeFilters}}</div>
                                 <!-- <div>{{item.update_at | formatDate2}}</div> -->
                            </td>
                            <td>{{item.updateBy}}</td>
                            <td>
                                <div>{{item.createAt | timeFilters}}</div>
                                <!-- <div>{{item.create_at | formatDate2}}</div> -->
                            </td>
                            <td>{{item.createBy}}</td>
                            <td>
                                <!-- <button class="btn edit">编辑</button> -->
                                <!-- <button class="btn delete">删除</button> -->
                                <el-button size="mini" @click="editBtn">编辑</el-button>
                                <el-button size="mini" type="danger" @click="deleteBtn">删除
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
                totalPage:10,
                onsize:1,



            }
        },
        created() {
            https.moduleList()
                .then(res => {
                    this.inform = res.data.data.list
                    this.totalPage = res.data.data.total
                    this.onsize = res.data.data.size

                    console.log(res.data.data)
                    console.log(res.data.data.list)
                })



        },
        methods:{
            handleCurrentChange(){

            },
            add(){

            },
            editBtn(){

            },
            deleteBtn(){
                
            }

        }
    }
</script>

<style lang="scss" scoped>
   
</style>