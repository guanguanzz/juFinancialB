<template>
    <div>
        <router-link to='bankManage'>1212</router-link>
        <button v-on:click="go">原地跳转</button>
        <input>
    </div>
</template>
<script>
    export default {
        data: function () {

            return {
                activeDate: 1
            }

        },
        created(){
         
        },
        methods: {
            go() {
                 let b = new Date().getTime()
                console.log(b)
               
                this.$router.push({
                    name: "bankManage",
                    query:{
                        a:'sdf'
                    }
                })
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>