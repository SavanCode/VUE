<template>
  <div class="BtnSpace">
      <button :class="[type==1 ? 'blue':'yellow',font? 'red': 'black','left_radius', spacing ? 'spacing':'']">{{name}}</button>
      <button class="right_radius blackBtn"><i class="icon iconfont icon-Dots"></i></button>
      <button :style="{'display': search ? 'inline-block':'none'}" class="searchBtn"><i class="icon iconfont icon-icon-test"></i>查询</button>
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
      },
      spacing:{
        type:Boolean,
        default:false
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
    border-style: solid;
    /* min-width: 131px;
    width: 131px; */
    width: 10vw;
    /* height: 30px;  */
    height:2vw;
    min-height:30px;
    display: block;/*重要的*/
    overflow: hidden;
    white-space: nowrap;/* 换行不显示*/
    text-overflow:ellipsis;/*这行以上必要*/
}
.yellow{
    background-color: yellow;
    border-style: solid;
    /* min-width: 131px;
    width: 131px; */
    width: 10vw;
    /* height: 30px;  */
    height:2vw;
    min-height:30px;
    display: block;/*重要的*/
    overflow: hidden;
    white-space: nowrap;/* 换行不显示*/
    text-overflow:ellipsis;/*这行以上必要*/
}
.searchBtn{
    /* height: 30px;  */
    height:2vw;
    min-height: 30px;
    border-radius: 10px;
    display: block;/*重要的*/
    overflow: hidden;
    white-space: nowrap;/* 换行不显示*/
    text-overflow:ellipsis;/*这行以上必要*/
    width: 5vw;
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
  /* height: 30px;  */
  height:2vw;
  min-height:30px;
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


@media screen and (max-width: 768px) {
  button {
    font-size: 1vw !important;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  button {
    font-size: 1vw  !important;
  }
}

@media screen and (min-width: 1024px) {
  button {
    font-size: 1vw !important;
  }
}
</style>