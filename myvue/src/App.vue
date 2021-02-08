<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <button @click="aboutClick">about</button>
    <router-link to='/about'>about</router-link>| 
    <router-link to='/HelloWorld' exact>HelloWorld</router-link>|
    <router-link to="/HelloWorld/one" >子页面1</router-link> |
    <router-link to="/HelloWorld/two" >子页面2</router-link>  | 
    <router-link :to="{ name: 'UserList'}">UserList</router-link> | 
    <router-link :to="{ name: 'User', params: { id: 123 }}">User123 without name</router-link> | 
     <router-link :to="{ name: 'User', params: { id: 456, userName: '456' }}">User456 with name 456</router-link> | 
   
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    aboutClick() {
      this.$router.push('/about')
      // this.$router.replace('/about')//replace 等价于replaceState
      console.log("aboutClick")
    }
  },
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
