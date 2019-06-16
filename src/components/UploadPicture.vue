<template>
    <div>
        配&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;图 
        <label class="ui_button ui_button_primary picture"
            for="xFile">选择文件</label>
        <form>
            <input type="file" id="xFile" style="opacity:0;width: 0;" :value="removes" accept="image/*"
                @change="uploading">
            <img :src="fileSrc" alt="配图预览" :onerror='errorGoodsImg'>
            <table border="1" style='border-collapse:collapse;' cellspacing='0' bordercolor='#999999'>
                <tr style="background-color: rgba(242,242,242,0.35);">
                    <th colspan="2">图片名</th>
                    <th>文件大小</th>
                    <th>进度</th>
                    <th>是否上传成功</th>
                    <th colspan="2">操作</th>
                </tr>
                <tr>
                    <td colspan="2">{{name}}</td>
                    <td>{{size}}</td>
                    <td class="progress"><progress :value="precent" max="100" v-show="name">
                        </progress><span>{{precents}}</span></td>
                    <td><i :class="whether"></i></td>
                    <td colspan="2">
                        <button class="upload" @click="uploadingPrecent" type="button" v-show="name">上传</button>
                        <button class="delete" type="button" v-show="name" @click="remove">删除</button>
                    </td>
                </tr>
            </table>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'uploadPicture',
        data() {
            return {
                removes: '', //   用来清空input file中的文件
                fileSrc: '', //预览图
                errorGoodsImg: 'this.src="' + require('@/assets/img/show.png') + '"', //初始图 已定不需要更改
                name: '', //图片名
                size: '', //图片大小
                precent: '', //进度条
                precents: '', //百分数
                whether: '', //是否上传成功的显示图标
                curFiles: '', //上传的文件信息
                realSrc: '', //上传图片的url
            }
        },
        methods: {
            uploading(el) { //选择文件
                if (el.target.files.length > 0) {
                    this.removes = '';
                }
                this.curFiles = el.target.files[0];
                this.name = this.curFiles.name;
                this.size = Math.ceil(this.curFiles.size / 1024) + 'KB';
                this.fileSrc = window.URL.createObjectURL(this.curFiles);
            },
            uploadingPrecent() { //上传
                var formDataOne = new FormData();
                formDataOne.append('file', this.curFiles);
                // this.$api.uploadPhoto(formDataOne, (res) => {
                //     console.log(res);
                //     let loaded = res.loaded,
                //         total = res.total;
                //     this.$nextTick(() => {
                //         this.precent = (loaded / total) * 100;
                //         this.precents = `${this.precent}%`;
                //     });
                // }, (res) => {
                //     if (this.name) {
                //         console.log(res);
                //         console.log(res.data.url);
                //         this.realSrc = res.data.url; //图片上传的是上传图片之后 从接口返回的信息里面的url ；而不是上传之前的url this.fileSrc
                //         if (res.code === 0) {
                //             this.whether = 'el-icon-check';
                //         } else {
                //             this.whether = "el-icon-close";
                //         }
                //     }
                // })
            },
            remove() { //删除
                this.name = '';
                this.size = '';
                this.whether = '';
                this.fileSrc = '';
            },
        }
    }
</script>
<style scoped lang="scss">
    .picture {
        border-radius: 5px;
        margin-left: 15px;
        padding: 5px;
        background-color: cadetblue;
    }

    img {
        margin: 10px 0 10px 85px;
        @include w-h(100px, 80px);
    }

    .progress {
        display: flex;
        align-items: center;
        border: 0;
        margin: 18px;
    }

    .upload {
        margin-right: 3px;
        background-color: cadetblue;
    }

    .delete {
        background-color: red;
    }

    button {
        border: 0;
        border-radius: 5px;
        @include w-h(80px, 40px);
        outline: none;
    }

    table {
        margin: 0 0 0 85px;
        // width:100%;
        th {
            padding: 10px;
        }

        td {
            padding: 10px;
            text-align: center;
        }
    }
</style>