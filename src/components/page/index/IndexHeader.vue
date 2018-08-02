<template>
  <mt-header fixed :title="title"></mt-header>
</template>

<script>
    export default {
        name: "IndexHeader",
        computed:{
            title(){
                return this.$store.state.title
            }
        }
    }
</script>

<style scoped>

</style>
