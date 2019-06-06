<template>
    <div class='topBar'>
          <div class="topBar-brand">理财管理平台</div>
          <ul>
              <li>管理员</li>
              <li>admin</li>
              <li>注销</li>
          </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
 .topBar{
     .topBar-brand{
         padding:10px 30px;
     }
     display: flex;
     justify-content: space-between;
     align-items: center;
     width:100%;
     height:50px;
     ul{
         display: flex;
         justify-content: space-between;
         li{
             padding:0 15px;
             height:50px;
             line-height:50px;
         }
     }
 }
</style>
