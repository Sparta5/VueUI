<template>
  <div>
    <h4>4.声明式路由传参</h4>
    <!-- <p>{{$route.query.id}}---{{$route.query.name}}</p> -->
    <p>{{$route.params.id}}--{{$route.params.name}}</p>

    <h4>5.编程式跳转并传参 b1</h4>
    <p>{{$route.query.name}}--{{$route.query.age}}</p>

    <h4>6.命名式路由并传参 b2</h4>
    <p>{{$route.params.name}}--{{$route.params.height}}</p>

  </div>
</template>

<script>
export default {
  data(){
    return{
      userList:[]
    }
  },
  methods:{
    getFromSession(){
      this.userList = JSON.parse(sessionStorage.getItem('user'))
      console.log(this.userList)
    }
  },
  mounted(){
    this.getFromSession()
  }
}
</script>