<template>
    <div>
        <div>
            <div class="panel">
                <div class="panel-title">参数设置</div>
                <div class="panel-body">

                    <div class='form-group'>
                        <div class="panel">
                            <div class="panel-title">公章上传</div>
                            <div class="panel-body">
                                <div class='form-group'>
                                    <el-row :gutter='20'>
                                        <el-col :span='4'>
                                            <label class='form-label must'>公&emsp;&emsp;章</label>
                                        </el-col>
                                        <el-col :span='16'>
                                            <uploadImg @upImgOk='upImg' :IMG='url'></uploadImg>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel">
                        <div class="panel-title">提醒设置</div>
                        <div class="panel-body" style="padding-bottom:15px;">
                            <el-row :gutter="20">
                                <el-col :span='8'>
                                    <div class="form-group">
                                        <el-row :gutter="20">
                                            <el-col :span='12'> <label class="form-label">投资到期消息提前天数</label></el-col>
                                            <el-col :span='12'>
                                                <el-input v-model="invest" maxlength='2'
                                                    oninput="value=value.replace(/[^\d]/g,'')"></el-input>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </el-col>
                                <el-col :span='8'>
                                    <div class="form-group">
                                        <el-row :gutter="20">
                                            <el-col :span='12'> <label class="form-label">债权到期提前天数
                                                </label></el-col>
                                            <el-col :span='12'>
                                                <el-input v-model="creditor" maxlength='2'
                                                    oninput="value=value.replace(/[^\d]/g,'')"></el-input>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </el-col>
                                <el-col :span='8'>
                                    <div class="form-group">
                                        <el-row :gutter="20">
                                            <el-col :span='12'> <label class="form-label">总债权投满警戒线</label></el-col>
                                            <el-col :span='12'>
                                                <el-input v-model="alert" maxlength='2'
                                                    oninput="value=value.replace(/[^\d]/g,'')"> <template
                                                        slot="append">%</template>
                                                </el-input>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
                <div class='form-group'>
                    <el-row :gutter='20'>
                        <el-col :span='12' :offset='4'>
                            <el-button :disabled='isOK' @click='save'>保存</el-button>
                            <el-button @click='back'>还原</el-button>
                        </el-col>
                    </el-row>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import uploadImg from '@/components/UploadImg.vue'
    import {
        recover,
        store
    } from '@/api/OperatManage/ParaManage.js'
    export default {
        components: {
            uploadImg
        },
        data: function () {
            return {
                url: null,
                invest: null,
                creditor: null,
                alert: null
            }
        },
        computed: {
            isOK() {
                return (!this.url || !this.invest || !this.creditor || !this.alert)
            }
        },
        created() {},
        methods: {
            //上传图片给子组件
            upImg(data) {
                this.url = data
            },
            save() {
                store(this.url, this.invest, this.creditor, this.alert)
                    .then((res) => {
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        })
                    })
                    .catch((res) => {
                        console.log(res)
                        this.$message({
                            message: '发生了一些错误',
                            type: 'error'
                        });
                    })
            },
            back() {
                recover()
                    .then((res) => {
                        console.log(res)
                        this.url = res.data.data.imgUrl
                        console.log(this.url)
                        this.invest = res.data.data.invest
                        this.creditor = res.data.data.creditor
                        this.alert = res.data.data.alert
                        this.$message({
                            message: '还原成功',
                            type: 'success'
                        })
                    })
                    .catch((res) => {
                        console.log(res)
                        this.$message({
                            message: '发生了一些错误',
                            type: 'error'
                        });
                    })
            }

        }
    }
</script>
<style lang="scss" scoped>
    .panel {
        background-color: #fff;
        border-radius: 5px;
        border: 1px solid #F2F2F2;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .05);

        .panel-title {
            padding: 10px 15px;
            font-size: 18px;
            font-weight: bold;
            color: #333333;
            border-bottom: 1px solid #F2F2F2;
        }

        .panel-body {
            padding: 30px 30px;
        }
    }

    .form-group {
        margin-bottom: 15px;

        .form-label {
            float: right;
            height: 40px;
            line-height: 40px;
        }

        .form-element {
            width: 100%;
        }
    }
</style>