<template>
    <div>
        <div>
            <div class="panel">
                <div class="panel-title">新增</div>
                <div class="panel-body">
                    <div class='form-group'>
                        <el-row :gutter='20'>
                            <el-col :span='4'>
                                <label class='form-label must'>标题名称</label>
                            </el-col>
                            <el-col :span='16'>
                                <el-input v-model="title"></el-input>
                            </el-col>
                        </el-row>
                    </div>
                    <div class='form-group'>
                        <el-row :gutter='20'>
                            <div class='form-group'>
                                <el-col :span='4'>
                                    <label class='form-label must'>发送人群</label>
                                </el-col>
                                <el-col :span='16'>
                                    <el-select class='form-element' v-model="peopleSelected">
                                        <el-option v-for='(person,index) in people' :key='index' :label="person.message"
                                            :value='person.value'></el-option>
                                    </el-select>
                                </el-col>
                            </div>
                        </el-row>
                    </div>

                    <div class='form-group'>
                        <el-row :gutter='20'>
                            <el-col :span='4'>
                                <label class='form-label must'>简&emsp;&emsp;述</label>
                            </el-col>
                            <el-col :span='16'>
                                <el-input type="textarea" maxlength="30" show-word-limit v-model="descAt"></el-input>
                            </el-col>
                        </el-row>
                    </div>

                    <div class='form-group'>
                        <el-row :gutter='20'>
                            <el-col :span='4'>
                                <label class='form-label must'>内&emsp;&emsp;容</label>
                            </el-col>
                            <el-col :span='16'>
                                <uploadImg @upImgOk='upImg'></uploadImg>
                            </el-col>
                        </el-row>
                    </div>

                    <div class='form-group'>
                        <el-row :gutter='20'>
                            <div class='form-group'>
                                <el-col :span='4'>
                                    <label class='form-label must'>消息类型</label>
                                </el-col>
                                <el-col :span='16'>
                                    <el-select class='form-element' v-model="typeSelected">
                                        <el-option v-for='(type,index) in types' :key='index' :label="type.message"
                                            :value='type.value'></el-option>
                                    </el-select>
                                </el-col>
                            </div>
                        </el-row>
                    </div>

                    <div class='form-group' v-show='typeSelected===2'>
                        <el-row :gutter='20'>
                            <div class='form-group'>
                                <el-col :span='4'>
                                    <label class='form-label'>定时发送</label>
                                </el-col>
                                <el-col :span='16'>
                                    <el-date-picker format="yyyy 年 MM 月 dd 日 hh 时 mm 分 ss 秒" value-format="timestamp"
                                        v-model="readTime" type="datetime" placeholder="选择日期时间"
                                        :picker-options='dateOption' default-time="12:00:00">
                                    </el-date-picker>
                                </el-col>
                            </div>
                        </el-row>
                    </div>

                    <div class='form-group'>
                        <el-row :gutter='20'>
                            <el-col :span='12' :offset='4'>
                                <el-button @click='addRight(2)' :disabled='isOK'>立即上线</el-button>
                                <el-button @click='addRight(1)' :disabled='isOK'>存为草稿</el-button>
                            </el-col>
                            <el-col :span="4">
                                <el-button style="float:right;" @click='back'>取消</el-button>
                            </el-col>
                        </el-row>
                    </div>


                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import uploadImg from '@/components/UploadImg.vue'
    import {
        add,
    } from '@/api/OperatManage/MessageManage/MessageDetails.js'
    export default {
        components: {
            uploadImg
        },
        data: function () {
            return {
                title: null, //标题
                descAt: null, //描述
                readTime: null, //定时发送的时间
                peopleSelected: null, //发送人群
                people: [{
                    message: '所有人',
                    value: 1
                }, {
                    message: '认证投资人',
                    value: 2
                }],
                typeSelected: null, //发送方式
                types: [{
                    message: '即时发送',
                    value: 1
                }, {
                    message: '定时发送',
                    value: 2
                }],
                url: null, //图片地址
                dateOption: this.dateTime()
            }
        },
        computed: {
            isOK() {
                return (!this.title || !this.peopleSelected || !this.url || !this.descAt || this.typeSelected === 2 && !
                    this.readTime || !this.typeSelected)
            }
        },
        methods: {
            dateTime() {
                return {
                    disabledDate(time) {
                        return time.getTime() < Date.now() //结束时间不选时，结束时间最大值小于等于当天
                    }
                }
            },
            //从子组件拿到图片地址
            upImg(data) {
                this.url = data
            },
            //新增接口
            addRight(status) {
                add(this.title, this.peopleSelected, this.descAt, this.url, this.typeSelected, this.readTime, status)
                    .then((res) => {
                        this.$message({
                            message: '新增成功',
                            type: 'success'
                        });
                        this.$router.push({
                            path: '/messageLists'
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
                this.$router.push({
                    path: '/messageLists'
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .el-date-editor {
        width: 100%;
    }

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