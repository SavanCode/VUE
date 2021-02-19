<template>
  <div class="BtnSpace">
      <button :class="[type==1 ? 'blue':'yellow',font? 'red': 'black','left_radius']">{{name}}</button><button class="right_radius blackBtn">..</button><button :style="{'display': search ? 'inline-block':'none'}" class="searchBtn"><i class="icon iconfont icon-icon-test"></i>查询</button>
  </div>
</template>

<script>
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
    /* padding: 5px 30px; */
    border-style: solid;
    /* border-radius: 5px; */
    min-width: 171px;
    width: 171px;
    height: 30px; 
}
.yellow{
    background-color: yellow;
    /* padding: 5px 30px; */
    border-style: solid;
    /* border-radius: 5px; */
    min-width: 171px; 
    width: 171px;
    height: 30px; 
}
.searchBtn{
  /* padding:5px 5px */
    height: 30px; 
}
.black{
  back:black;
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
  height: 30px; 
  background-color: darkgray;
}


</style>