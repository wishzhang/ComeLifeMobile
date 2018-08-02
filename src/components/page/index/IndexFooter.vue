<template>
  <mt-tabbar v-model="selected">
    <mt-tab-item id="tab1">
      <router-link :to="{name:'home'}">
        <img slot="icon" src="assets/100x100.png">
        首页
      </router-link>
    </mt-tab-item>
    <mt-tab-item id="tab2">
      <router-link :to="{name:'linger'}">
        <img slot="icon" src="assets/100x100.png">
        逗留
      </router-link>
    </mt-tab-item>
    <mt-tab-item id="tab3">
      <router-link :to="{name:'mine'}">
        <img slot="icon" src="assets/100x100.png">
        我的
      </router-link>
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  export default {
    name: "IndexFooter",
    methods:{
      selected(){

      }
    }
  }
</script>

<style scoped>

</style>
