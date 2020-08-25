<template>
  <div>
    <!-- 顶部导开始 -->
    <mt-header title="学前端，到学问">
      <div slot="right" class="shortcut">
        <router-link to="/register">登录</router-link>
        <router-link to="/register">注册</router-link>
      </div>
    </mt-header>

    <!-- 底部导结束 -->
  </div>
</template>
<style scoped>
  .shortcut a{
    display:inline-block;
    text-decoration:none;
    margin-left :5px;
    color :#fff;
  }
</style>