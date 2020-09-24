<template>
  <div class="home">
    <button @click="getImgList">click me</button>
    <ul>
      <li v-for="(i,k) in imgList" :key="k"><img :src="i" alt=""></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

// 局部使用 数据使用 mockjs  !未使用全局、未使用封装
import axios from 'axios'
export default {
  name: 'Home',
 data(){
   return{
     imgList:[]
   }
 },
  methods:{
    getImgList(){
      axios.get('/api/bannerList').then(response=>{
        console.log(response.data)
        this.imgList = response.data
      })
    }
  }
}
</script>
