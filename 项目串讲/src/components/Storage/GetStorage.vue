<template>
    <div>
        <ul>
            <li v-for="(i,k) in proList.product" :key="k">
                {{i.pinfo}}
            </li>

            <button @click="removeData">清除缓存</button>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            proList:[],
            userList:[]
        }
    },
    methods:{
        GetSessionData(){
            this.proList = JSON.parse(sessionStorage.getItem('proList')) // 用户登录后各组件 均可获取 数据 ， 使用JSON api 进行数据格式转换
            console.log(this.proList)
        },
        GetLocalData(){
            this.userList = JSON.parse(localStorage.getItem('userList'))
            console.log(this.userList)
        },
        removeData(){
            localStorage.removeItem('userList')  // 移除单个 键值
            sessionStorage.clear() // 全部清空 缓存 如： 当用户点击退出，应对应 清除 用户数据
        } 
    },
    created(){
        this.GetSessionData(),
        this.GetLocalData()
    }
}
</script>