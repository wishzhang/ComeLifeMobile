<template>
    <div class="container-y">
        <div class="header">
            <img src="https://wx.qlogo.cn/mmopen/vi_32/MYtxJxbyx3I69u2t8MicHyuiaYH90el1ZFcreXJaokUBmGxOXZU6UmCyync7EvQce07l10StTasENeHemG5D03pg/132"
                 alt="" class="atavar">
            <span class="nickname">仰望星空</span>
        </div>
        <div class="container-y">
            <div class="item app-content-padding" @click="toContribution">
                <img class="item-img" src="./contribution.png" alt="">
                <span class="item-text">我的投稿</span>
            </div>

            <div class="item app-content-padding" @click="toCollection">
                <img class="item-img" src="./collection.png" alt="">
                <span class="item-text">我的收藏</span>
            </div>

            <div class="item app-content-padding" @click="toSetting">
                <img class="item-img" src="./setting.png" alt="">
                <span class="item-text">我的设置</span>
            </div>

            <div class="item app-content-padding" @click="toAdvice">
                <img class="item-img" src="./feedback.png" alt="">
                <span class="item-text">反馈与建议</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Mine",
        created(){
            this.$store.commit({
                type:'setTitle',
                title:'我的'
            })
        },
        methods:{
            toContribution(){
                if(this.global.isLogin){
                    this.$router.push({name:'contribution'})
                }else{
                    this.$router.push({name:'login'})
                }
            },
            toCollection(){
                if(this.global.isLogin){
                    this.$router.push({name:'collection'})
                }else{
                    this.$router.push({name:'login'})
                }
            },
            toSetting(){
                if(this.global.isLogin){
                    this.$router.push({name:'setting'})
                }else{
                    this.$router.push({name:'login'})
                }
            },
            toAdvice(){
                if(this.global.isLogin){
                    this.$router.push({name:'advice'})
                }else{
                    this.$router.push({name:'login'})
                }
            }
        }
    }
</script>

<style scoped>
    .header {
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: blue;
    }

    .atavar {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        margin-bottom: 5px;
    }

    .nickname {
    }

    .item {
        display: flex;
        align-items: center;
        background-color: white;
        margin-top: 5px;
        margin-bottom: 5px;

    }

    .item-img {
        width: 18px;
        height: 18px;
        margin-right: 5px;
    }

    .item-text {
    }
</style>
