<template>
  <div id="app">
    <img src="./assets/logo.png">
    <one></one>
  </div>
</template>

<script>
import one from './components/one'

export default {
  name: 'App',
  components: {
    one
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
