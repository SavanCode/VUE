<template>
  <div id="app" :style="{ fontSize: fontSize +'px' }"> 
    <!-- <router-view/> -->
      <Nav :defaultSize="fontSize"/>
    <div class="content">
      <left-bar @changed="setOptionSize"/>
      <paper-clip :optionSize="optionWidth"/>
      <Main class="main" :windowWidth="window.width"/>
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
  data() {
    return { 
      fontSize: 0,
      optionWidth:0,
      window: {
          width: 0,
          height: 0, 
        }
    };
  },
  provide () {
    return {
      window: this.window
    }
  },
  created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
  },
  destroyed() {
      window.removeEventListener('resize', this.handleResize);
  },
  methods:{
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight; 
    },
    setOptionSize:function(width){
      console.log(width)
      this.optionWidth=width
    }
  }, 
  computed: {
    getHeight(){
      return this.window.height;
    },
    getWidth(){
      console.log(this)
      return this.window.width;
    }, 
  },
  watch: {
        // getHeight(newval,oldval) {  },
        getWidth(newval,oldval) {
          //console.log(newval,oldval) 
          if(newval=== oldval){
              return
          }
          if(newval < 768){
            this.fontSize = 10
          }else if(768 < newval && newval<=1024){
            this.fontSize = 15
          }else if(newval > 1024){
            this.fontSize = 30
          }
        }
    }
}
</script>

<style>

#app { 
  height: 100%;
  min-width: 800px; /* 1024 */
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
  flex:1 0.5 auto
}
</style>
