<template>
  <div class="list">
        <h2 class="title">申请详情</h2>
        <form action="" class="listHead">
            <h3 class="title">个人信息</h3>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="用户编号">
                        <el-input v-model="userNo" placeholder="" :disabled="true"></el-input>
                    </el-form-item>

                </el-col>
                <el-col :span="8">
                    <el-form-item label="真实姓名">
                        <el-input v-model="realName" placeholder="" :disabled="true"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="身份证号">
                        <el-input v-model="cardNo" placeholder="" :disabled="true"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="手机号">
                        <el-input v-model="phone" placeholder="" :disabled="true"></el-input>
                    </el-form-item>


                </el-col>
                <el-col :span="8">
                    <el-form-item label="注册时间">
                        <el-input v-model="createAt" placeholder="" :disabled="true"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="电子邮箱">
                        <el-input v-model="email" placeholder="" :disabled="true"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="24">
                    <el-form-item label="详细地址">
                        <el-input v-model="address" placeholder="" :disabled="true"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </form>
      
        <form action="" class="listHead" :style=" { display:isShow}">
            <h3 class="title">证件信息</h3>
            身份证正面:<img :src="positiveUrl" alt="配图预览" :onerror='errorGoodsImg'>
            身份证反面:<img :src="backUrl" alt="配图预览" :onerror='errorGoodsImg'>
            <el-button type="primary" @click="cancelName">取消实名</el-button>
        </form>

       

         <el-button type="danger" @click="back">返回</el-button>
    </div>
</template>
<script>
export default {
      data() {
            return {
                userNo: '', //用户编号
                realName: '',
                cardNo: '', //身份证号
                phone: '',
                createAt: '', //注册时间
                email: '',
                address: '',
              
                positiveUrl: '', //身份证正面
                backUrl: '', //反面
                errorGoodsImg: 'this.src="' + require('@/assets/img/show.png') + '"', //初始图 已定不需要更改

            }
        },
        computed:{
            isShow:function (){
                if(this.realName){
                    return true;
                }else{
                    return false;
                }
            }
        }
}
</script>
<style lang="scss" scoped>
      .list {
        margin: 10px;
        padding: 10px;
        border: 1px solid darkgray;
        border-radius: 0 0 10px 10px;

        .listHead {
            margin: 10px;
            padding: 10px;
            border: 1px solid darkgray;
        }
    }

    .title {
        padding: 10px;
        border-bottom: 1px solid darkgray;
    }

    img {
        @include w-h(200px, 100px);
    }
</style>