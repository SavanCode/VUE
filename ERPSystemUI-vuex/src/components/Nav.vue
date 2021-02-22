<template>
  <div class="nav">
    <div class="titleLeft">
        <p class="brand">{{nav.brand}}</p> 
        <p class="title">{{nav.title}}</p>
    </div>
    <div class="titleRight"> 
       <p> <a :href="link"> {{nav.link}} </a></p>
        <p><a :href="qq">QQ:{{nav.qq}} </a></p> 
         <i @click="close" class="icon iconfont icon-delete" :style="{ fontSize: fontSize*2 +'px',marginTop:fontSize/2+'px' }"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name:'Nav',
  data() {
    return { 
      //为什么这里一定要定义
      //不然会报错
      link:'',qq:''
    };
  },
  methods: {
    close() {
      alert('Bye!');
    }
  },
  computed:{
  ...mapGetters([
      'fontSize','nav'
  ]),
  // navObj:function() {
  //           return this.$store.state.nav;
  //       }  
  }
};
</script> 

<style scoped>
.nav{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    display:flex;
    flex-flow: row; 
    justify-content: space-between;
    padding: 0 50px 0 0;
} 
 
.titleLeft, .titleRight{
    display:flex;
    flex-direction:row;
    flex: 1 0.5 auto;
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
}
.title{ 
    font-family: cursive;
    font-weight: bolder;
}
.titleRight > p{ 
    margin-right:20px
}  
.icon-delete{ 
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