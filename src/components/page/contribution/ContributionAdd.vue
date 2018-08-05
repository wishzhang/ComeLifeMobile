<template>
    <div class="container-y">
        <textarea class="content app-content-padding" v-model="content" id="" cols="30" rows="10" placeholder="请输入"></textarea>
        <img class="submit-img" src="./jokeAdd_success.png" alt="" @click="submit">
    </div>
</template>

<script>
    export default {
        name: "ContributionAdd",
        data(){
            return{
                content:''
            }
        },
        methods:{
            submit(){

            }
        }
    }
</script>

<style scoped>

    .content{
        background-color: white;
    }

    .submit-img{
        width:40px;
        height:40px;
        border-radius: 20px;
        position: fixed;
        right:20px;
        bottom: 30px;
        background-color: blue;
    }
</style>