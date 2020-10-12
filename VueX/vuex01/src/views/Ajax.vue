<template>
  <div>
    <button @click="setVueData()">获取异步数据添加到state中</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  methods:{
    setVueData(){
      this.$store.dispatch('getData')
    }
  }
}
</script>