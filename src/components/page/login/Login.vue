<template>
    <div class="container-y app-content-padding container-register">
        <div class="input-box">
            <label class="app-label" for="username">用户名</label>
            <input id="username" class="app-input" type="text" placeholder="输入用户名" v-model="username"/>
        </div>
        <div class="input-box">
            <label class="app-label" for="password">密码</label>
            <input id="password" class="app-input" type="password" placeholder="输入密码" v-model="password"/>
        </div>
        <mt-button size="small" type="primary" class="button" @click="login">登录</mt-button>
        <router-link class="to-rigister" :to="{name:'register'}">还没有注册？点击注册</router-link>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                username: '',
                password: ''
            }
        },
        created() {
            this.$store.commit({
                type: 'setTitle',
                title: '登录'
            })
        },
        methods: {
            login() {
                var _this = this;
                this.request.post('/login', {
                    username: _this.username,
                    password: _this.password
                })
                    .then(function (res) {
                        var r=res.data;
                        if(r.code===0){
                            _this.global.isLogin=true;
                            _this.global.userData=r.data;

                            _this.util.storage.setObj(_this.util.storage.key.LOGIN,{
                                username:_this.util.guid(),
                                user_id:r.data._id
                            });
                            _this.$router.go(-1);
                            _this.$toast('登录成功')
                        }else if(r.code===1){
                            _this.$toast('登录失败,服务器内部错误');
                        }else if(r.code===2){
                            _this.$toast('登录失败，账号或密码错误')
                        }
                    })
                    .catch(function (err) {
                        console.log(err)
                        _this.$toast('登录失败，连接服务器出错');
                    })
            }
        }
    }
</script>

<style scoped>

    .container-register {
        align-items: center;
        margin-top: 100px;
    }

    .input-box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 10px;
    }

    .app-label {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .app-input {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 15px;
        padding-right: 15px;
        outline: none;
        border-radius: 5px;
        border: 1px solid gray;
    }

    .button {
        width: 80%;
        margin-top: 20px;
    }

    .to-rigister{
        width: 80%;
        margin-top: 15px;
        text-align: right;
    }
</style>