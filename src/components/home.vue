<template>
    <div id="nav">
        <div id="user">
            <img class="round_icon" v-bind:src="portrait" alt=""/>
            <span class="user_name">{{ nickname }}</span>
            <p>{{ signature }}</p>
        </div>
        <div id="module">
            <ul>
                <li class="li1"><router-link to="/login">笔记</router-link></li>
                <li class="li1"><router-link to="/">TODO</router-link></li>
                <li class="li1"><a href="">照片故事</a></li>
                <li class="li1"><a href="">微话</a></li>
                <li class="li1"><a href="">心事圈</a></li>
            </ul>
        </div>
        <module/>
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                nickname: '',
                signature: '',
                portrait: ''
            }
        },
        created() {
            this.$http.get('/user').then(function (response) {
                if (response.data.code === 401) {
                    localStorage.removeItem('Authorization');
                    this.$router.push('/login');
                } else {
                    let userInfo = response.data.data
                    this.nickname = userInfo.nickname
                    this.signature = userInfo.signature
                    this.portrait = userInfo.portrait
                }
            }.bind(this)).catch(function (error) {
                console.log(error);
            });
        }
    }
</script>

<style scoped>
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