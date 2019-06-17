<template>
    <div class="nameList">
        <form class="listOne">
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-row :gutter="20" style="margin-bottom: 20px;">
                <el-col :span="6">
                    <el-form-item label="手机号码">
                        <el-input v-model="phone" placeholder="" ></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="6">
                    <el-form-item label="真实姓名">
                        <el-input v-model="realName" placeholder=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="申请日期">
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
                    <el-form-item label="用户编号">
                        <el-input v-model="userNo" placeholder=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="实名状态">
                        <el-select v-model="realStatus" placeholder="">
                            <el-option label="全部" value=""></el-option>
                            <el-option :value="index" v-for="(item,index) in totalStatus" :key="index">{{item}}
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="7" :offset="5">
                    <el-form-item>
                        <el-button type="primary" @click="seek">搜索</el-button>
                        <el-button type="danger" @click="empty">清空</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
              </el-form>
        </form>
        <div class="listHead">
            <span>实名列表</span>
        </div>
        <div class="list">
            <table rules="none" class="listTwo">
                <tr>
                    <th v-for="(item,index) in listHead" :key="index">{{item}}</th>
                </tr>
                <tr v-for="(item,index) in msg " :key="index" :class="index%2==0?'cs':'sc'">
                    <td>{{item.userNo}}</td>
                    <td>{{item.applyAt|timeFilters}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.realName}}</td>
                    <td>{{item.cardNo}}</td>
                    <td>{{item.realStatus|loStatusp}}</td>
                    <td>{{item.reason}}</td>
                    <td colspan="2">
                         <el-button :type="item.realStatus===0?'info':'danger'" size='small' @click="redact($event,item)">
                            {{item.realStatus|cancel}}</el-button>
                        <el-button type="primary" size='small' @click="Look(item)">查看</el-button>
                    </td>
                </tr>
            </table>
            <div class="block" style="margin-left: 40%;padding: 10px;">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page.sync="currentPage" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
    
</template>

<script>
    import '@/assets/scss/commonList.scss'
    import {
        getNameList
    } from '@/api/BusinessManage/NameApprove/NameList.js'
    import {
        time
    } from '@/utils/date.js'
    export default {
        data() {
            return {
                phone: '',
                realName: '',
                userNo: '', //用户编号
                // value1: '', //时间范围
                date1: '',
                date2: '',
                realStatus: '',//实名状态
                totalStatus: ['未认证', '已认证', '已取消', '已拒绝'],
                statusTotal:['审核','取消实名'],
                msg: '',
                names: '',
                listHead: ['用户编号', '申请时间', '手机号', '真实姓名', '身份证号', '实名状态', '拒绝理由', '操作'],
                currentPage: 1,
                formInline: {},
                pageSize: 10, //每页条数
                params: {
                    pageNum: this.currentPage,
                    pageCount: this.pageSize,
                    phone: this.phoneNumber,
                    realName: this.realName,
                    applyAtA: time(this.date1),
                    applyAtB: time(this.date2),
                    userNo:this.userNo,
                    realStatus:this.realStatus,
                },

            }
        },
        created(){
           this.search(this.params);
        },
        computed: {

        },
        filters:{
           loStatusp:function(value) {
              return value === 0 ? '未认证' : value === 1 ? '已认证' : value === 2 ? '已取消' : '已拒绝';
           },
           cancel:function(value){
               return value === 1 ? '取消实名' : '审核';
           }
        },
        methods: {
             search(arg) { //搜索接口
                getNameList(arg).then(
                    res => {
                        if (res.status === 200) {
                            this.msg = res.data.data.real;
                            console.log(this.msg)
                            // this.total = res.data.data.user.length;
                            // console.log(this.total);
                            //   this.pageSize = ;
                        }
                    }
                );
            },
            empty() {
                console.log('清空')
            },
            seek() {
                console.log('搜索');
                 this.search(this.params);
            },
            redact(el, item){

            },
            Look() {
                console.log('查看')
            },
            handleSizeChange(val) { // 每页多少
                console.log(`每页 ${val} 条`);
                 this.search(this.params);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                 this.search(this.params);
            }
        }

    }
  

</script>
<style lang="scss" scoped>
 

</style>