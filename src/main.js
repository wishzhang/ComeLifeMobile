// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue/dist/vue'
import App from '$src/App.vue'
import router from '$src/router/index'
import store from '$src/store/index'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.use(Mint);


Vue.config.productionTip = false


new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
