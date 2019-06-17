<template>
    <div>
        <el-row>
            <el-col :span='24'>
                <label class="btn-choose" for="xFile">选择文件</label>
                <!-- <el-button type='primary'>选择文件</el-button> -->
                <input type="file" id="xFile" style='display:none;' :value="removes" accept="image/*"
                    @change="uploading">
            </el-col>
        </el-row>

        <img :src="fileSrc" alt="配图预览" :onerror='errorGoodsImg'>


        <table>
            <tr>
                <th>图片名</th>
                <th>文件大小</th>
                <th>进度</th>
                <th>是否上传成功</th>
                <th>操作</th>
            </tr>
            <tr>
                <td>{{name}}</td>
                <td>{{size}}</td>
                <td class='progress'>
                    <el-progress :text-inside="true" v-show="name" :stroke-width="24" :percentage="precent"
                        status="success"></el-progress>
                </td>
                <td><i :class="whether"></i></td>
                <td>
                    <el-button class="upload" type="primary" @click="uploadingPrecent" size='mini' v-show="name">上传
                    </el-button>
                    <el-button class="delete" type="danger" v-show="name" size='mini' @click="remove">删除</el-button>
                </td>
            </tr>
        </table>

    </div>
</template>

<script>
    import {
        upImg
    } from '@/api/UploadImg.js'
    export default {
        name: 'uploadPicture',
        data() {
            return {
                removes: '', //   用来清空input file中的文件
                fileSrc: '', //预览图
                errorGoodsImg: 'this.src="' + require('@/assets/img/show.png') + '"', //初始图 已定不需要更改
                name: '', //图片名
                size: '', //图片大小
                precent: 0, //进度条百分比
                whether: '', //是否上传成功的显示图标
            }
        },
        props: ['IMG'],
        watch: {
            IMG() {
                this.fileSrc = this.IMG
            }
        },
        methods: {
            uploading(el) { //选择文件
                if (el.target.files.length > 0) {
                    this.removes = '';
                }
                this.precent = 0
                this.whether = ''
                let curFiles = el.target.files[0];
                this.name = curFiles.name;
                this.size = Math.ceil(curFiles.size / 1024) + 'KB';
                let reader = new FileReader();
                reader.readAsDataURL(curFiles); //用来转格式的
                var self = this; //否则这里的this指向 FileReader
                //这个函数是用来预览图片的
                reader.onload = function () {
                    self.fileSrc = this.result //地址储存的路径
                }
                this.$emit('upImgOk', null)
            },
            uploadingPrecent() { //上传
                var formDataOne = new FormData();
                formDataOne.append('file', this.curFiles);
                var config = {
                    onUploadProgress: progressEvent => { //只有一个参数可以不写（）
                        // console.log(progressEvent.loaded, progressEvent.total)
                        var completed = (progressEvent.loaded / progressEvent.total * 100)
                        // console.log(completed)
                        this.precent = completed
                    }
                } 
                upImg(formDataOne, config)
                    .then((response) => {
                        console.log(response)
                        this.whether = 'el-icon-check';
                        this.fileSrc = response.data.urls
                        this.$emit('upImgOk', this.fileSrc)
                    })
                    .catch((res) => {
                        console.log(res)
                        this.whether = "el-icon-close";
                    })

            },
            remove() { //删除
                this.name = ''
                this.size = ''
                this.whether = ''
                this.fileSrc = ''
                this.precent = 0
                this.$emit('upImgOk', this.fileSrc)
            },
        }
    }
</script>
<style scoped lang="scss">
    .progress {
        display: flex;
        justify-content: center
    }

    .el-progress {
        min-width: 100px;
    }

    .btn-choose {
        display: block;
        width: 56px;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 5px;
        color: #FFF;
        border: 1px solid #DCDFE6;
        background-color: #409EFF;
        cursor: pointer;

        &:hover {
            background: #66b1ff;
            border-color: #66b1ff;
        }

        &:active {
            background: #3a8ee6;
            border-color: #3a8ee6;
        }
    }

    img {
        margin: 14px 0;
        width: 400px;
        height: 400px;
    }
</style>