<template>
    <div>
        <h5>this is cartList 购物车</h5> 
        <div v-show="noLogin">
            您还未登陆，点击<router-link to="/user">登录</router-link>
            保存到账号中
        </div>
        <div v-if="cartList.length>0">
            <ul class="cart-list">
                <li v-for="(i,k) in cartList" :key="k">
                    <img class="img">
                    <div class="info">
                        <h5>{{i.title}}</h5>
                        <h5>{{i.count}}</h5>
                        <h6>小计：{{i.totalPrice.toFixed(2)}}</h6>
                    </div>
                    <div class="btn">
                        <button @click="addList(i)">+</button>
                        <span>{{i.count}}</span>
                        <button @click="minusList(i)">-</button>
                        <span>删除</span>
                    </div>
                </li>
            </ul>
            <div>总计：{{total.toFixed(2)}}¥</div>
        </div>
        <!-- 如果没有数据 显示空购物车 -->
        <div v-else>
            你的购物车是空的
        </div>
        <div v-show="cartList.length" class="calc" @click="checkout">结 算</div>
    </div>
</template>

<script>

import store from '../../store/index'  // 需要引入 store
import { mapMutations,mapGetters } from 'vuex'
import { axiosPost } from '../../utils/request'

export default {

    data(){
        return{
            cartList:[],
            user:{},
            noLogin:false,
            uid:0
            
        }
    },
    methods:{
        ...mapGetters(['_getShoppingCart']),  // 映射--> _getShoppingCart
        ...mapMutations(['_addCartList','_minusCartList','_clearCartList']),
        getFromCart(i){
            this.cartList = this._getShoppingCart() // state.unLogincartList
        },
        addList(i){
            this._addCartList(i)  // 映射 ---> mapMutations _addCartList
        },
        minusList(i){
            this._minusCartList(i) // 映射 ---> mapMutations _minusCartList
        },
        unLogin(){
            console.log('1')
            this.user = JSON.parse(sessionStorage.getItem('user1'))   // 从本地缓存读取
            if(!this.user){
                this.noLogin = true
            }
        },

        // 结算
        checkout(){
            if(!this.user){
                alert('您还未登陆')
                this.$router.push('/user')
            }else{
                for(var i of this.cartList){
                    // console.log(i)
                    i.uid= this.user[0].uid
                }
                
                let data = {cartList:this.cartList}
                
                axiosPost({
                    url:'/user/usercart',  // xz 数据库
                    data:data
                }).then(res=>{
                    console.log(res.data)
                     alert('即将跳入支付页面')
                }).then(()=>{
                    // 结算后 清空 购物车
                    this._clearCartList()
                })
            }
        }
    },
    mounted(){
        this.getFromCart(),
        this.unLogin()
    },
    computed:{
        total(){
            var allTotal = 0;
            console.log(this.cartList)
            for(var i of this.cartList){
               allTotal += i.count*i.price
            }
            return allTotal
        }
    }
}
</script>

<style scoped>
    .select-all{
        text-align: left;
    }
    .cart-list img{
        width: 100px;
        height: 100px;
    }
    .cart-list li{
        display: flex;
        width: 100%;
    }
    .cart-list li input{
        margin-top:10%;
    }
    .btn,.info{
        width:35%;
    }
    .btn{
        padding:30px 0;
    }
    .calc{
        position: absolute;
        bottom: 70px;
        right:20px;
        padding:5px;
        border:1px solid powderblue;
    }
</style>