<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "app",
        // watch: {
        //     "$router.name"(val) {
        //         console.log(val)
        //     }
        // } 
    };
</script>
<style lang="scss">
    #app {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
