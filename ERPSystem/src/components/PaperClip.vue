<template>
     <div class="paperClip" :style="{ marginTop:optionSize*1.8+'px' }"> 
          <i class="icon iconfont icon-paperclip" :style="{ fontSize: optionSize*2/3 +'px' }" ></i> 
    </div>
</template>

<script>
export default {
    name:'PaperClip', 
    props:{
      optionSize:{
        type: Number,
        default: 20,
        required: true 
      }
    }
}

</script>
<style scoped> 
.icon-paperclip {  
    color: blue;
}
</style>