<template>
  <div id="app">
    
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/user">User</router-link> |
      <router-link to="/about">About</router-link>
      
      <ato-b-all></ato-b-all>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import AtoBAll from './components/AtoB/AtoBAll'

  export default{
    components:{
      AtoBAll
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body,div,nav,ul,li,h5,h4{
	margin:0;
	padding:0;
}

#nav {
  padding: 10px 30px;
}

a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

a.router-link-exact-active {
  color: #42b983;
}

</style>
