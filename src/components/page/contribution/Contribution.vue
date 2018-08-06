<template>
    <div class="container-y">
        <div v-if="isNormal">
            <div class="container-y" v-for="item in lists" :key="item._id">
                <div class="container-x app-content-padding">
                    <img :src="item.avatarUrl" alt="" class="avatar">
                    <div class="container-y container-item">
                        <div class="item-name">{{item.username}}</div>
                        <div class="item-content">{{item.jokeContent}}</div>
                        <div class="item-footer">
                            <span>{{item.publishTime}}</span>
                        </div>
                    </div>
                </div>
                <div class="item-line"/>
            </div>
        </div>
        <div class="error" v-else>
            <img src="../../../assets/img/error.png" alt="">
            <div class="error-text">{{errorMsg}}</div>
        </div>
        <div class="container-img">
            <img class="add-img" src="./contribution_add.png" alt="" @click="toContributionAdd">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Collection",
        data() {
            return {
                errorMsg: '',
                isNormal: true,
                lists: []
            }
        },
        created() {
            this.$store.commit({
                type: 'setTitle',
                title: '我的投稿'
            })
            this.fetchData()
        },
        methods: {
            toContributionAdd() {
                this.$router.push({name: 'contributionAdd'})
            },
            fetchData() {
                var _this = this;
                var s = this.util.storage
                var loginMsg = s.getObj(s.key.LOGIN)
                this.request.post('/login', loginMsg)
                    .then(function (response) {
                        var r = response.data;
                        if (r.code === 0) {
                            if (r.data.length !== 0) {
                                var d = _this.dataHandler(r);
                                _this.lists = d;
                                _this.isNormal = true;
                            } else {
                                _this.isNormal = false;
                                _this.errorMsg = '空空如也~';
                            }

                        } else {
                            _this.isNormal = false;
                            _this.errorMsg = '数据加载出错~';
                        }

                    })
                    .catch(function (error) {
                        _this.isNormal = false;
                        _this.errorMsg = '数据加载出错~';
                        console.log(error);
                    });
            },
            dataHandler: function (data) { //响应的对象
                var users = data.data;
                var arr = [];
                for (var i = 0; i < users.length; i++) {
                    var user = users[i];
                    var r = user.jokes;
                    for (var j = 0; j < r.length; j++) {
                        var joke = r[j];
                        joke.uid = user.uid;
                        joke.username = user.username;
                        joke.gender = user.gender;
                        joke.city = user.city;
                        joke.province = user.province;
                        joke.country = user.country;
                        joke.avatarUrl = user.avatarUrl;
                        joke.isFavorite = false;
                        var collector = joke.collectors;
                        // var user_id = getUserID();
                        // for (var k = 0; k < collector.length; k++) {
                        //     if (user_id === collector[k]) {
                        //         joke.isFavorite = true;
                        //         break;
                        //     }
                        // }
                        arr.push(joke);
                    }
                }
                arr.sort(this.util.compare('publishTime'))
                arr = this.util.jokesConvertTime(arr);
                return arr;
            },
        }
    }
</script>

<style scoped>

    .container-x {
        width: 100%;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        background-color: white;
    }

    .avatar {
        width: 36px;
        height: 36px;
        border-radius: 18px;
    }

    .container-item {
        padding-left: 10px;
        justify-content: space-between;
        box-sizing: border-box;
    }

    .item-name {
        height: 36px;
        line-height: 36px;
    }

    .item-content {
        min-height: 50px;
        display: flex;
        align-items: center;
    }

    .item-footer {
        display: flex;
        justify-content: space-between;
    }

    .item-line {
        width: 100%;
        height: 1px;
    }

    .item-favorite {
        width: 20px;
        height: 20px;
    }

    .add-img {
        width: 30px;
        height: 30px;
    }

    /*err*/
    .error {
        width: 100%;
        position: absolute;
        top: 25%;
        text-align: center;
    }

    .error-text {
        margin-top: 10px;
    }

    .container-img{
        width:50px;
        height:50px;
        border-radius: 25px;
        position:fixed;
        bottom: 30px;
        right:20px;
        background-color: blue;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
