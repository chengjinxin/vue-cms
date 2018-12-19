<template>
    <div>
        <div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item',item.id == 0 ? 'mui-active' : '']" v-for="(item, index) in arrs" :key="index" data-wid="tab-top-subpage-1.html" @click='getImages(item.id)'>
						{{ item.title }}
					</a>
				</div>
			</div>
		</div>

		<!-- 获取图片列表,实现懒加载 -->
		<ul>
  			<router-link v-for="item in images" :key='item.id' :to='"/home/photoinfo/" + item.id' tag='li'>
    			<img v-lazy="item.img_url">
				<div class="info">
					<h1 class="title">{{ item.title }}</h1>
					<div class="body"> {{ item.zhaiyao }}</div>
				</div>
  			</router-link>
		</ul>
    </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
mui(".mui-scroll-wrapper").scroll({
  deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

export default {
  data() {
    return {
      arrs: [],
      // 获取图片
      images: []
    };
  },
  created() {
    this.getimgCategory();
    this.getImages(0);
  },
  methods: {
    getimgCategory() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          // 手动拼接一个完整的对象
          result.body.message.unshift({ title: "全部", id: 0 });
          this.arrs = result.body.message;
        }
      });
    },
    // 获取图片列表业务逻辑
    getImages(imagesId) {
      this.$http.get("api/getimages/" + imagesId).then(result => {
        if (result.body.status === 0) {
          this.images = result.body.message;
        }
      });
    }
  }
};
</script>

<style lang="less" >
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
	  background-color: red;
	  width: 100%;
    //   height: 300px;
	//   margin: auto;
	  text-align: center;
	  margin-bottom: 10px;
	  position: relative;
	  img {
		  width: 100%;
	  }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
	}
	.info {
		color: wheat;
		text-align: left;
		position: absolute;
		bottom: 0;
		.title {
			font-size: 14px;
		}
		.body {
			font-size: 13px;
		}
	}
  }
}
</style>