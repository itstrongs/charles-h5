<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
        width: 100%;
        background: url('http://q8v5eiip8.bkt.clouddn.com/background.jpg') no-repeat;
        background-size: cover;
        position: absolute;
        overflow: hidden;
        left: 0;
        top: 0;
    }
</style>
