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
  //     // 自适应~~ 等会回来补
  //     screenWidth: ''
  //   };
  // },
  // methods:{
  //   mounted () {
  //     const that = this 
  //     window.onresize = () => {
  //         return (() => {
  //             window.screenWidth = document.body.clientWidth
  //             that.screenWidth = window.screenWidth
  //         })()
  //       }
  //   }
  // }
}
</script>

<style>
#app {
  /* 1024 */
  min-width: 1124px; 
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
</style>
