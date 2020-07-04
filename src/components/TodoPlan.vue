<template>
    <div id="todo">
        <div class="m-margin-top">
            <el-button type="primary" plain size="mini" @click="getTodo">首页</el-button>
            <el-button type="primary" plain size="mini" @click="dialogFormVisible = true">新增</el-button>
        </div>

        <el-dialog title="新增TODO" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="内容" :label-width="formLabelWidth">
                    <el-input v-model="form.content" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="分类" :label-width="formLabelWidth">
                    <el-select v-model="form.typeId" placeholder="请选择类型">
                        <el-option :label="type.name" :value="type.id" v-for="type in categoryList" :key="type"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addTodo">确 定</el-button>
            </div>
        </el-dialog>

        <el-row :gutter="20">
            <el-col :span="18">
                <el-card class="box-card m-margin-top" v-for="(todo, index) in todoList" :key="todo">
                    <div class="text item" v-bind:class="{'m-text-decoration': todo.isFinish }">
                        <i v-if="todo.isSetTop" class="el-icon-top"></i> {{ index+1 }}. {{ todo.content }}
                    </div>

                    <div class="m-float-right">
                        <div><el-button size="mini" type="success" plain @click="getTodoByCategory(todo.typeId)">{{ todo.categoryName }}</el-button></div>
                    </div>

                    <div class="m-margin-top">
                        <span class="m-text-tip"><i class="el-icon-date m-margin-top"></i> {{ todo.updatedAt }}</span>
                        <i class="el-icon-edit-outline m-margin-left"></i>
                        <i class="el-icon-top m-margin-left" @click="updateTodo(todo.id, '', '', !todo.isSetTop)"></i>
                        <i class="el-icon-finished m-margin-left" @click="updateTodo(todo.id, '', !todo.isFinish, '')"></i>
                        <i class="el-icon-delete m-margin-left" @click="deleteTodo(todo.id)"></i>
                    </div>
                </el-card>
            </el-col>

            <el-col :span="6" class="m-margin-top">
                <el-card>
                    <div class="m-text-content-large"><i class="el-icon-folder"></i> 分类</div>
                    <el-divider></el-divider>
                    <div v-for="category in categoryList" :key="category" class="m-margin-top-big">
                        <el-link @click="getTodoByCategory(category.id)">{{ category.name }}</el-link>
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
                todoState: false,
                dialogFormVisible: false,
                form: {
                    content: '',
                    typeId: '',
                },
                formLabelWidth: '120px',
                categoryId: ''
            }
        },
        created() {
            this.getTodo();
            this.getCategory();
        },
        methods: {
            getTodo() {
                this.$http.get('/todo-plan/list?categoryId=' + this.categoryId, {
                    params: {}
                }).then(function (response) {
                    this.todoList = response.data.data;
                    console.log(this.typeList);
                }.bind(this))
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            getTodoByCategory(categoryId) {
                this.categoryId = categoryId;
                this.getTodo();
            },
            getCategory() {
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
            addTodo() {
                this.dialogFormVisible = false;
                this.$http({
                    url: '/todo-plan',
                    method: 'post',
                    data: this.form,
                    header: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    console.log("新增todo：" + res.data)
                    this.getTodo();
                });
            },
            updateTodo(id, content, isFinish, isSetTop) {
                console.log(id);
                console.log(content);
                console.log(isFinish);
                console.log(isSetTop);
                this.$http({
                    url: '/todo-plan/' + id,
                    data: {
                        content: content,
                        isFinish: isFinish,
                        isSetTop: isSetTop
                    },
                    header: {
                        'Content-Type': 'application/json'
                    },
                    method: 'put',
                }).then(res => {
                    console.log("更新成功" + res.data)
                    this.getTodo();
                });
            },
            deleteTodo(id) {
                this.$http({
                    url: '/todo-plan/' + id,
                    method: 'delete',
                }).then(res => {
                    console.log("删除成功" + res.data)
                    this.getTodo();
                });
            }
        }
    }
</script>
