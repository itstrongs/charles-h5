<template>
    <div id="app">
        <div id="home">
            <div id="user">
                <img class="round_icon" v-bind:src="portrait" alt=""/>
                <span class="user_name">{{ nickname }}</span>
                <p>{{ signature }}</p>
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
        },
        data() {
            return {
                nickname: '',
                signature: '',
                portrait: ''
            }
        },
        created() {
            this.$http.get('/user', {
                params: {}
            }).then(function (response) {
                let userInfo = response.data.data
                this.nickname = userInfo.nickname
                this.signature = userInfo.signature
                this.portrait = userInfo.portrait
            }.bind(this))
                .catch(function (error) {
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
