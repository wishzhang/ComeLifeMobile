<template>
    <div>
        <IndexHeader></IndexHeader>
        <router-view id="index-content"></router-view>
        <IndexFooter></IndexFooter>
    </div>
</template>

<script>
    import IndexFooter from './IndexFooter.vue'
    import IndexHeader from './IndexHeader.vue'

    export default {
        name: "Index",
        components: {
            IndexFooter,
            IndexHeader
        }
    }
</script>

<style scoped>
    #index-content {
        margin-top: 40px;
    }
</style>
