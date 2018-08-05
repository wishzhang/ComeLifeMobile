<template>
    <div class="container-y">
        <IndexHeader></IndexHeader>
        <router-view class="index"></router-view>
    </div>
</template>

<script>
    import IndexHeader from '$src/components/page/indexBack/IndexHeader.vue'

    export default {
        name: "IndexBack",
        components: {
            IndexHeader
        }
    }
</script>

<style scoped>

</style>