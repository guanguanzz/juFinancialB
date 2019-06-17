<template>
  <div class="panel">
    <div class="panel-title">新增</div>
    <div class="panel-body">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px" size="small">
        <el-row :gutter="50">
          <el-col :span="8">
            <el-form-item label="产品代号" prop="productNo">
              <el-input :disabled="isDisabled" v-model="form.productNo"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" style="position:relative">
            <el-form-item label="年化收益" prop="rateOfReturn">
              <el-input :disabled="isDisabled" v-model="form.rateOfReturn"></el-input>
              <span style="position:absolute;right:-30px">(%)</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="还款方式" prop="repayment">
              <el-select
                :disabled="isDisabled"
                v-model="form.repayment"
                placeholder="请选择"
                clearable
                style="width:100%"
              >
                <el-option
                  v-for="item in repayMent"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="50">
          <el-col :span="8">
            <el-form-item label="产品名称" prop="productName">
              <el-input :disabled="isDisabled" v-model="form.productName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" style="position:relative">
            <el-form-item label="起投金额" prop="minimum">
              <el-input :disabled="isDisabled" v-model="form.minimum"></el-input>
              <span style="position:absolute;right:-30px">(元)</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="起息日期" prop="startAt">
              <el-select
                :disabled="isDisabled"
                v-model="form.startAt"
                placeholder="请选择"
                clearable
                style="width:100%"
              >
                <el-option
                  v-for="item in valueDate"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="50">
          <el-col :span="8">
            <el-form-item prop="timeLimit">
              <span slot="label">期&emsp;&emsp;限</span>
              <el-input :disabled="isDisabled" v-model="form.timeLimit" style="width:60%"></el-input>
              <span style="width:10%;display: inline-block;"></span>
              <el-select
                :disabled="isDisabled"
                v-model="term"
                placeholder="请选择"
                clearable
                style="width:30%"
              >
                <el-option
                  v-for="item in termData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="50">
          <el-col :span="16">
            <el-form-item>
              <span slot="label">备&emsp;&emsp;注</span>
              <el-input
                :disabled="isDisabled"
                type="textarea"
                maxlength="50"
                show-word-limit
                v-model="form.remark"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="50">
          <el-col :span="16">
            <el-form-item label="更多详情">
              <uploadImg
                :disabled="isDisabled"
                @upImgOk="upImg"
                :IMG="form.fileUrl"
                v-model="form.fileUrl"
              ></uploadImg>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="50">
          <el-col :span="24">
            <el-form-item>
              <span slot="label">角&emsp;&emsp;标</span>
              <el-checkbox-group v-model="form.subscript">
                <el-checkbox
                  v-for="item in subScript"
                  :label="item.value"
                  :key="item.value"
                >{{item.label}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="50">
          <el-col :span="24">
            <el-form-item>
              <span slot="label">推&emsp;&emsp;荐</span>

              <el-checkbox-group v-model="form.recommend">
                <el-checkbox
                  v-for="item in recomMend"
                  :label="item.value"
                  :key="item.value"
                >{{item.label}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="50">
          <el-col :span="24">
            <el-form-item>
              <span slot="label">限&emsp;&emsp;购</span>
              <el-radio-group v-model="form.purchaseLimit">
                <el-radio
                  v-for="item in purchaseLimit"
                  :label="item.value"
                  :key="item.value"
                >{{item.label}}</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">保存</el-button>
          <el-button @click="cancel()">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import listAjax from "@/api/BusinessManage/ProductManage.js";
import uploadImg from "@/components/UploadImg.vue";
export default {
  components: {
    uploadImg
  },
  data() {
    return {
      rules: {
        productNo: [
          { required: true, message: "请输入产品代号", trigger: "blur" }
        ],
        rateOfReturn: [
          { required: true, message: "请输入年化收益", trigger: "blur" }
        ],
        repayment: [
          { required: true, message: "请选择还款方式", trigger: "blur" }
        ],
        productName: [
          { required: true, message: "请输入产品名称", trigger: "blur" }
        ],
        minimum: [
          { required: true, message: "请输入起投金额", trigger: "blur" }
        ],
        startAt: [
          { required: true, message: "请选择起息日期", trigger: "blur" }
        ],
        timeLimit: [{ required: true, message: "请输入期限", trigger: "blur" }]
      },
      isDisabled: false,
      form: {
        subscript: [],
        recommend: []
      },
      //期限
      valueDate: [
        {
          value: "T+0",
          label: "T+0"
        },
        {
          value: "T+1",
          label: "T+1"
        },
        {
          value: "T+2",
          label: "T+2"
        }
      ],
      //期限
      repayMent: [
        {
          value: "到期本息一次性付清",
          label: "到期本息一次性付清"
        },
        {
          value: "按月付息,到期还本",
          label: "按月付息,到期还本"
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
      //角标
      subScript: [
        {
          value: "1",
          label: "新近产品"
        },
        {
          value: "2",
          label: "热门产品"
        }
      ],
      recomMend: [
        {
          value: "1",
          label: "精品推荐"
        }
      ],
      purchaseLimit: [
        {
          value: "0",
          label: "否"
        },
        {
          value: "1",
          label: "是"
        }
      ]
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.$route.query.data) {
            listAjax
              .updateData(this.form)
              .then(reap => {
                if (reap.status === 200) {
                  this.$message({
                    message: "编辑成功",
                    type: "success"
                  });
                  this.$router.push("/productManage");
                }
              })
              .catch(function(error) {
                console.log(error);
              });
          } else {
            listAjax
              .addData(this.form)
              .then(reap => {
                if (reap.status === 200) {
                  this.$message({
                    message: "新增成功",
                    type: "success"
                  });
                  this.$router.push("/productManage");
                }
              })
              .catch(function(error) {
                console.log(error);
              });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    cancel: function() {
      this.$router.push("/productManage");
    },
    upImg(data) {
      this.form.fileUrl = data;
    }
  },
  created: function() {
    if (this.$route.query.data) {
      this.form = JSON.parse(this.$route.query.data);
      this.isDisabled = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.panel {
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #f2f2f2;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);

  .panel-title {
    padding: 10px 15px;
    font-size: 18px;
    font-weight: bold;
    color: #333333;
    border-bottom: 1px solid #f2f2f2;
  }

  .panel-body {
    padding: 30px 30px;
  }
}
</style>