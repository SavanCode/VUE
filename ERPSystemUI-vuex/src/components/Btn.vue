<template>
  <div class="BtnSpace">
      <button :class="[type==1 ? 'blue':'yellow',font? 'red': 'black','left_radius', spacing ? 'spacing':'']" :style="{ width: btnWidth +'px',fontSize:fontSize+'px',height:btnHeight+'px'}">{{name}}</button>
      <button class="right_radius blackBtn" :style="{height:btnHeight+'px'}"><i class="icon iconfont icon-Dots"></i></button>
      <button :style="{'display': search ? 'inline-block':'none', fontSize:fontSize+'px',height:btnHeight+'px'}" class="searchBtn"><i class="icon iconfont icon-icon-test"  :style="{fontSize:fontSize+'px'}"></i>查询</button>
  </div>
</template>

<script>
import { mapGetters} from 'vuex'
export default {
  name:'Btn',
  props: { 
      name: {
        type: String,
        default: 'defaultBtn',
        required: true 
      },
      type:{
        type: String,
        default: '2',
        required: true
      },
      search:{
        type: Boolean,
        default: false
      },
      font:{
        type:String,
        default:''
      },
      spacing:{
        type:Boolean,
        default:false
      },
      optionSize:{
        type: Number,
        default: 20,
      }, 
    },
    computed:{
      ...mapGetters([
        'window', 
      ]),
      btnWidth:function(){
        if(this.window.width<1200){
            return this.window.width/20
        }else{
          return this.window.width/10
        } 
      },
      btnHeight:function(){
        if(this.window.width<600){
            return this.window.height/60
        }else{
          return this.window.height/20
        } 
      }, 
      fontSize:function(){ 
        return this.window.width/100
      }
    }
}

</script>
<style scoped>
.BtnSpace{
  margin:45px 0;
  display: flex;
  align-items: center; 
}
.blue{
    background-color: rgb(130 225 255); 
}
.yellow{
    background-color: yellow; 
}
.searchBtn{   
    border-radius: 10px; 
}
.blue, .yellow, .searchBtn{
    border-style: solid; 
    min-height:30px;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
  }
.black{
  color:black;
}
.red{
  color: red
}
.left_radius{
  border-top-left-radius: 6px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 0px;
}

.right_radius{
  border-top-left-radius: 0px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 6px;
}
.blackBtn{
  min-height: 30px;   
  background-color: darkgray;
  display: flex;
  flex-direction: column-reverse;
}
.icon-Dots{
  font-size: x-small;
}
.spacing{
  letter-spacing: 5px
}
</style>