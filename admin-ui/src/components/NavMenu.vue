<template>
  <el-row class="tac">
     <el-col :span="24" class="logo"> 
        <img class="logoImg" src="@/assets/logo.png" />
      </el-col>
    <el-col :span="24">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" unique-opened router
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>系统管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="$router.push('user')">用户管理</el-menu-item>
            <el-menu-item index="1-2" @click="$router.push('menu')">菜单管理</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>系统监控</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-menu-item index="2-4">选项4</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        
        <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span>导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span>导航四</span>
          </el-menu-item>

      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  export default { 
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="scss">
.logo, .logoImg{
  height:$navHeight;
  background-color:$bgColor;
}
</style>