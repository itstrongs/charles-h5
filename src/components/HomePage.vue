<template>
    <div>
        <div id="title">
            <ul>
                <li><a href="">笔记</a></li>
                <li><a href="">TODO</a></li>
                <li><a href="">照片故事</a></li>
                <li><a href="">微话</a></li>
                <li><a href="">心事圈</a></li>
            </ul>
        </div>
        <div>
            <h3>/ 兵荒马乱 / 周记 / 2020-第16周</h3>
            <p>今天熬夜到2点花12块钱提前解锁看完了余欢水。</p>
            <p>特别喜欢这部剧。</p>
            <p>整部剧讽刺意味颇多，剧里每一个人都不是什么好人，有些人坏的露骨，有些人坏的表里不一。藏的最深的可能是清纯可爱的栾冰然（然并卵）。</p>
            <p>结局看起来一切都变了，但其实一切又都没变，又重新回到了车祸前的余欢水，新老婆跟前妻差不多，经济地位也相当，一切重新来，新的悲喜剧又会重新上演。感觉就是在讽刺这个社会一直就是这样，循环往复不曾更改。</p>
            <p>日光之下，并无新事。所有发生过的悲剧还会继续发生，人从来不是长记性的动物。</p>
<!--            <p>{{ message2 }}</p>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomePage",
        props: {
            json: {
                type: String,
                default: "返回值"
            }
        },
        data() {
            return {
                message2: 'sd'
            }
        },
        created() {
            this.$http.get('https://cnodejs.org/api/v1/topics', {
                params: {}
            })
                .then(function (response) {
                    let list = response.data.data
                    console.log("返回值: " + response);
                    this.message2 = list[0].content
                    // this.json = list[0].content
                }.bind(this))
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    #title {
        width: 500px;
        margin: 0 auto;
    }
</style>