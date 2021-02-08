<template>
  <div>
      <p>这是ID：{{ $route.params.id}}</p> 
      <div v-if="$route.params.userName"> 
        <p>这是名称：{{ $route.params.userName}}</p>
      </div>
</div>
</template>

<script>
export default {
 name:'User'
}

</script>
<style scoped>
</style>