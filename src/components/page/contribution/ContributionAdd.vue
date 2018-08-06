<template>
    <div class="container-y">
        <mt-field placeholder="写点啥..." type="textarea" rows="9" v-model="content" ></mt-field>
        <div class="container-img">
            <img class="submit-img" src="./jokeAdd_success.png" alt="" @click="submit">
        </div>
    </div>
</template>

<script>

    export default {
        name: "ContributionAdd",
        data() {
            return {
                content: ''
            }
        },
        methods: {
            submit() {
                if(this.content.trim().length<=0){
                    this.$toast('请输入内容');
                    return;
                }
                var _this = this;
                var loginMsg = this.util.storage.getObj(this.util.storage.key.LOGIN)
                var param = {
                    ...loginMsg,
                    jokeContent: this.content
                }
                this.request.post('/userJokeAdd', param)
                    .then(function (res) {
                        var r = res.data;
                        if (r.code === 0) {
                            _this.$toast('提交成功')
                            _this.$router.go(-1)
                        } else {
                            _this.$toast('提交失败')
                        }
                    })
                    .catch(function (err) {
                        console.log(err)
                        _this.$toast('提交失败')
                    })
            }
        }
    }
</script>

<style scoped>

    .content {
        background-color: white;
    }

    .submit-img {
        width: 30px;
        height: 30px;
    }

    .container-img {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        position: fixed;
        bottom: 30px;
        right: 20px;
        background-color: blue;
        display: flex;
        justify-content: center;
        align-items: center;
    }


</style>