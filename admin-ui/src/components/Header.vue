<template>
  <div class="navBar">
    <el-col :span="20">
      <el-menu
    default-active=1
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4"><a href="#" target="_blank">订单管理</a></el-menu-item>
  </el-menu>
</el-col>
<el-col :span="4" class="avatar">
     <el-dropdown trigger="hover" class="avatarDropdown">
          <!-- <span class="el-dropdown-link userinfo-inner">
             <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
             <span> {{username}} </span>
          </span> -->
          <div class="userinfo el-dropdown-link">
            <span >默认</span>
            <el-image class="avatarImg" :src="avatar"></el-image>
          </div>
          <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的消息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
</el-col>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        username:'admin',
        avatar:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="scss" scoped> 
.avatarImg{
  height:30px;
  width:30px;
  padding: 0 10px;
}
.avatar{
  height: $navHeight;
  background-color:$bgColor;
  padding: 10px 0; 
}
.avatarDropdown{
  color: $white ! important;
  font-size: 24px;
}
.userinfo{
  @extend %align-center;
}
</style>