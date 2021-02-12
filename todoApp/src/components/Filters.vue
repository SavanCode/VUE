<template>
  <div>
      <button @click="$emit('clearDone')">Clear Completed Task</button> 
      <button @click="$emit('clearAll')">Clear All </button>  

  </div>
</template>

<script>
export default {
    name:'filters'
}

</script>
<style scoped>
</style>