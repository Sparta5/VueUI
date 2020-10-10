<template>
  <div>
    <h1>修改用户的年龄</h1>
    <hr>
    <h1>年龄为:{{this.$store.state.age}}</h1>
    <button @click="dec">年龄－</button>
    <button @click="inc">年龄+</button>
  </div>
</template>
<script>
export default {
  methods:{
    inc(){
      this.$store.commit('increment')
    },
    dec(){ 
      this.$store.commit('decrement')
    }
  }

}
</script>