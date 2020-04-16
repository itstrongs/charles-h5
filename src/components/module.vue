<template>
    <div>
        <div>
            <div id="category">
                <ul>
                    <li class="li2" v-for="type in typeList" :key="type">
                        <a href="">{{ type.name }}</a>
                    </li>
                </ul>
            </div>
            <div id="content">
                <h3>/ 笔记 / 周记 / 2020-第16周</h3>
                <p>
                    纽约时间比加州时间早三个小时，<br>
                    New York is 3 hours ahead of California,
                </p>
                <p>
                    但加州时间并没有变慢。<br>
                    but it does not make California slow.
                </p>
                <p>
                    有人22岁就毕业了，<br>
                    Someone graduated at the age of 22,
                </p>
                <p>
                    有人25岁就当上CEO，<br>
                    Someone became a CEO at 25,
                </p>
                <p>
                    却在50岁去世。<br>
                    and died at 50.
                </p>
                <p>
                    也有人迟到50岁才当上CEO，<br>
                    While another became a CEO at 50,
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "module",
        props: {
        },
        data() {
            return {
                typeList: []
            }
        },
        created() {
            this.$http.get('/note-type/list?type=0', {
                params: {}
            }).then(function (response) {
                this.typeList = response.data.data
            }.bind(this))
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
</script>

<style scoped>
    .li2 {
        margin: 30px 0;
        font-size: 20px;
    }
    a {
        color: #42b983;
    }
    #category {
        width: 100px;
        height: 100%;
        float: left;
        background-color:#eeeeee;
        padding: 10px;
    }
    #content {
        width:350px;
        float: left;
        padding: 10px;
        margin-left: 30px;
    }
</style>