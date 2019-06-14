<template>
  <div class="secondPageContent">
    <form class="listOne">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-row :gutter="20" style="margin-bottom: 20px;">
          <el-col :span="6">
            <el-form-item label="手机号码">
              <el-input v-model="phone" placeholder></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="真实姓名">
              <el-input v-model="realName" placeholder></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="申请日期">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="开始日期" v-model="date1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2" style="    text-align: center;">-</el-col>
              <el-col :span="11">
                <el-date-picker type="date" placeholder="结束日期" v-model="date2" style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="用户编号">
              <el-input v-model="sequence" placeholder></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="实名状态">
              <el-select v-model="authentication" placeholder>
                <el-option label="全部" value></el-option>
                <el-option :value="index" v-for="(item,index) in totalStatus" :key="index">{{item}}</el-option>
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
      <span>实名列表</span>
    </div>
    <div class="list">
      <table rules="none" class="listTwo">
        <tr>
          <th v-for="(item,index) in listHead" :key="index">{{item}}</th>
        </tr>
        <tr v-for="(item,index) in msg " :key="index" :class="index%2==0?'cs':'sc'">
          <td>{{item.userNo}}</td>
          <td>{{item.applyAt}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.realName}}</td>
          <td>{{item.cardNo}}</td>
          <td>{{item.authentication}}</td>
          <td>{{item.reason}}</td>
          <td colspan="2">
            <a href="javascript:;" @click="redact(item)">{{makeStatus}}</a>
            <a href="javascript:;" @click="Look(item)">查看</a>
          </td>
        </tr>
      </table>
      <div class="block" style="margin-left: 50%;padding: 10px;">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/scss/commonList.scss";
export default {
  data() {
    return {
      phone: "",
      realName: "",
      sequence: "", //用户编号
      // value1: '', //时间范围
      date1: "",
      date2: "",
      authentication: "",
      totalStatus: ["已认证", "未认证", "已拒绝", "已取消"],
      msg: "",
      names: "",
      listHead: [
        "用户编号",
        "申请时间",
        "手机号",
        "真实姓名",
        "身份证号",
        "实名状态",
        "拒绝理由",
        "操作"
      ],
      currentPage: 1
    };
  },
  computed: {},
  methods: {
    empty() {
      console.log("清空");
    },
    seek() {
      console.log("搜索");
    },
    Look() {
      console.log("查看");
    },
    handleSizeChange(val) {
      // 每页多少
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>