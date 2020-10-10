
<template>
  <div>
    <h1>访问Vuex中的数据 -- 01页面</h1>
    <p>姓名2：{{this.$store.state.username}}</p>
    <p>性别2：{{this.$store.state.sex}}</p>
    <p>年龄2：{{this.$store.state.age}}</p>
    <p>工资2：{{this.$store.state.salary}}</p>
    <h2>仓库中共有{{this.$store.getters.getCounts}}件商品，她们是：</h2>
    <p v-for="(product,index) of this.$store.state.products" :key="index">
      <!-- 商品ID:{{product.id}} -->
      商品ID:{{index+1}}
      商品名称:{{product.productName}}
      商品售价:{{product.salePrice}}
    </p>
  </div>
</template>
<script>
export default {
  mouted(){
    console.log(this.$store.state.username)
    console.log(this.$store.state.sex)
    console.log(this.$store.state.age)
    console.log(this.$store.state.salary)
  }
}
</script>