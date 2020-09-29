<template>
<div infinite-scroll-distance="40"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy">
    <p v-for="(v,k) of i " :key="k">{{v}}</p>
</div>
</template>
<script>
export default {
  data(){
    return {
      i:30,
      busy:false//等上一个处理完才处理下一个
    }
  },
  methods:{
      loadMore(){
        
        window.setTimeout(()=>{
          console.log("")
          this.i += 30;
        },10000)
        // this.i +=30;
      }
    }
}
</script>
