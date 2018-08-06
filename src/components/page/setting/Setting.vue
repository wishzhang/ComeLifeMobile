<template>
    <div class="container-y">
        <div class="outlogin">
            <mt-button class="outbutton" size="small" type="primary" @click="outLogin">退出登录</mt-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Setting",
        created(){
            this.$store.commit({
                type:'setTitle',
                title:'我的设置'
            })
        },
        methods:{
            outLogin(){
                this.global.isLogin=false
                this.global.userData=null;
                var s=this.util.storage;
                s.setObj(s.key.LOGIN,null);
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .outlogin {
        width: 100%;
        position: fixed;
        bottom:30px;
        text-align: center;
    }

    .outbutton{
        width:80%;
    }
</style>