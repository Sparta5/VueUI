<template>
<div>
  <h1>添加商品</h1>
  <hr>
  <p>商品名称:<input type="text" v-model="productName"></p>
  <p>商品售价:<input type="text" v-model="salePrice"></p>
  <p><button @click="add">确认添加</button></p>
</div>
</template>
<script>
export default {
  data(){
    return{
      productName:'',
      salePrice:0
    }
  },
   methods:{
      add(){
        let obj = {
          // id:5,
          productName:this.productName,
          salePrice:this.salePrice
        }
        //提交Mutations
        this.$store.commit('addProduct',obj);
        //路由跳转
        this.$router.push('/access2');
      }  
    }
}
</script>