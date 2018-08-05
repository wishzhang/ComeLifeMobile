<template>
    <div id="app" class="container-y">
        <router-view name="index"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {}
        },
        created() {
            console.log('app init...');
            this.autoLogin()
        },
        methods:{
            autoLogin(){
                var _this=this;
                var s=this.util.storage
                var loginMsg=s.getObj(s.key.LOGIN)
                console.log('loginMsg...:'+JSON.stringify(loginMsg))
                if(loginMsg){
                    this.request.post('/login',loginMsg)
                        .then(function (res) {
                            var r=res.data;
                            if(r.code===0){
                                _this.global.isLogin=true;
                                _this.global.userData=r.data;
                                console.log('autoLogin success')
                            }else{
                                console.log('autoLogin failed:msg error');
                            }
                        })
                        .catch(function (err) {
                            console.log('autoLogin failed:server error');
                        })
                }else{
                    console.log('autoLogin failed:no login msg');
                }
            }
        }
    }
</script>

<style>

</style>
