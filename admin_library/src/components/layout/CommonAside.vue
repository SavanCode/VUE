<template>
<div> 
     <el-menu
      default-active="2"  
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <h3 class="title">系统后台</h3>
      <el-menu-item  :index="item.url+''" v-for="item in menu" :key="item.id">
        <i class="el-icon-menu"></i>
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
          icon: 'user',
          url: '/home'
        },
        {
          path: '/booklist',
          name: 'bookList',
          label: '书库管理',
          icon: 'user',
          url: '/booklist'
        },
        {
          path: '/studentlist',
          name: 'studentlist',
          label: '学生管理',
          icon: 'user',
          url: '/studentlist'
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
h3{
    text-align: center;
    color: aliceblue;
}
</style>