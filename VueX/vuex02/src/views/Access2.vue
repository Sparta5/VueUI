
<template>
  <div>
    <h1>访问Vuex中的数据 -- 01页面</h1>
    <p>姓名2：{{username}}</p>
    <p>性别2：{{sex}}</p>
    <p>年龄2：{{age}}</p>
    <p>工资2：{{salary}}</p>
    <p>工资2：{{extensing}}</p>
    <h2>仓库中共有{{productNum}}件商品，她们是：</h2>
    <p v-for="(product,index) of this.$store.state.products" :key="index">
      <!-- 商品ID:{{product.id}} -->
      商品ID:{{index+1}}
      商品名称:{{product.productName}}
      商品售价:{{product.salePrice}}
    </p>
  </div>
</template>
<script>
import {mapState,mapGetters} from 'vuex'
export default {
  computed:{
    ...mapState(['username','sex','age','salary','gerCounts']),
    ...mapState({
      extensing:'extends'
    }),
    ...mapGetters({
      productNum:'getCounts'
    }) 
  },
  mouted(){
    console.log(this.$store.state.username)
    console.log(this.$store.state.sex)
    console.log(this.$store.state.age)
    console.log(this.$store.state.salary)
  }
}
</script>