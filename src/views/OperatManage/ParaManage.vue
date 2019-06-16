<template>
    <div>
        <div>
            <div class="panel">
                <div class="panel-title">{{page_title}}</div>
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
                                    <label class='form-label must'>类&emsp;&emsp;型</label>
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
                    <div class='form-group'>
                        <el-row :gutter='20'>
                            <el-col :span='4'>
                                <label class='form-label must'>内&emsp;&emsp;容</label>
                            </el-col>
                            <el-col :span='16'>
                                <uploadImg @upImgOk='upImg' :IMG='url'></uploadImg>
                            </el-col>
                        </el-row>
                    </div>

                    <div class='form-group'>
                        <el-row :gutter='20'>
                            <el-col :span='12' :offset='4'>
                                <el-button @click='handleOnline' :disabled='isOK'>保存</el-button>
                                <el-button @click='handleDraft' :disabled='isOK'>还原</el-button>
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
        bianji,
        add,
        alter
    } from '@/api/OperatManage/ContentManage/ContentDetails.js'
    export default {
        components: {
            uploadImg
        },
        data: function () {
            return {
                page_title: '参数设置',
                id: this.$route.query.id,
                title: null,
                typeSelected: null,
                types: [{
                    message: 'banner推荐',
                    value: 'banner推荐'
                }, {
                    message: '帮助中心',
                    value: '帮助中心'
                }, {
                    message: '关于我们',
                    value: '关于我们'
                }],
                url: null,
            }
        },
        computed: {
            isOK() {
                return (!this.title || !this.typeSelected || !this.url)
            }
        },
        created() {
            // console.log(this.id)
            if (this.id) {
                this.page_title = '编辑'
                this.edit()
            }
        },
        methods: {
            //如果是编辑初始化数据
            edit() {
                bianji(this.id)
                    .then((res) => {
                        // console.log(res.data.data)
                        this.title = res.data.data.title
                        this.url = res.data.data.img_url
                        // console.log(this.url)
                        this.typeSelected = res.data.data.itype
                    })
                    .catch((res) => {
                        console.log(res)
                    })
            },
            //
            upImg(data) {
                this.url = data
            },
            //代理上线按钮
            handleOnline() {
                if (this.$route.query.id) {
                    this.alterRight(2)
                } else {
                    this.addRight(2)
                }
            },
            //代理草稿按钮
            handleDraft() {
                if (this.$route.query.id) {
                    this.alterRight(1)
                } else {
                    this.addRight(1)
                }
            },
            //新增接口
            addRight(status) {
                add(this.title, this.typeSelected, this.url, status)
                    .then((res) => {
                        this.$message({
                            message: '新增成功',
                            type: 'success'
                        });
                        this.$router.push({
                            path: '/ContentLists'
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
            //编辑接口
            alterRight(status) {
                alter(this.title, this.typeSelected, this.url, status, this.id)
                    .then((res) => {
                        this.$message({
                            message: '修改成功',
                            type: 'success'
                        });
                        this.$router.push({
                            path: '/contentLists'
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
                    path: '/contentLists'
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