<template>
  <div>
    <div class="swipe">
      <mt-swipe 
          :showIndicators="false"
          :auto="3000"
          :speed="3000"
          :continuous="false">
          <mt-swipe-item><img src="../../assets/images/0f030e329da14d5a8a4633bbf8499fc5.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../../assets/images/8b8d2793234c449cb88a6c1c5480d482.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../../assets/images/48f4cff6896745ba870395a3ebf15505.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../../assets/images/55653d5b514b469dbc6bb196c1538aa6.jpg"></mt-swipe-item>
          <mt-swipe-item><img src="../../assets/images/cf72adcf00df473cb9e430fb88418ec5.jpg"></mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>
<style scoped>
.swipe{
  height:200px;
}
</style>