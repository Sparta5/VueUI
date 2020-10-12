<template>
  <div>
    <button @click="setVueData()">获取异步数据添加到state中</button>
  </div>
</template>
<script>
import axios from 'axios';
import {mapActions} from 'vuex';
export default {
  methods:{
    ...mapActions(['getData']),
    setVueData(){
      // this.$store.dispatch('getData')
      this.getData();
      this.$router.push('/accessl');
    }
  }
}
</script>