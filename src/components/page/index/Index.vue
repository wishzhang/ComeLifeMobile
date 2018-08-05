<template>
    <div class="container-y">
        <IndexHeader></IndexHeader>
        <router-view class="index index-content"></router-view>
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
    .index-content {
        margin-bottom: 46px;
    }
</style>
