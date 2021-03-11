<template>
  <div>this is {{user}}</div>
</template>

<script>
export default {
  computed: {
    //{ "isAdmin": false, "userName": "s11111" }
    user() {
      return this.$store.getters.user
    }
  }
}

</script>
<style scoped>
</style>