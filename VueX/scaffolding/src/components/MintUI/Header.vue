<template>
  <div>
    <mt-header class="d1" title="学前端,到学问" fixed>
      <span slot="left">
         <mt-button icon="back" type=primary>
           <img src="../../assets/images/homepage.png" slot="icon">
         </mt-button>
      </span>
       <div slot="right">
         <mt-button icon="more" type="primary"></mt-button>
        </div>
    </mt-header>
    <div style="padding-top:40px;">
      <p v-for="(v,k) of 50" :key="k">
       {{v}}
      </p>
    </div>
  </div>
</template>
<style>
    /* div{
      background-color:#956 ;
    } */
</style>