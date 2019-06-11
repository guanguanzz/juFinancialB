<template>
    <div class='topBar'>
        <div class="icon-wrap" @click="navCollapse">
            <!-- <i class="el-icon-s-operation"></i> -->
            <i v-bind:class="{'el-icon-s-fold' : !$store.state.isCollapse , 'el-icon-s-unfold' : $store.state.isCollapse}"></i>
        </div>
        <ul>
            <li>管理员</li>
            <li>admin</li>
            <li>注销</li>
        </ul>   
    </div>
</template>
<script>
    export default {
        methods: {
            navCollapse() {
                this.$store.state.isCollapse = !this.$store.state.isCollapse
                console.log(this.$store.state.isCollapse)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .icon-wrap {
        padding: 5px;
        font-size: 20px;
    }

    .topBar {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        align-items: center;
        height: 50px;

        ul {
            display: flex;
            justify-content: space-between;

            li {
                padding: 0 15px;
                height: 50px;
                line-height: 50px;
            }
        }
    }
</style>