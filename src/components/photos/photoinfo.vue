<template>
    <div class="photoinfo">
        <h3>{{ getInfos.title }}</h3>
        <p class="subtitle">
            <span>发表时间:{{ getInfos.add_time | dateFormat }}</span>
            <span>点击: {{ getInfos.click }} 次</span>
        </p>
        <hr>
        <!-- 缩略图 -->
        <img class="preview-img" :key="item.src" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)">

        <!-- 图片内容区域 -->
        <div class="content" v-html="getInfos.content"></div>

        <!-- 评论组件 -->
        <comment :id='id'></comment>

    </div>
</template>

<script>
    import comment from '../subcomponent/comment.vue'
    export default {
        data () {
            return {
                id:this.$route.params.id,
                getInfos:[] ,
                list:[]
            }
        },
        created() {
            this.getInfo()
            this.getthumImages ()
        },
        methods :{
            getInfo() {
                this.$http.get("api/getimageInfo/" + this.id).then(result => {
                    if (result.body.status === 0){
                        this.getInfos = result.body.message[0]
                    }
                })
            },
            // 获取缩略图
            getthumImages () {
                this.$http.get('api/getthumimages/' + this.id).then(result => {
                    if(result.body.status === 0) {
                        // 循环图片,补全每个图片的宽和高
                        result.body.message.forEach(item => {
                            item.w = 600;
                            item.h = 400;
                        });
                        this.list = result.body.message
                    }
                })
            }
        },
        components: {
            comment
        }
    }
</script>

<style lang="less">
    .photoinfo {
        padding: 3px;
        h3 {
            color: #26A2FF;
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle {
            display: flex;
            justify-content: space-between
        }

        .content {
            font-size: 13px;
            line-height: 30px;
        }
    }
</style>