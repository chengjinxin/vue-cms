<template>
  <div>
      <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,i) in lunbotuList" :key="i.url">
        <img :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
    export default {
        props:['lunbotuList']
    }
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  img {
    width: 100%;
    height: 200px;
  }
}
</style>