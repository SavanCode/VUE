<template>
  <div id="app"> 
    <!-- <router-view/> -->
      <Nav/>
    <div class="content">
      <left-bar/>
      <paper-clip/>
      <Main class="main"/>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import LeftBar from '@/components/LeftBar'
import Main from '@/components/Main'
import PaperClip from '@/components/PaperClip'

export default {
  name: 'App',
  components:{
    Nav,
    LeftBar,
    Main,
    PaperClip
  }, 
  // data() {
  //   return { 
  //     screenWidth: ''
  //   };
  // },
  methods:{
    // mounted () {
    //   const that = this 
    //   window.onresize = () => {
    //       return (() => {
    //           window.screenWidth = document.body.clientWidth
    //           that.screenWidth = window.screenWidth
    //       })()
    //     }
    // } 
      mounted: function() {
        // 页面开始加载时修改font-size
        var html = document.getElementsByTagName("html")[0];
        var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
        html.style.fontSize = oWidth / 750 * 100 + "px";
        console.log('rem:', html.style.fontSize);
    }
  }
}
</script>

<style>
#app {
  /* 1024 */
  min-width: 800px; 
  min-height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  color: #2c3e50; 
  background-color: #93aafd;
  background-image: linear-gradient(270deg, #93aafd 0%, #ffffff 15%, #ffffff 85%, #93aafd 100%);
}
.content { 
  display: flex;
  flex-direction: row;
}
.main{
  flex:1 0 auto
}

/* 手机屏幕的字体大小 */
@media screen and (max-width: 768px) {
  #app {
    font-size: 0.05rem !important;
  }
}
/* 笔记本电脑的字体大小 */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  #app {
    font-size: 0.8rem !important;
  }
}
/* 台式电脑显示器屏幕字体大小 */
@media screen and (min-width: 1024px) {
  #app {
    font-size: 2rem !important;
  }
}
</style>
