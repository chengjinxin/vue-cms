<template>
    <div class="newsinfo-container">
        <h3>{{ newsinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间:{{ newsinfo.add_time | dateFormat }}</span>
            <span>点击:{{ newsinfo.click }}</span>
        </p>
        <hr>
        <div class="content" v-html='newsinfo.content'></div>
        <!-- 评论列表 -->
        <comment :id='this.id'></comment>
    </div>
</template>

<script>
// 导入评论组件
import comment from '../subcomponent/comment.vue'
    export default {
        data() {
            return {
                id:this.$route.params.id,
                newsinfo:{}
            }
        },
        created() {
            this.getnewsinfo()
        },
        methods:{
            getnewsinfo() {
                this.$http.get('api/getnew/' + this.id).then(result => {
                    if (result.body.status === 0) {
                        this.newsinfo = result.body.message[0]
                    }else{
                        // Toast('获取数据失败')
                    }
                })
            } 
        },
        components:{
            comment
        }
    }
</script>

<style lang="less">
    .newsinfo-container {
        padding: 0 4px;
        .title {
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle {
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between
        }
        .content {
            img {
                width: 100%;
            }
        }
    }
</style>
