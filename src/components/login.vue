<template>
    <div id="login">
        <input type="text" v-model="loginForm.mobileNo" placeholder="手机号"/>
        <input type="text" v-model="loginForm.verifyCode" placeholder="验证码"/>
        <button @click="login">登录</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        data () {
            return {
                loginForm: {
                    mobileNo: '',
                    verifyCode: ''
                }
            };
        },
        methods: {
            ...mapMutations(['changeLogin']),
            login () {
                let _this = this;
                if (this.loginForm.mobileNo === '' || this.loginForm.verifyCode === '') {
                    alert('手机号或验证码不能为空');
                } else {
                    this.$http({
                        method: 'post',
                        url: '/user/login',
                        data: _this.loginForm
                    }).then(res => {
                        console.log(res.data);
                        _this.userToken = res.data.data.authorization;
                        // 将用户token保存到vuex中
                        _this.changeLogin({ Authorization: _this.userToken });
                        _this.$router.push('/home');
                        alert('登陆成功');
                    }).catch(error => {
                        alert('账号或密码错误');
                        console.log(error);
                    });
                }
            }
        }
    };
</script>

<style scoped>
    #login {
        width: 100px;
        height: 100px;
        margin: 100px auto;
    }
</style>