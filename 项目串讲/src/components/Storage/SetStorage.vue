<template>
    <div>
        <h5>this is storage</h5>
        <button @click="setSessionData">click 存入 sessionStorage</button>
        <button @click="setLocalData">click 存入 localStorage</button>
        <div>
            缓存的数据 : {{user}}
        </div>
        <router-link to="/getstorage">其他组件---查看共享数据</router-link>
    </div>
</template>

<script>
// 局部引入 axios 使用 mockjs 数据
import axios from 'axios'
export default {
    data(){
        return{
            user:'',
            productList:[]
        }
    },
    methods:{
        setSessionData(){
            this.user = {name:'eric',age:15}   
            sessionStorage.setItem('userSesstion',this.user)     // 如果直接存入 数据 ，数据内容无法读取
            axios.get('/api/productList') // mockjs 
            .then(res=>{
                console.log(res.data)
                sessionStorage.setItem('proList',JSON.stringify(res.data))    // 使用json字符串进行数据格式存取
            })  
        },
        setLocalData(){
            axios.get('/api/userList')  // mockjs
            .then(res=>{
                console.log(res.data)
                localStorage.setItem('userList',JSON.stringify(res.data))  // 使用json字符串进行数据格式存取
            })
        }

    }
}
</script>