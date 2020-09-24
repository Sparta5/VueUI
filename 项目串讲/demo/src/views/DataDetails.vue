<template>
    <div class="data-details">
        <h5>this is deta-details</h5>
        <div>
            <img src="#">
            <div>
                <h5>{{pinfo.title}}</h5>
                <p>{{pinfo.details}}</p>
            </div>
        </div>

        <!-- 引入子组件 按钮组 将 库存量 传给 按钮组 进行计算 -->
        <cart-button :pinfo = 'pinfo'></cart-button>
    </div>
</template>

<script>

// 局部使用 axios 未使用全局 未使用 封装
import axios from 'axios'

// 引入 子组件 按钮 组 动态计算数量
import CartButton from '../components/ShoppingCart/CartButton'

export default {
    components:{
        CartButton
    },
    data(){
        return{
            pinfo:{}
        }
    },
    methods:{
        getDetails(){
            this.pid = this.$route.params.pid
            axios.get('http://localhost:3000/product/proinfo',{
					params:{pid:this.pid}
				})
				.then(res=>{
                    console.log(res.data[0])
                    this.pinfo = res.data[0]
				})
        }
    },
    created(){
        this.getDetails()
    }
}
</script>

<style scoped>
   .data-details img{
        width: 200px;
        height: 200px;
        border: 1px solid blanchedalmond;
    }
</style>