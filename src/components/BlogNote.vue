<template>
    <div id="note">
        <div v-if="pageIndex === 0">
            <el-row :gutter="20">
                <el-col :span="18">
                    <el-card class="box-card m-margin-top" v-for="note in typeList" :key="note">
                        <div slot="header" class="clearfix">
                            <el-link href="#" class="m-text-title"><i v-if="note.isSetTop" class="el-icon-top"></i> {{ note.name }}</el-link>
                            <el-button class="m-float-right" size="mini" type="success" plain>{{ note.categoryName }}</el-button>
                        </div>

                        <div class="text item">
                            {{ note.content }}
                        </div>

                        <div class="m-margin-top">
                            <el-avatar src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577012344545&di=79095a81296c54a950cbe4c8db05a10d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201506%2F04%2F20150604214559_BKmFJ.jpeg" size="small"></el-avatar>
                            <span class="m-teal m-margin-left">小小强者</span>
                            <span class="m-text-tip m-margin-left"><i class="el-icon-date m-margin-top"></i> {{ note.createdAt }}</span>
                            <el-button class="m-float-right" size="mini" @click="noteDetails(note.id)">阅读全文 <i class="el-icon-d-arrow-right"></i></el-button>
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

        <div v-else-if="pageIndex === 1">

        </div>
    </div>
</template>

<script>
    export default {
        name: "BlogNote",
        props: {},
        data() {
            return {
                typeList: [],
                pageIndex: 0,
                categoryList: [],
            }
        },
        created() {
            this.$http.get('/note/list', {
                params: {}
            }).then(function (response) {
                this.typeList = response.data.data;
                console.log(this.typeList);
            }.bind(this))
                .catch(function (error) {
                    console.log(error);
                });

            this.$http.get('/category/list?moduleType=0', {
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

<style scoped>
</style>
