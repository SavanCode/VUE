<template>
  <div class="wrapper">
    <h1>404</h1>
     
    <p>Oops! Something is wrong.</p>
    <el-button @click="$router.go(-1)">返回上一页</el-button>
        <el-button type="primary" class="not-found-btn-gohome" @click="$router.push('/')">进入首页</el-button>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style scoped>
h1{
  margin: 20px 0 15px;
    font-size: 8em;
    font-weight: 500;
    color: rgb(96 122 136);
}
p{ 
    margin: 0 0 30px;
    font-size: 26px;
    text-transform: uppercase;
    color: rgb(118, 131, 143);
}  
</style>
