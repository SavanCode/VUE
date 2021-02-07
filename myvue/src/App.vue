<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to='/about'>about</router-link>|
    <router-link to='/HelloWorld'>HelloWorld</router-link>|
    <router-link to="/HelloWorld/one">子页面1</router-link> |
    <router-link to="/HelloWorld/two">子页面2</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
