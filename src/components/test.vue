<template>
    <h2 class="red">test....{{msg}}</h2>
</template>

<script>
    export default {
        name: "test",
        props: {
            msg: {
                type: String,
                default: "sd"
            }
        },
        methods: {

        },
        data() {

        }
    }
</script>

<style scoped>
.red {
    color: red;
}
</style>