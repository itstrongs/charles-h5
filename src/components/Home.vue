<template>
    <div id="home">
        <el-row :gutter="20">
            <el-col :span="6" :offset="4">
                <div>
                    <el-avatar v-bind:src="portrait"></el-avatar>
                    <span class="m-text-title m-text-align">{{ nickname }} | 潇湘馆</span>

                    <p>{{ signature }}</p>
                </div>
            </el-col>

            <el-col :span="10">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                         active-text-color="#ffd04b">
                    <el-menu-item index="1">笔记</el-menu-item>
                    <el-menu-item index="2">TODO</el-menu-item>
                    <el-menu-item index="3">微话</el-menu-item>
                    <el-menu-item index="4">回忆</el-menu-item>
                    <el-menu-item index="5">心事</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="16" :offset="4">
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
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import PersonFriends from "@/components/PersonFriends";
    import MicroSentence from "@/components/MicroSentence";
    import PhotoStory from "@/components/PhotoStory";
    import TodoPlan from "@/components/TodoPlan";
    import BlogNote from "@/components/BlogNote";

    export default {
        name: "home",
        components: {PersonFriends, MicroSentence, PhotoStory, TodoPlan, BlogNote},
        data() {
            return {
                nickname: '',
                signature: '',
                portrait: '',
                module: 'blog_note',
                activeIndex: '1'
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
        },
        methods: {
            handleSelect(key) {
                console.log(key);
                if (key === '1') {
                    this.module = "blog_note"
                } else if (key === '2') {
                    this.module = "todo_plan"
                }
            }
        }
    }
</script>
