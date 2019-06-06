<template>
    <div>
        <topBar></topBar>
        <div class='content'>
            <sideNav></sideNav>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import topBar from '@/components/topBar.vue'
import sideNav from '@/components/SideNav.vue'
export default {
    components:{
        topBar,
        sideNav,
    }
}
</script>
<style lang="scss" scoped>
.content{
    display: flex;
    justify-content: space-between
    // router-view{
    //     width:100%;
    // }
}
</style>
