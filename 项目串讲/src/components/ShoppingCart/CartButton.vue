<template>
    <div class="count-btn">
        <button @click="countAdd" :disabled="!flag1">+</button>
        <span>{{count}}</span>
        <button @click="countMinus" :disabled="!flag2">-</button>
       
        <div v-show="count >= pinfo.pstock">库存不足</div>
        <div>总价：{{totalPrice.toFixed(2)}} ¥</div>
        <div class="cart-group">
            
             <div class="add-to-cart" @click="_addToCart">
            添加到购物车  
            </div>
            <div @click="toCart">购物车</div>
        </div>
    </div>
</template>

<script>
// xz 数据库
import { mapMutations } from 'vuex'  // 引入映射的方法 使用 this.xxx 进行调用

export default {
    
    //父组件 传的商品详情数据 
    props:['pinfo'],
    data(){
        return{
            count:0,
            flag1:true,
            flag2:false
        }
    },
    methods:{
        ...mapMutations(['_setUnloginCartProduct']),  // 语法糖 进行映射 --> this._setUnxxxxx()
        countAdd(){
            this.count++
            this.flag2 = true
            if(this.count >= this.pinfo.pstock){
                this.flag1 = false
            }   
        },
        countMinus(){
            this.count--
            if(this.count <= 0){
                this.flag2 = false
            }else{
                this.flag2 = true
                this.flag1 = true
            }
        },
        toCart(){
            this.$router.push('/cartlist')
        },

        // 提交数据给 前端缓存
        _addToCart(){
            var addData = {
                price:this.pinfo.price,
                count:this.count,
                totalPrice:this.totalPrice,
                title:this.pinfo.title,
                pid:this.pinfo.pid,
                isChecked:false
            } 
            console.log(addData)
            // // 未登陆状态 暂存数据
            this._setUnloginCartProduct(addData)  // 映射 ---> _setUnloginCartProduct  等同于 基础写法 写法更简便
            alert('添加成功')
            // import store from 'store'
            // this.$store.commit('_setUnloginCartProduct',addData) // 基础写法 向store 提交 数据 addData 数据 给 _setUnlogin.....
        }
        
    },
    computed:{
        totalPrice(price,count){
            return this.pinfo.price*this.count
        }
    },
    mounted(){
    }
}
</script>

<style scoped>
    span{
        margin:0 10px;
    }
    .cart-group{
        position: absolute;
        bottom:70px;
        right:10px;
        display: flex;
    }
    .cart-group div{
        padding:0 10px;
        border: 1px solid powderblue;
    }
    .add{
        background: red;
    }
    a{
        font-weight: normal;
    }
</style>