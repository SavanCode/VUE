<template>
  <div>
      <input type="text" name="" id="" placeholder="please enter name which you want to search for" v-model="keyword" />
  </div>
</template>

<script>
export default {
    name:'search-bar',
    data() {
        return {
           keyword:''
        }
    }, 
    watch: {
        keyword: function (value) {
            console.log(value);
            this.$emit('search', value)
        }
    },  
}

</script>
<style scoped>
</style>