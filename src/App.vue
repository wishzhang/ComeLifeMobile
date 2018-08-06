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
        },
        methods:{

        }
    }
</script>

<style>

</style>
