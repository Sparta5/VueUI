<template>
  <div>
    <mt-tabbar v-model="active" fixed>
      <mt-tab-item id="index">
          首页
          <img src="../assets/index_active.png" slot="icon" v-if="active == 'index'">
          <img src="../assets/index.png" slot="icon" v-else>
      </mt-tab-item>
      <mt-tab-item id="me">
          我的
          <img src="../assets/me_active.png" slot="icon" v-if="active == 'me'">
          <img src="../assets/me.png" slot="icon" v-else>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  props:["selected"],
  data(){
    return {
      active:this.selected
    }
  },  
  watch:{
    //监听底部选项卡的变化
    active(value){
        switch(value){
           case 'index':
             this.$router.push('/').catch(()=>{});
             break;
           case 'me':
             this.$router.push('/me').catch(()=>{});
             break;
        }
    }
  }
}
</script>