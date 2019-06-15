<template>
    <div>
        <div class='content'>
            <sideNav></sideNav>
            <div class="right">
                <topBar></topBar>
                <div class="main-content">
                    <router-view :key='key'></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import topBar from '@/components/TopNav.vue'
    import sideNav from '@/components/SideNav.vue'
    export default {
        components: {
            topBar,
            sideNav,
        },
        data: function () {
            return {
                activeDate: 1
            }
        },
        computed: {
            key() {
                return new Date().getTime()
            }
        }
    }
</script>
<style lang="scss" scoped>
    .content {
        display: flex;
        min-height: 100vh;

        .right {
            flex-grow: 1;
        }
    }

    .main-content {
        box-sizing: border-box;
        padding: 30px;
        background-color: #F0F2F5;
        min-height: calc(100vh - 50px);

    }
</style>