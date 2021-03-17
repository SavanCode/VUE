<!-- 左侧边框目录 -->
<template>
<div class="aside"> 
  <!-- <div class="toggle-button" @click="toggleCollapse"> <i class="el-icon-s-fold"></i></div> -->
     <el-menu
     :collapse="isCollapse"
     :collapse-transition="true"
      default-active="1"  
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <h3 class="title" v-if="!isCollapse">系统后台 <i class="el-icon-s-fold"  @click="toggleCollapse"></i></h3>
      <h3 class="title" v-else> <i class="el-icon-s-unfold"  @click="toggleCollapse"></i></h3>
      <el-menu-item  :index="item.url+''" v-for="item in menu" :key="item.id">
        <i :class="item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item> 
    </el-menu>
  </div>
</template>
<script>
export default { 
  computed: {
  },
  data() {
    return {
      isCollapse:false,
      menu: [
        {
          path: '/home',
          name: 'home',
          label: '主页中心',
          icon: 'el-icon-menu',
          url: '/home'
        },
        {
          path: '/booklist',
          name: 'bookList',
          label: '书库管理',
          icon: 'el-icon-collection',
          url: '/booklist'
        },
        {
          path: '/studentlist',
          name: 'studentlist',
          label: '学生管理',
          icon: 'el-icon-user-solid',
          url: '/studentlist'
        },
        {
          path: '/records',
          name: 'records',
          label: '借读记录管理',
          icon: 'el-icon-s-order',
          url: '/records'
        },
        {
          path: '/adminList',
          name: 'adminList',
          label: '员工管理',
          icon: 'el-icon-star-on',
          url: '/adminList'
        },
        {
          path: '/bookType',
          name: 'bookType',
          label: '书本类型管理',
          icon: 'el-icon-files',
          url: '/bookType'
        },
        {
          path: '/bookSearch',
          name: 'bookSearch',
          label: '书本查找',
          icon: 'el-icon-search',
          url: '/bookSearch'
        }
      ]
    }
  },
  methods: { 
    clickMenu(item) {
      this.$router.push({ name: item.name })
    },
    toggleCollapse(){
    this.isCollapse = !this.isCollapse;	//点击折叠按钮后，对isCollapse进行取反
  }
  }
}
</script>

<style>
/* .toggle-button {
  background-color: #4A5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em; 
  cursor: pointer;
} */
h3{
    text-align: center;
    color: aliceblue;
}
.aside , .el-menu{
  height:100%
} 
</style>