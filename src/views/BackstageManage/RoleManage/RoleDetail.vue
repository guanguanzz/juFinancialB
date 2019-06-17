<template>
  <div class="container">
    <div class="accountTitle">
      <span class="accountWord">新增账户</span>
    </div>

    <div class="input-panel">


      <div class="input-content">
        <span class="beforeWord">角色名</span>
        <el-input v-model="roleName" placeholder="请输入角色名"></el-input>
      </div>

      <div class="selectRight">
        <div class="bussiness">
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange(val)">业务管理
          </el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="bussinessText" @change="handleCheckedCitiesChange(value)">
            <el-checkbox v-for="bussiness in bussinessArr" :label="bussiness" :key="bussiness">{{bussiness}}</el-checkbox>
          </el-checkbox-group>
        </div>


        <div class="operate">
          <el-checkbox :indeterminate="isIndeterminate2" v-model="checkAll2" @change="handleCheckAllChange(val2)">运营管理
          </el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="operateText" @change="handleCheckedCitiesChange(value2)">
            <el-checkbox v-for="operate in operateArr" :label="operate" :key="operate">{{operate}}</el-checkbox>
          </el-checkbox-group>
        </div>





          
        <div class="statistics">
          <el-checkbox :indeterminate="isIndeterminate3" v-model="checkAll3" @change="handleCheckAllChange(val3)">统计信息
          </el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="statisticsText" @change="handleCheckedCitiesChange(value3)">
            <el-checkbox v-for="statistics in statisticsArr" :label="statistics" :key="statistics">{{statistics}}</el-checkbox>
          </el-checkbox-group>
        </div>


        <div class="backstage">
          <el-checkbox :indeterminate="isIndeterminate4" v-model="checkAll4" @change="handleCheckAllChange(val4)">后台管理
          </el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="backstageText" @change="handleCheckedCitiesChange(value4)">
            <el-checkbox v-for="backstage in backstageArr" :label="backstage" :key="backstage">{{backstage}}</el-checkbox>
          </el-checkbox-group>
        </div>
        </div>


      <div class="btn-panel">
        <el-button class="btn ensure" type="success">保存</el-button>
        <el-button class="btn cancel" type="danger">取消</el-button>
      </div>


    </div>



  </div>
</template>

<script>
  // const cityOptions = ['上海', '北京', '广州', '深圳'],
  const bussinessOptions = ['用户管理','实名认证','产品管理','债权管理','债券匹配',],
        operateOptions = ['内容管理','经理管理','意见反馈','版本管理']
        // statisticsOptions = ['销量统计'],
        // backstageOptions = ['账户管理','密码修改','角色管理','模块管理']


  export default {
    data() {
      return {
        checkAll: false,
        checkAll2: false,
        // checkAll3: false,
        // checkAll4: false,

        bussinessText: [],
        operateText: [],
        // statisticsText: [],
        // backstageText: [],

        // checkedCities: ['上海', '北京'],
        // cities: cityOptions,
        bussinessArr: bussinessOptions,
        operateArr: operateOptions,
        // statisticsArr: statisticsOptions,
        // backstageArr: backstageOptions,


        isIndeterminate: true,
        isIndeterminate2: true,



        roleName: "",

      }
    },
    methods: {
      handleCheckAllChange(val,val2,val3,val4) {
        // this.checkedCities = val ? cityOptions : [];
        this.bussinessText = val ? bussinessOptions : [];
        this.operateText = val2 ? operateOptions : [];


        this.isIndeterminate = false;
        this.isIndeterminate2 = false;





      },
      handleCheckedCitiesChange(value,value2,value3,value4) {
        let checkedCount1 = value.length;
        let checkedCount2 = value2.length;


        this.checkAll = checkedCount1 === this.bussinessArr.length;
        this.checkAll2 = checkedCount2 === this.operateArr.length;

        this.isIndeterminate = checkedCount1 > 0 && checkedCount1 < this.bussinessArr.length;
        this.isIndeterminate2 = checkedCount2 > 0 && checkedCount2 < this.operateArr.length;




      }

    }





  }
</script>

<style lang="scss" scoped>
  .container {
    border: 1px solid #F2F2F2;
    background-color: #fff;
  }

  .accountTitle {
    height: 40px;
    font-size: 18px;
    font-weight: bold;
    border: 1px solid #F2F2F2;
    line-height: 40px;

    .accountWord {
      margin-left: 15px;
    }
  }

  .input-content {
    display: flex;
    align-items: center;
    margin: 20px 0 20px 0;
    padding: 10px 35px 10px 35px;
  }

  .selectRight {}

  .input-panel {
    border: 1px solid #F2F2F2;
  }

  .beforeWord {
    width: 75px;
    font-size: 14px;
    color: #333;
  }

  .btn-panel {
    padding: 30px 0 30px 0;
    margin-left: 115px;
  }

  .btn {
    height: 40px;
    width: 140px;
    border-style: none;
    border-radius: 5px;
  }

  .btn.cancel {
    margin-left: 30px;
  }
</style>