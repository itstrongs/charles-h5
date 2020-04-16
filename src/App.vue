<template>
    <div id="app">
        <div id="home">
            <div id="user">
                <img class="round_icon" src="https://pic2.zhimg.com/80/v2-86cf45e7f34a38f5f4e20559f7d6fb35_hd.jpg" alt=""/>
                <span class="user_name">兵荒马乱</span>
                <p>可时光啊，不听话，总催着人长大。</p>
            </div>
            <HomePage></HomePage>
        </div>
    </div>
</template>

<script>
    import HomePage from './components/HomePage.vue'
    export default {
        name: 'App',
        components: {
            HomePage
        }
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
    #home {
        width: 1000px;
        height: 100%;
        margin: 0 auto;
        color: #2c3e50;
        padding: 30px;
        background-color: #FFFFFF;
    }
    .round_icon {
        padding:0;
        margin:0;
        vertical-align:middle;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
    }
    .user_name {
        color: #333333;
        font-size: 30px;
        font-weight: bold;
        margin-left: 20px;
    }
</style>
