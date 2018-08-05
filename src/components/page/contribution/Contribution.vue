<template>
    <div class="container-y">
        <div class="container-y" v-for="item in lists" :key="item._id">
            <div class="container-x app-content-padding">
                <img :src="item.avatarUrl" alt="" class="avatar">
                <div class="container-y container-item">
                    <div class="item-name">{{item.nickName}}</div>
                    <div class="item-content">{{item.jokeContent}}</div>
                    <div class="item-footer">
                        <span>{{item.publishTime}}</span>
                    </div>
                </div>
            </div>
            <div class="item-line"/>
        </div>
        <img class="add-img" src="./contribution_add.png" alt="" @click="toContributionAdd">
    </div>
</template>

<script>
    export default {
        name: "Contribution",
        data() {
            return {
                lists: [
                    {
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/MYtxJxbyx3I69u2t8MicHyuiaYH90el1ZFcreXJaokUBmGxOXZU6UmCyync7EvQce07l10StTasENeHemG5D03pg/132",
                        city: "Huizhou",
                        collectors: ["5b53496619ec245e3833f7e7"],
                        country: "China",
                        gender: 1,
                        isFavorite: false,
                        jokeContent: "科技",
                        nickName: "仰望星空",
                        owner: "5b53496619ec245e3833f7e7",
                        province: "Guangdong",
                        publishTime: "2018-07-28 13:53",
                        uid: undefined,
                        __v: 1,
                        _id: "5b5c04c9d21b090346ebd6b2"
                    }
                ]
            }
        },
        created() {
            this.fetchData()
        },
        methods: {
            toContributionAdd() {
                this.$router.push({name: 'contributionAdd'})
            },
            fetchData() {
                var _this = this;
                this.request.post('/allUserJoke')
                    .then(function (response) {
                        var data = response.data;
                        var d = _this.dataHandler(data);
                        console.log(d);
                        _this.lists = d;
                    })
                    .catch(function (error) {
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
                        joke.nickName = user.nickName;
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
        width: 40px;
        height: 40px;
        border-radius: 20px;
        position: fixed;
        right: 20px;
        bottom: 30px;
        background-color: blue;
    }
</style>
