<template>
  <div>
    Home Page
    <el-button type="primary" @click="test()">测试</el-button>
    <el-button type="primary" @click="getUser()">获取用户信息</el-button>
    <!-- <el-button type="primary" @click="getMenu()">获取菜单信息</el-button> -->
  </div>
</template>

<script>
import axios from 'axios'
// import mock from '@/mock/mock.js';
export default {
    name:'Home',
    methods:{
    //   test(){
    //     axios.get('http://localhost:8080').then((result) => {
    //       alert(result.data)
    //     }).catch((result) => {
    //       alert(result)
    //     });
    //   },
    //   getUser(){
    //     axios.get('http://localhost:8080/user')
    //     .then(function(res){
    //       alert(JSON.stringify(res.data));
    //       }).catch(function(res){
    //         alert(res);
    //       });
    //   }
    // }
}
</script>

<style lang="scss" scoped></style>
