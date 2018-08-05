<template>
    <div class="container-y">
        <div class="container-x">
            <div class="nav-item">
                <img class='nav-item-img' src="./talk_entry.png" alt="">
                <span class="nav-item-text">言语</span>
            </div>
            <div class="nav-item">
                <img class='nav-item-img' src="./load_entry.png" alt="">
                <span class="nav-item-text">轨迹</span>
            </div>
            <div class="nav-item">
                <img class='nav-item-img' src="./aim_entry.png" alt="">
                <span class="nav-item-text">青果</span>
            </div>
            <div class="nav-item">
                <img class='nav-item-img' src="./question_entry.png" alt="">
                <span class="nav-item-text">不懂</span>
            </div>
        </div>

        <div class="container-y container-sentence">
            <div>
                <h3 class="sentence-header">句子迷</h3>
                <div class="item-line"/>
            </div>
            <div v-for="item in lists" class="container-y">
                <div class="container-sentence-item">
                    <span class="item-content">{{item.content}}</span>
                    <span class="item-author">-- {{item.author}}</span>
                </div>
                <div class="item-line"/>
            </div>
        </div>
    </div>
</template>

<script>
    //把一个对象的值拷贝到另一对象对应的键的值
    export default {
        name: "Linger",
        data(){
           return{
               lists:[
                   {
                       _id:'1',
                       "content": "你如果认识从前的我，也许你会原谅现在的我。",
                       "author": "张爱玲",
                   },
                   {
                       "_id": "5b54b460d21b090346ebd692",
                       "content": "我不知是否该相信 \n这是上苍对我的庇依 \n但作为一个无神论者 \n此刻也应感激上帝 \n我抓到了如恒星一般 \n炙热闪耀的你 \n从此你便是 \n我生命唯一的轨迹",
                       "author": "《蝉女》",
                       "__v": 0
                   },
               ]
           }
        },
        created:function () {
            this.fetchData();
        },
        methods:{
            fetchData(){
                var _this=this;
                this.request.post('/getSentences')
                    .then(function (res) {
                        var r=res.data;
                        _this.lists=r.data;
                    })
                    .catch(function (err) {

                    })
            }
        }

    }
</script>

<style scoped>
    .container-x{
        display: flex;
        background-color: white;
    }

    .nav-item{
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }

    .nav-item-img{
        width:36px;
        height:36px;
        border-radius: 18px;
    }

    .nav-item-text{

    }

    .item-author{
        align-self: flex-end;
    }

    /*
        句子迷
    */

    .container-sentence{
        margin-top:15px;
        background-color: white;
    }

    .sentence-header{
        padding-left: 20px;
    }

    .item-line{
        width: 100%;
        height:1px;
        background-color: gray;
    }

    .container-sentence-item{
        display: flex;
        flex-direction: column;
        padding-top: 15px;
        padding-left: 10px;
        padding-bottom: 10px;
        padding-right: 10px;
    }
</style>
