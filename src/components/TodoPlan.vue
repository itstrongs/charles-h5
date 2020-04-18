<template>
    <div id="todo-plan">
        <div id="todo-category">
            <ul>
                <ol class="li2" v-for="type in typeList" :key="type">
                    <h3 v-on:click="getTodoList(type.id)">{{ type.name }}</h3>
                </ol>
            </ul>
        </div>
        <div id="todo-details">
            <ul>
                <ol class="li3" v-for="todo in todoList" :key="todo">
                    <div v-bind:class="{ todoFinish : todoState }">
                        <input type="checkbox" id="todo-state" v-on:click="todoState=!todoState">{{ todo.content }}
                    </div>
                </ol>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TodoPlan",
        data() {
            return {
                typeList: [],
                todoList: [],
                todoState: false
            }
        },
        created() {
            this.$http.get('/note-type/list?type=1', {
                params: {}
            }).then(function (response) {
                this.typeList = response.data.data
            }.bind(this)).catch(function (error) {
                console.log(error);
            });
        },
        methods: {
            getTodoList: function (typeId) {
                console.log(typeId);
                this.$http.get('/todo-plan/list?typeId=' + typeId).then(function (response) {
                    console.log(response);
                    this.todoList = response.data.data
                }.bind(this)).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>
    .li2 {
        margin: 30px 0;
        font-size: 20px;
    }
    .li3 {
        margin: 30px 0;
        font-size: 20px;
    }
    a {
        color: #42b983;
    }
    #todo-category {
        /*width: 100px;*/
        height: 100%;
        float: left;
        background-color:#eeeeee;
        /*padding: 10px;*/
    }
    #todo-details {
        width: 350px;
        float: left;
        margin-left: 20px;
    }
    .todoFinish {
        text-decoration: line-through;
    }
</style>