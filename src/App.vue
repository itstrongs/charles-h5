<template>
    <div id="app">
        <div id="nav">
            <div id="user">
                <img class="round_icon" v-bind:src="portrait" alt=""/>
                <span class="user_name">{{ nickname }}</span>
                <p>{{ signature }}</p>
            </div>
            <div id="module">
                <ul>
                    <li class="li1"><a href="">笔记</a></li>
                    <li class="li1"><a href="">TODO</a></li>
                    <li class="li1"><a href="">照片故事</a></li>
                    <li class="li1"><a href="">微话</a></li>
                    <li class="li1"><a href="">心事圈</a></li>
                </ul>
            </div>
            <module/>
        </div>
    </div>
</template>

<script>
    import module from './components/module.vue'
    export default {
        name: 'App',
        components: {
            module
        },
        data() {
            return {
                nickname: '',
                signature: '',
                portrait: ''
            }
        },
        created() {
            this.$http.get('/user').then(function (response) {
                let userInfo = response.data.data
                this.nickname = userInfo.nickname
                this.signature = userInfo.signature
                this.portrait = userInfo.portrait
            }.bind(this)).catch(function (error) {
                console.log(error);
            });
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
    #nav {
        width: 1000px;
        height: 100%;
        margin: 0 auto;
        color: #2c3e50;
        padding: 30px;
        background-color: #FFFFFF;
    }
    #module {
        width: 500px;
        margin: 0 auto;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    .li1 {
        display: inline-block;
        margin: 0 10px;
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
