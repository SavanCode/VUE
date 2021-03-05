<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "app",
        watch: {
             '$route' (to, from) { 
              console.log('to.path----',to.path)//跳转后路由
              console.log('from----',from)//跳转前路由 
              if(Object.is(from.name,"login") &&  !Object.is(to.name,"home")){
                    console.log("踢你一脚~")
                    this.$router.replace('/login');
              }
            } 
        } 
    };
</script>
<style lang="scss">
    #app {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
