<template>
  <div class="form-horizontal">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-col :span="7">
          <label class="form-lable">产品名称</label>
        </el-col>
        <el-col :span="17">
          <el-input v-model="searchData.productName" size="small"></el-input>
        </el-col>
      </el-col>

      <el-col :span="6">
        <el-col :span="7">
          <label class="form-lable">起息日期</label>
        </el-col>
        <el-col :span="17">
          <el-select v-model="searchData.startAt" placeholder="请选择" size="small">
            <el-option
              v-for="item in valueDate"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
      </el-col>

      <el-col :span="12">
        <el-col :span="4">
          <label class="form-lable">年化收益</label>
        </el-col>
        <el-col :span="8">
          <el-date-picker
            type="date"
            v-model="searchData.rateOfReturnA"
            size="small"
            placeholder="选择日期"
          ></el-date-picker>
        </el-col>
        <el-col :span="4">
          <label class="form-lable2">~</label>
        </el-col>
        <el-col :span="8">
          <el-date-picker
            type="date"
            size="small"
            v-model="searchData.rateOfReturnB"
            placeholder="选择日期"
          ></el-date-picker>
        </el-col>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="6">
        <el-col :span="7">
          <label class="form-lable">起投金额</label>
        </el-col>
        <el-col :span="17">
          <el-input v-model="searchData.minimum" size="small"></el-input>
        </el-col>
      </el-col>

      <el-col :span="6">
        <el-col :span="7" type="flex" justify="end">
          <label class="form-lable">状&emsp;&emsp;态</label>
        </el-col>
        <el-col :span="17">
          <el-select v-model="searchData.status" placeholder="请选择" size="small">
            <el-option
              v-for="item in status"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
      </el-col>

      <el-col :span="12">
        <el-col :span="4">
          <label class="form-lable">期&emsp;&emsp;限</label>
        </el-col>
        <el-col :span="4">
          <el-input v-model="searchData.timeLimitA" size="small"></el-input>
        </el-col>
        <el-col :span="4">
          <el-select v-model="term" placeholder="请选择" size="small">
            <el-option
              v-for="item in termData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <label class="form-lable2">~</label>
        </el-col>
        <el-col :span="4">
          <el-input v-model="searchData.timeLimitB" size="small"></el-input>
        </el-col>
        <el-col :span="4">
          <el-select v-model="term" placeholder="请选择" size="small">
            <el-option
              v-for="item in termData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="6">
        <el-col :span="7">
          <label class="form-lable">产品代号</label>
        </el-col>
        <el-col :span="17">
          <el-input v-model="searchData.productNo" size="mini"></el-input>
        </el-col>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="button-group">
        <el-button type="danger" icon="el-icon-delete" size="mini">清空</el-button>
        <el-button type="primary" icon="el-icon-search" v-on:click="getList()" size="mini">搜索</el-button>
      </el-col>
    </el-row>

    <!-- 表格 -->
    <div class="lists-panel">
      <div class="list-header">
        <strong>产品列表</strong>
        <el-button size="mini" type="primary" icon="el-icon-plus">新增</el-button>
      </div>
      <div class="body-panel">
        <table>
          <tr>
            <th>产品代号</th>
            <th>产品名称</th>
            <th>年化收益率(%)</th>
            <th>期限</th>
            <th>起头金额(元)</th>
            <th>起息日期</th>
            <th>推荐</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
          <tr v-for="(list,index) in lists" :key="index">
            <td>{{index+1}}</td>
            <td>{{list.title}}</td>
            <td>{{list.itype}}</td>
            <td>{{list.status|statusFilters}}</td>
            <td>{{list.update_by}}</td>
            <td>{{list.update_at*1000|timeFilters}}</td>
            <td>{{list.update_by}}</td>
            <td>{{list.update_at*1000|timeFilters}}</td>
            <td>
              <el-button
                size="mini"
                @click="changeStatus(list.id,list.status)"
              >{{list.status|upDownFilters}}</el-button>
              <el-button size="mini">编辑</el-button>
            </td>
          </tr>
        </table>
        <el-row>
          <el-col :span="24" class="pagination">
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page.sync="pages.onPage"
              :page-size="10"
              layout="prev, pager, next, jumper"
              :total="pages.total"
            ></el-pagination>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-dialog width="30%" title="操作提示" :visible="outerVisible"></el-dialog>
  </div>
</template>
<script>
import {
  getlist,
  changestatus,
  cut
} from "@/api/OperatManage/ContentManage.js";

export default {
  data: function() {
    return {
      //搜索条件
      searchData: {
        startAt: "",
        status: ""
      },
      //年化收益
      valueDate: [
        {
          value: "",
          label: "全部"
        },
        {
          value: "T+1",
          label: "正常"
        },
        {
          value: "T+0",
          label: "已冻结"
        }
      ],
      //状态
      status: [
        {
          value: "",
          label: "全部"
        },
        {
          value: "0",
          label: "停售"
        },
        {
          value: "1",
          label: "在售"
        }
      ],
      //期限
      termData: [
        {
          value: "1",
          label: "日"
        },
        {
          value: "2",
          label: "月"
        }
      ],
      //期限
      term: "1",
      outerVisible: false,
      pages: {
        onPage: 1,
        total: 100
      },
      //列表数据
      lists: [],
    };
  },
  created() {
    this.getList(this.pages.onPage);
  },
  methods: {
    getList(onPage, title, type, status, creatBy, creatAt, update_end) {
      getlist(onPage, title, type, status, creatBy, creatAt, update_end)
        .then(res => {
          console.log(res.data.data);
          this.lists = res.data.data;
        })
        .catch(res => {
          console.log(res);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.form-horizontal {
  margin-bottom: 30px;
  padding: 20px;
  padding-bottom: 0;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #f2f2f2;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.form-lable {
  display: block;
  width: 100%;
  line-height: 32px;
  text-align: right;
}

.form-lable2 {
  @extend .form-lable;
  text-align: center;
}
.button-group {
  display: flex;
  justify-content: flex-end;
}

.pagination {
  @extend .button-group;
  margin-top: 20px;
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
  border: 1px solid #f2f2f2;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

.list-header {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
  border-bottom: 1px solid #f2f2f2;

  strong {
    line-height: 28px;
  }
}

.body-panel {
  padding: 5px 15px;
}
</style>