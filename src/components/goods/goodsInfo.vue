<template>
  <div>
    <!-- 商品轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuList="lunbotu"></swiper>
        </div>
      </div>
    </div>

    <!-- 购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品的名称标题</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:<del>$2399</del>&nbsp;&nbsp;销售价: <span class="now_price">$2199</span>
          </p>
          <p>购买数量:</p>
          <p>
            <mt-button type='primary' size='small'>立即购买</mt-button>
            <mt-button type='danger' size='small'>加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数 -->
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
      <div class="mui-card-footer">页脚</div>
    </div>
  </div>
</template>

<script>
import swiper from '../subcomponent/swiper.vue'
export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbotu: []
    };
  },
  created() {
    this.getlunbotu();
  },
  methods: {
    getlunbotu() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        // console.log(result)
        if (result.body.status === 0) {
          // 组件中只认img标签,循环
          // result.body.message.forEach(item=>{
          //   item.img = item.src;
          // });
          this.lunbotu = result.body.message;
        }
      });
    }
  },
  components:{
    swiper
  }
};
</script>

<style lang="less">
</style>