<template>
    <div>
        <h4>this is parenttochild 父组件向子组件 传递 数据</h4>
        <div>
            emit监听获取子组件的值
            <h5>{{fromChild}}</h5>
        </div>

        <!-- 第二种 $children $parent -->
        <div>
            <button @click="getFromChild2">通过 $children获取</button>
            <h5>{{fromChild2}}</h5>
        </div>
        
        <!-- 第一种 通过 属性绑定传值 给子组件 ----- 通过 监听自定义函数 接收 --- ref 绑定dom -->
        <child :toChild = 'parentData' @passToParent="getFromChild" ref="childCom"></child>
    </div>
</template>

<script>
import Child from './Child'
import { Bus } from '../../utils/Bus'

// 使用 局部 axios 引入 使用 mockjs 数据
import axios from 'axios'

export default {
    components:{
        'child':Child
    },
    data(){
        return{
            parentData:[],

            // 第一种 props emit
            fromChild:'',

            // 第二种 $parent $children
            fromChild2:'',

            // 第四种：refs 获取 dom 节点
            childCom : [],

            //
            
        }
    },

    // 第三种 provide 提供 数据 给 子 组件 
    provide:{
        granderFather:[1,23,3,4,5,656]
    },
    methods:{

        // 第一种 拿到mockjs 数据 自定义属性toChild 传递 给 子组件 
        getData(){
            axios.get('/api/userList') 
            .then(res=>{
                console.log('第一种',res.data)
                this.parentData = res.data
            })
        },

        // 第一种  emit 函数接收
        getFromChild(user){
            this.fromChild = user
        },

        // 第二种： 使用 $parent $children 获取
        getFromChild2(){
            console.log(this.$children)
            this.fromChild2 = this.$children[0].user
        },

        // 第四种：ref --> 指当前的dom
        getFromChild4(){
            console.log(this.$refs)
            console.log(this.$refs.childCom)
            this.childCom = this.$refs.childCom.user
            console.log('通过 ref 获取当前 refs dom对象 的数据--> ',this.childCom )
        },

        // 第五种： eventBus emit on 事件监听 dom 需先 挂载一次， 否则 emit 触发时，dom 未挂载，on 事件无法触发
        getFromOtherCom(){
            Bus.$on('userData',(data)=>{
                console.log('from bus..',data)
            })
        }
    },
    created(){
        this.getData()
        
    },
    mounted(){
        this.getFromChild4(),
        this.getFromOtherCom()
        
    }
}
</script>