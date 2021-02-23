<template>
  <div id="app" :style="{ fontSize: fontSize +'px' }"> 
      <Nav/>
    <div class="content">
      <left-bar />
      <paper-clip/>
      <Main class="main" />
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import LeftBar from '@/components/LeftBar'
import Main from '@/components/Main'
import PaperClip from '@/components/PaperClip'
import { mapState,mapGetters} from 'vuex'

export default {
  name: 'App',
  components:{
    Nav,
    LeftBar,
    Main,
    PaperClip
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
       this.$store.dispatch('setWindowWidth', window.innerWidth);
       this.$store.dispatch('setWindowHeight', window.innerHeight);
    }, 
  }, 
  computed: {
    ...mapGetters([
      'window', 
      'fontSize'
    ]), 
    // WindowWidth(){ 
    //   return this.$store.state.window.width;
    // }, 
  },
  // watch: {
  //       WindowWidth(newval,oldval) {
  //         if(newval=== oldval){
  //             return
  //         }
  //         if(newval < 768){
  //            this.$store.dispatch('setFontSize', 10);
  //         }else if(768 < newval && newval<=1024){
  //            this.$store.dispatch('setFontSize', 15);
  //         }else if(newval > 1024){
  //            this.$store.dispatch('setFontSize', 30);
  //         }
  //       }
  //   }
}
</script>

<style>

#app { 
  height: 100%;
  min-width: 800px; 
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
