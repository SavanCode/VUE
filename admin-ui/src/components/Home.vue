<template>
  <div>
<el-container>
  <el-aside width="200px"> <navmenu></navmenu></el-aside>
  <el-container>
    <el-header style="padding: 0;"> <myheader></myheader> </el-header>
    <el-main>
       <router-view></router-view>  
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
// import mock from '@/mock/mock.js'; 这是封装mock之前 
import mock from '@/mock/index.js';//封装mock之后
import axios from "axios"; 
import NavMenu from '@/components/NavMenu'
import Header from '@/components/Header'

export default {
  name: "Home",
  components: {
    'navmenu': NavMenu,
    'myheader': Header
  },
  methods: { 
  }
};
</script>

<style lang="scss" scoped></style>
