<template>
    <div id="todo">
        <el-row :gutter="20">
            <el-col :span="18">
                <el-card class="box-card m-margin-top" v-for="(note, index) in todoList" :key="note">
                    <div class="text item" v-bind:class="{'m-text-decoration': note.finish }">
                        <i v-if="note.isSetTop" class="el-icon-top"></i> {{ index }}. {{ note.content }}
                    </div>

                    <div class="m-float-right">
                        <div><el-button size="mini" type="success" plain>{{ note.categoryName }}</el-button></div>
                    </div>

                    <div class="m-margin-top">
                        <span class="m-text-tip"><i class="el-icon-date m-margin-top"></i> {{ note.updatedAt }}</span>
                        <i class="el-icon-edit-outline m-margin-left"></i>
                        <i class="el-icon-top m-margin-left"></i>
                        <i class="el-icon-finished m-margin-left"></i>
                        <i class="el-icon-delete m-margin-left"></i>
                    </div>
                </el-card>
            </el-col>

            <el-col :span="6" class="m-margin-top">
                <el-card>
                    <div class="m-text-content-large"><i class="el-icon-folder"></i> 分类</div>
                    <el-divider></el-divider>
                    <div v-for="category in categoryList" :key="category" class="m-margin-top-big">
                        <el-link href="#">{{ category.name }}</el-link>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "TodoPlan",
        data() {
            return {
                categoryList: [],
                todoList: [],
                todoState: false
            }
        },
        created() {
            this.$http.get('/todo-plan/list', {
                params: {}
            }).then(function (response) {
                this.todoList = response.data.data;
                console.log(this.typeList);
            }.bind(this))
                .catch(function (error) {
                    console.log(error);
                });

            this.$http.get('/category/list?moduleType=1', {
                params: {}
            }).then(function (response) {
                this.categoryList = response.data.data;
                console.log(this.typeList);
            }.bind(this))
                .catch(function (error) {
                    console.log(error);
                });
        },
        methods: {
            noteDetails(index) {
                this.$http.get('/note/' + index, {
                    params: {}
                }).then(function (response) {
                    // this.typeList = response.data.data;
                    console.log(response);
                }.bind(this))
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>
