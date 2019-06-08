<template>
    <div>
        <div class='content'>
            <sideNav></sideNav>
            <div class="right">
                <topBar></topBar>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import topBar from '@/components/TopBar.vue'
    import sideNav from '@/components/SideNav.vue'
    export default {
        components: {
            topBar,
            sideNav,
        }
    }
</script>
<style lang="scss" scoped>

    .content {
        display: flex;
        min-height:100vh;
        .right{
            flex-grow:1;
        }
    }

  
</style>