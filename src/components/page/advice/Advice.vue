<template>
    <div class="container-y app-content-padding container-advice">
        <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
        <input class="contact" type="text" placeholder="联系方式" v-model="email">
        <mt-button class="submit-button" size="small" type="primary" @click="submit">提交</mt-button>
    </div>
</template>

<script>
    export default {
        name: "Advice",
        data(){
            return{
                content:'',
                email:''
            }
        },
        created(){
            this.$store.commit({
                type:'setTitle',
                title:'反馈与建议'
            })
        },
        methods:{
            submit(){
                if(this.content.trim().length<=0){
                    this.$toast('请输入内容~')
                    return;
                }
                var _this=this;
                var s=this.util.storage;
                var user_id=s.getObj(s.key.LOGIN).user_id;
                this.request.post('/addFeedback',{
                    content:this.content,
                    email:this.email,
                    user_id:user_id
                })
                    .then(function (res) {
                        var r=res.data;
                        if(r.code===0){
                            _this.$toast('提交成功')
                            _this.$router.go(-1)
                        }else{
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

    textarea{
        width: 100%;
        border:none;
        padding:10px;
        box-sizing: border-box;
    }

    input{
        width:100%;
        border: none;
        padding:10px;
        box-sizing: border-box;
    }

    .container-advice{
        align-items: center;
    }
    .contact{
        margin-top: 15px;
    }

    .submit-button{
        width:100%;
        margin-top: 35px;
    }
</style>