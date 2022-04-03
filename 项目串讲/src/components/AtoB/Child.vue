<template>
    <div class="child">
        <h4>this is child 组件</h4>
        <!-- 第一种 从 props 接收 -->
        <div v-for="(i,k) in toChild" :key="k">
            <ul>
                <li>{{i.uname}} -- {{i.uid}}</li>
            </ul>
        </div>
        <!-- 第一种 从 emit监听 传递给 父组件  -->
        <button @click="sendToParent(user)">子传父：传值给父组件</button>

        <!-- 第二种 $parent $child -->
        <div @click="getFromParent">
            <button>通过$parent获取</button>      
            <h5>{{fromParent2}}</h5>
        </div>

        <!-- 第三种 provide inject -->
        <div>
            <button @click="getFromGranderFather">通过 provide 传递数据</button>
        </div>
        <div class="childchild">
            <childchild></childchild>
        </div>
    </div>
</template>

<script>
import Childchild from './Childchild'
export default {
    components:{
        Childchild
    },
    data(){
        return{
            setName:'',
            user: {
                uname:'eric',
                upwd:'abc'
            },

            // 第二种 $parent $children
            fromParent2:'',

        }
    },
    // 第三种 provide ,inject 依赖注入
    inject:['granderFather'],

    // 第一种 通过 props 接收 父组件传的数据 并 挂载
    props:['toChild'],
    methods:{
        
        // 第一种 通过 emit 监听自定义事件 传递 给 父组件
        sendToParent(){
            this.$emit('passToParent',this.user)
        },

        // 第二种 $parent $children
        getFromParent(){
            console.log(this.$parent)
            this.fromParent2 = this.$parent.parentData[0]
        },

        // 第三种 provide inject
        getFromGranderFather(){
            console.log(this.granderFather)
        }
    }
}
</script>

<style scoped>
    .child{
        background:powderblue;
        margin: 10px 0;
    }
    .childchild{
        background:peachpuff;
    }
</style>