<template>
    <div class="container">
        this is layout
        <div class="body"> 
                <router-view/> 
        </div>
    </div>
</template>

<style lang="scss">
    body {
        margin: 0;
        min-width: 1366px;
        min-height: 768px;
    }

    .container {
        color: #2c3e50;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
    .body {
        top: 60px;
        right: 0;
        left: 0;
        bottom: 0;
        padding: 4px 1px 4px 4px;
        position: absolute;
        background: #f0f2f5;
    }
</style>