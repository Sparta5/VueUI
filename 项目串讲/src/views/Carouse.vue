<template>
  <div class="carouse">
    <!--vue-awesome-swiper 文档copy-->
    <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
      <swiper-slide v-for="(i,k) in imgList" :key="k">
        <img :src="i.bannerImg" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// 官方文档 参数及各项api配置的使用 https://www.swiper.com.cn/api/index.html
// 安装 npm i vue-awesome-swiper -S \ npm i swiper -S
import 'swiper/css/swiper.css' // 组件引入swiper 样式
import { swiper, swiperSlide } from 'vue-awesome-swiper'  // 组件样式
import axios from 'axios'
export default {
  data(){
    return{
      imgList:[],
      // 轮播图选项
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay:{
          delay:1000  // 1秒时长切换
        },
        loop: true
      }
    }  
  },
  methods:{
    getBannerList(){
      // 发请求 拿到 mockjs 模拟的 数据
      axios.get('/api/bannerList')
      .then(res=>{
        console.log(res.data)
        this.imgList = res.data
      })
    }
  },
  mounted(){
    this.getBannerList()
  }
}
</script>

<style scoped>
  .carouse{
    width: 100%;
    border:1px solid red;
  }
  /*样式穿透*/
  .swiper >>> .swiper-pagination-bullet{
    background-color:black;
  }
</style>
