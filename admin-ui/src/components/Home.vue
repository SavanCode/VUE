<template>
  <div>
<el-container>
  <el-aside width="200px"> <navmenu></navmenu></el-aside>
  <el-container>
    <el-header style="padding: 0;"> <myheader></myheader> </el-header>
    <el-main>
      <transition name="fade" mode="out-in">
         <router-view></router-view>
      </transition>
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
  mounted() {
    var user=sessionStorage.getItem("user");
    if(user){
        this.userName = user;
        this.userAvatar=''//userImg require('url')
    }else{
      $router.push('login')
    }
  },
  methods: { 
  }
};
</script>

<style lang="scss" scoped></style>
