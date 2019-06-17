<template>

    <div class="container">

        <div class="user-list">
            <div class="userLsit-title">
                <span class="list-word">销量统计</span>

                <!-- <button class="btn add" @click="add">+新增</button> -->
                <!-- <el-button type="primary" size="mini" class="btn add" @click="add">+新增</el-button> -->
            </div>

            <div class="table-panel">
                <table class="table-set">
                    <thead>
                        <tr>
                            <th>序号</th>
                            <th>产品代码</th>
                            <th>产品名称</th>
                            <th>购买人数</th>
                            <th>购买次数</th>
                            <th>购买总额（元）</th>
                            <th>操作</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(item,index) in inform" :key="index">
                            <td>{{item.pid}}</td>
                            <td>{{item.productNo}}</td>
                            <td>{{item.productName}}</td>
                            <td>{{item.peoples}}</td>
                            <td>{{item.frequency}}</td>
                            <td>{{item.money | moneyChange}}</td>
                            <td>
                                <el-button size="mini" @click="viewDetail(item.pid)">查看明细</el-button>
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
            onsize: 1,
            totalPage: 10,


            }
        },
        created() {
            


        },
        methods:{
          handleCurrentChange(){

          },
          viewDetail(id){

          }

        }
    }
</script>

<style lang="scss" scoped>
   
</style>