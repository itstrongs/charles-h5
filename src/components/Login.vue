<template>
    <div id="login">
        <el-row><el-col style="height: 100px"></el-col></el-row>

        <el-row>
            <el-col :span="8" :offset="8">
                <el-card shadow="always" >
                    <div>
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="用户名" prop="pass">
                                <el-input v-model="ruleForm.mobileNo" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="密码" prop="checkPass">
                                <el-input type="password" v-model="ruleForm.verifyCode" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                                <el-button @click="resetForm('ruleForm')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';

    export default {
        data() {
            const validateUsername = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                    if (this.ruleForm.mobileNo !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };

            const validatePassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else if (value !== this.ruleForm.verifyCode) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };

            return {
                ruleForm: {
                    mobileNo: '',
                    verifyCode: '',
                },

                rules: {
                    username: [
                        { validator: validateUsername, trigger: 'blur' }
                    ],
                    password: [
                        { validator: validatePassword, trigger: 'blur' }
                    ],
                },
            };
        },
        methods: {
            ...mapMutations(['changeLogin']),

            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let _this = this;
                        if (this.ruleForm.mobileNo === '' || this.ruleForm.verifyCode === '') {
                            alert('手机号或验证码不能为空');
                        } else {
                            this.$http({
                                method: 'post',
                                url: '/user/login',
                                data: _this.ruleForm
                            }).then(res => {
                                console.log(res.data);
                                _this.userToken = res.data.data.authorization;
                                // 将用户token保存到vuex中
                                _this.changeLogin({Authorization: _this.userToken});
                                _this.$router.push('/home');
                                alert('登陆成功');
                            }).catch(error => {
                                alert('账号或密码错误');
                                console.log(error);
                            });
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        }
    };
</script>

<style scoped>
</style>