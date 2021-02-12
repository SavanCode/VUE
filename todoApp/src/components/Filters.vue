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
button{
    color: white;
    background-color: #e77348;
    border: none;
    padding: 5px;
}
</style>