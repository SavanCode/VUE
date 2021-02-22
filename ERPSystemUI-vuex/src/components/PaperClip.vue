<template>
     <div class="paperClip" :style="{ marginTop:optionWidth*1.8+'px' }"> 
          <i class="icon iconfont icon-paperclip" :style="{ fontSize: optionWidth*2/3 +'px' }" ></i> 
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:'PaperClip',  
  computed:{
    ...mapGetters([
      'optionWidth' 
    ]) 
  },
}

</script>
<style scoped> 
.icon-paperclip {  
    color: blue;
}
</style>