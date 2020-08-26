<template>
  <div>
    <h1>当前选项卡：{{active}}</h1>
    <!-- 顶部开始 -->
    <div class="fixed">
      <mt-header title="啊啊啊"></mt-header>
     <mt-navbar v-model="active">
      <mt-tab-item id="a">
        国内新闻
        <!-- <img src="../../assets/logo.png" slot="icon"> -->
        </mt-tab-item>
      <mt-tab-item id="b">国际新闻</mt-tab-item>
      <mt-tab-item id="c">体育新闻</mt-tab-item>
      <mt-tab-item id="d">娱乐新闻</mt-tab-item>
     </mt-navbar>
    </div>
      <!-- 顶部结束 -->
      <!-- 顶部开始 -->
      <mt-tab-container v-model="tab">
        <mt-tab-container-item id="china">
          <p v-for="(v,k) of 60" :key="k">{{v}}</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="world">
          <p>222</p>
          <p>222</p>
          <p>222</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="sports">
          <p>333</p>
          <p>333</p>
          <p>333</p>
        </mt-tab-container-item>
        <mt-tab-container id="evn">
          <p>444</p>
          <p>444</p>
          <p>444</p>
        </mt-tab-container>
      </mt-tab-container>
      <!-- 面板结束 -->
      <!-- 底部选项卡开始 -->
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="index">首页
          <img src="../../assets/index_active.png" slot="icon" v-if="selected=='index'">
          <img src="../../assets/index.png" slot="icon" v-else>
        </mt-tab-item>
        <mt-tab-item id="cart">购物车
          <img src="../../assets/cart_active.png" slot="icon" v-if="selected=='cart'">
          <img src="../../assets/cart.png" slot="icon" v-else>
        </mt-tab-item>
        <mt-tab-item id="me">我的
          <img src="../../assets/me_active.png" slot="icon" v-if="selected=='me'">
          <img src="../../assets/me.png" slot="icon" v-else>
        </mt-tab-item>
      </mt-tabbar>
  </div>
</template>
<style scoped>
  .fixed{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    z-index: 9999;
  }
</style>
<script>
  export default {
    data(){
      return {
        active:'a',
        tab:'china',
        selected:'index'
      }
    },
    watch:{
      active(newValue){
        switch(newValue){
          case 'a':
            this.tab='china';
            break;
          case 'b':
             this.tab='world';
             break;
          case 'c':
             this.tab='sports';
             break;
          case 'd':
              this.tab='env';
              break;
        }
      }
    }
  }
</script>