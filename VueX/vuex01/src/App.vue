<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/access1">访问Vuex的页面1数据</router-link>
      <router-link to="/access2">访问Vuex的页面2数据</router-link>
      <router-link to="/changeage">修改年龄</router-link>
      <router-link to="/addproduct">添加信息</router-link>
      <router-link to="/ajax">加入购物车</router-link>
      <router-link to="/echarts_demo">echarts_demo</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
