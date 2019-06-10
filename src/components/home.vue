<template>
  <div class="home-container">
    <mt-swipe :auto="4000" >
      <mt-swipe-item v-for="(item,index) in swiperItemList" :key="index">
        <img :src="item.src" alt="swiper-item" class="swiper-item-img">
      </mt-swipe-item>
    </mt-swipe>

     <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <img src="../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <img src="../images/menu2.png" alt="">		                    
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <img src="../images/menu3.png" alt="">		                    
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <img src="../images/menu4.png" alt="">		                    
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <img src="../images/menu5.png" alt="">		                   
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <img src="../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		  </ul> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperItemList: [
        {
          src: require("../images/mi1.jpg")
        },
        {
          src: require("../images/mi2.jpg")
        },
        {
          src:require("../images/mi3.jpg")
        }
      ]
    };
  },
  created() {
  },
  methods: { 
    }
  }

</script>

<style scoped lang='scss'>
.mint-swipe {
  height: 200px;
}

.swiper-item-img {
  height: 100%;
  width: 100%;
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: 0;
}

.mui-grid-view.mui-grid-9 img {
  width: 60px;
  height: 60px;
}
.mui-media-body {
  font-size: 12px !important;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: 0;
}
</style>
