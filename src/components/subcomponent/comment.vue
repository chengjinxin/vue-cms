<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请在此处bb(最多120个字)" maxlength="120" v-model="msg"></textarea>
        <mt-button type='primary' size='large' @click="postComment">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户:{{ item.user_name }}&nbsp;&nbsp;发表时间:{{ item.add_time | dateFormat }}
                </div>
                <div class="cmt-body">
                    {{ item.content === 'undefined' ? '此用户什么都没说' : item.content}}
                </div>
            </div>
        </div>
        <mt-button type='danger' size='large' plain @click='getMore'>加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
    export default {
        data () {
            return {
                // 页面默认为1
                pageIndex:1,
                comments:[],
                msg:''
            }
        },
        created () {
            this.getcomments()
        },
        methods:{
           getcomments() {
               this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
               .then(result => {
                //    console.log(result)
                   if(result.body.status === 0) {
                    //    加载跟多拼接
                       this.comments = this.comments.concat(result.body.message)
                   }else {
                       Toast('获取评论列表失败..请重试..')
                   }
               })
           } ,
        //    点击加载更多
           getMore () {
               this.pageIndex++
               this.getcomments()
           },
           //点击评论
           postComment() {
               if (this.msg.trim().length === 0) {
                   return Toast('你输入的内容为空')
               }
               this.$http.post("api/postcomment/" + this.id,{ comments:this.msg }).then(result => {
                   if(result.body.status === 0) {
                       //拼接一个评论对象
                       var cmt = {
                           user_name:'匿名用户',
                           add_time:Date.now(),
                           content:this.msg.trim()
                       }
                        this.comments.unshift(cmt)
                        this.msg = ''
                   }
               })
           }
        },
        props:['id']
    }
</script>

<style lang="less" scoped>
    .cmt-container {
        h3 {
            font-size:18px;
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list{
            margin: 10px 0;
          .cmt-item{
             .cmt-title{
                 line-height: 30px;
                 background-color: #ccc;
             }
             .cmt-body{
                line-height: 35px;
                text-indent: 2em;
             } 
          }  
        }
    }
</style>