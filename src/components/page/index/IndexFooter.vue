<template>
    <div class="footer-container">
        <router-link @click.native="setTitle(item.title)" v-for="item in tablist" :to="item.toObj" class="footer-item" active-class="app-active-class" id="item.id" :key="item.id">
            <img class="footer-icon" :src="item.iconPath">
            <span>{{item.title}}</span>
        </router-link>
    </div>
</template>

<script>
    import home from '$src/components/page/index/home_selected.png'
    import linger from '$src/components/page/index/smile_selected.png'
    import mine from '$src/components/page/index/mine_selected.png'
    export default {
        name: "IndexFooter",
        data(){
            return{
               tablist:[
                   {
                       id:1,
                       toObj:{name:'home'},
                       iconPath:home,
                       title:'首页'
                   },
                   {
                       id:2,
                       toObj:{name:'linger'},
                       iconPath:linger,
                       title:'逗留'
                   },
                   {
                       id:3,
                       toObj:{name:'mine'},
                       iconPath:mine,
                       title:'我的'
                   }
               ] 
            }
        },
        methods: {
            setTitle(title){
                this.$store.commit({
                    type:'setTitle',
                    title:title
                })
            }
        }
    }
</script>

<style scoped>
    .footer-container {
        position: fixed;
        left: 0;
        bottom: 0;
        height: 46px;
        box-sizing: border-box;
        display: flex;
        width: 100%;
        border-top:1px solid gray;
        z-index:1000;
        background-color: white;
    }

    .footer-item {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .footer-icon {
        width: 24px;
        height: 24px;
    }

    .app-active-class{
        background-color: lightblue;
    }

    a:-webkit-any-link {
        cursor: auto;
        text-decoration: none;
    }
</style>
