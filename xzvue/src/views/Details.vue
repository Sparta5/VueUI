<template>
  <div>
    <h1 style="color:blue">这里是详情页</h1>
    <h2>显示{{lid}}商品的详情信息...</h2>
  </div>
</template>
<script>
export default {
  props:["lid"]//接住将来要传入的lid
}
</script>