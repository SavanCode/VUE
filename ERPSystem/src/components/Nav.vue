<template>
  <div class="nav">
    <div class="titleLeft">
        <p class="brand">{{brand}}</p> 
        <p class="title">{{title}}</p>
    </div>
    <div class="titleRight"> 
       <p> <a :href="link"> {{link}} </a></p>
        <p><a :href="qq">QQ:{{qq}} </a></p> 
        <i @click="close" class="icon iconfont icon-delete"></i>
        <!-- <button @click="close"><i class="icon iconfont icon-delete "></i></button> -->
    </div>
  </div>
</template>

<script>
export default {
  name:'N6av',
  data() {
    return {
      brand: '博宁软件',
      title:'博宁服饰ERP管理系统',
      link:'www.goingt.com',
      qq:'7471561651064'
    };
  },
  methods: {
    close() {
      alert('Bye!');
    }
  }
};
</script> 

<style scoped>
.nav{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    /* padding-top: 30px; */
    display:flex;
    flex-flow: row; 
    justify-content: space-between;
    padding: 0 50px 0 0;
} 
 
.titleLeft, .titleRight{
    display:flex;
    flex-direction:row;
    flex: 1 0 auto;
}
.titleLeft > p {
    margin-left:50px
}
.titleRight{
    justify-content: flex-end;
}
.brand{
    font-weight: bold;
    color: blue; 
    font-size: 25px;
    line-height: 25px;
}
.title{
    font-size: 25px;
    line-height: 25px;
    font-family: cursive;
    font-weight: bolder;
}
.titleRight > p{
    font-size: 15px;
    line-height: 15px;
    margin-right:20px
}  
.icon-delete{
    font-size: 50px;
    background-image: -webkit-linear-gradient(90deg, #28bb59 0%, #ffffff 94%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
a{
  text-decoration: none;
  color:red;
  font-weight: bold;
}
</style>