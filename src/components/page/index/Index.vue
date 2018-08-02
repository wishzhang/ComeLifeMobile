<template>
  <div>
    <IndexHeader></IndexHeader>
    <router-view id="index-content"></router-view>
    <IndexFooter></IndexFooter>
  </div>
</template>

<script>
  import IndexFooter from '@/components/page/index/IndexFooter'
  import IndexHeader from '@/components/page/index/IndexHeader'

  export default {
    name: "Index",
    components: {
      IndexFooter,
      IndexHeader
    }
  }
</script>

<style scoped>
  #index-content{
    margin-top:40px;
  }
</style>
