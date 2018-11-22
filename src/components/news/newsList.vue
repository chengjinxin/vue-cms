<template>
    <div class="newList">
        <ul class="mui-table-view">
		    <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
		    	<a href="javascript:;">
		    		<img class="mui-media-object mui-pull-left" :src="item.img_url">
		    		<div class="mui-media-body">
		    			<h1>{{item.title}}</h1>
		    			<p class='mui-ellipsis'>
                            <span>发表时间: {{item.add_time | dateFormat}}</span>
                            <span>点击此时: {{item.click}}</span>
                        </p>
		    		</div>
		    	</a>
		    </li>
		</ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
    export default {
        data () {
            return {
                newsList:[]
            }
        },
        created(){
            this.getNewsList()
        },
        methods : {
            getNewsList() {
                this.$http.get('api/getnewslist').then(result => {
                    if (result.body.status === 0) {
                        this.newsList = result.body.message
                    }else {
                        Toast('获取详情列表失败...请重试')
                    }
                })
            }
        }
    }
</script>

<style lang="less">
    .mui-table-view {
        li {
            h1 {
                font-size:14px;
            }
            .mui-ellipsis {
                font-size:12px;
                color:#226aff;
                display:flex;
                justify-content: space-between;
            }
        }
    }
</style>