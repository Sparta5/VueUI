<template>
  <div>
    <mt-header title="学前端，到学问" fixed>
      <div slot="left">aaabbb</div>
      <div slot="right">aaa156</div>
    </mt-header>
    <div class="container">
    <p v-for="(v,k) of 60" :key="k">{{v}}</p>
    </div>
  </div>
</template>
<style scoped>
  .container{
    margin-top :40px;
  }
</style>