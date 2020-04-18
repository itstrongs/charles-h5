<template>
    <div id="home">
        <div id="user">
            <img class="round_icon" v-bind:src="portrait" alt=""/>
            <span class="user_name">{{ nickname }}</span>
            <p>{{ signature }}</p>
        </div>
        <div id="module">
            <ul>
                <li class="li1"><h3 v-on:click="module='blog_note'">笔记</h3></li>
                <li class="li1"><h3 v-on:click="module='todo_plan'">土豆计划</h3></li>
                <li class="li1"><h3 v-on:click="module='photo_story'">照片故事</h3></li>
                <li class="li1"><h3 v-on:click="module='micro_sentence'">微话</h3></li>
                <li class="li1"><h3 v-on:click="module='person_friends'">心事圈</h3></li>
            </ul>
        </div>
        <div>
            <div v-if="module === 'blog_note'">
                <BlogNote/>
            </div>
            <div v-else-if="module === 'todo_plan'">
                <TodoPlan/>
            </div>
            <div v-else-if="module === 'photo_story'">
                <PhotoStory/>
            </div>
            <div v-else-if="module === 'micro_sentence'">
                <MicroSentence/>
            </div>
            <div v-else-if="module === 'person_friends'">
                <PersonFriends/>
            </div>
        </div>
    </div>
</template>

<script>
    import BlogNote from "@/components/BlogNote";
    import TodoPlan from "@/components/TodoPlan";
    import PhotoStory from "@/components/PhotoStory";
    import MicroSentence from "@/components/MicroSentence";
    import PersonFriends from "@/components/PersonFriends";

    export default {
        name: "home",
        components: {PersonFriends, MicroSentence, PhotoStory, TodoPlan, BlogNote},
        data() {
            return {
                nickname: '',
                signature: '',
                portrait: '',
                module: 'blog_note',
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
    #home {
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
        padding: 0;
        margin: 0;
        vertical-align: middle;
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