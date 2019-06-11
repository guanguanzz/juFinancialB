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
    import topBar from '@/components/TopBar.vue'
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
<<<<<<< HEAD
.main-content{
    box-sizing: border-box;
    padding:30px;
    background-color: #F0F2F5;
    min-height:calc(100vh - 50px);
   
}
    
=======

  //jiajiaTest
>>>>>>> fdd86390f2b135d592a531ef7ee3199f9fbfef34
</style>