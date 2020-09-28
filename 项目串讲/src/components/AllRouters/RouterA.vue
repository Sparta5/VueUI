<template>
  <div>
    <h4>1. :name 方式传参</h4>
    <p>{{$route.params.name}}</p>

    <h4>2. router-link 方式</h4>
    <router-link to="/routerb">跳转到routerb</router-link>

    <h4>3. 声明式</h4>
    <router-link :to="toRouterb">跳转到 b</router-link>

    <h4>4. 声明式路由传参</h4>
    <!-- <router-link :to="{path:'/routerb',query:{id:5,name:'josh'}}">声明式传参</router-link> -->
    <router-link :to="{name:'Routerb',params:{id:5,name:'josh'}}">声明式传参</router-link>

    <h4>5. 编程式</h4>
     <button @click="clickToB1">编程式跳转并传参 b</button>

    <h4>6. 命名路由</h4>
    <button @click="clickToB2">命名路由跳转并传参 b</button>
  </div>
</template>

<script>
// vue-Router 官方文档 https://router.vuejs.org/zh/
export default {
  data(){
    return{
      toRouterb:'/routerb'
    }
  },
  methods:{

    // 1 拿到 :形式 的传参
    getParams(){
      console.log(this.$route.params.name)
    },

    // 5 编程式
    clickToB1(){ 
      this.$router.push({path: '/routerb',query:{name:'hommels',age:'24'}})  // 注意：使用path时， params 将不可用
    },

    // 6 命名路由
    clickToB2(){ 
      this.$router.push({name: 'Routerb',params:{name:'stocks',height:'54kg'}}) // 注意：命名路由通过组件名称跳转 
    }
  },
  mounted(){
    this.getParams()
  }
}
</script>
