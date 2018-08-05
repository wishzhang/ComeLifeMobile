<template>
    <mt-header fixed :title="title">
        <a slot="left" @click="goBack">
            <mt-button icon="back">返回</mt-button>
        </a>
    </mt-header>
</template>

<script>
    export default {
        name: "IndexHeader",
        computed:{
            title(){
                return this.$store.state.title
            }
        },
        methods:{
            goBack(){
               this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>

</style>
