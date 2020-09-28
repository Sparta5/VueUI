<template>
    <div>
        <h5> this is brother 组件 Bus
        </h5>
        <div>
            uname: <input type="text" v-model="uname"><br>
            upwd: <input type="password" v-model="upwd"><br>
            <button @click="sendToOtherCom">bus 发送数据 给其他组件</button>
        </div>

    </div>
</template>

<script>

// 引入 bus
import { Bus } from '../../utils/Bus'
export default {
    data(){
        return{
            uname:'',
            upwd:''
        }
    },
    methods:{
        sendToOtherCom(){
            var user = {uname:this.uname,upwd:this.upwd}

            // 在下次dom更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获得更新后的dom
            this.$nextTick(function(){
                Bus.$emit('userData',user)
            })
            
        }
    },

    // 当前组件切换时，销毁 监听事件 ，否则dom 循环更新，会发生重复监听
    beforeDestroy(){
        Bus.$off('userData')
    }
}
</script>

<style scoped>
    input{
        margin:5px 0;
    }
</style>