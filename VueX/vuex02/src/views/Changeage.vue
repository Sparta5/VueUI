<template>
  <div>
    <h1>修改用户的年龄</h1>
    <hr>
    <h1>年龄为:{{age}}</h1>
    <button @click="dec">年龄－</button>
    <button @click="inc">年龄+</button>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex';
export default {
  computed:{
    ...mapState(['age'])
  },
  methods:{
    ...mapMutations({
      plus:'increment',
      minus:'decrement'
    }),
    inc(){
      //提交Mutations
      // this.$store.commit('increment')
      this.plus();
    },
    dec(){ 
      // this.$store.commit('decrement')
      this.minus();
    }
  }

}
</script>