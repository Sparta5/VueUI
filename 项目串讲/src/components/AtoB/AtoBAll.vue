<template>
    <div class="tabs">
        <router-link to="/parenttochild">
                <!-- 使用 iconfont -->
                <svg class="icon" aria-hidden="true">
                <!-- 直接引入 类名 -->
                <use xlink:href="#icon-home"></use>
                </svg><br>
            父传子
        </router-link>
        <router-link to="/brother">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yonghu"></use>
                </svg><br>
        兄弟组件</router-link>
        <router-link to="/routera">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shangpinliebiao"></use>
            </svg><br>
            路由
        </router-link>
        <router-link to="/bscroll">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shangpinliebiao1"></use>
            </svg><br>
            商品列表
        </router-link>
    </div>
</template>

<script>


export default {
    data(){
        return{}
    },
    methods:{

    }
}
</script>

<style scoped>
    .tabs{
        position: fixed;
        bottom: 0;
        left:0;
        display: flex;
        width: 100%;
        height: 60px;
        line-height: 30px;
        border-top:1px solid gainsboro;
        background:white;
    }
    a{
        width: 25%;
    }
</style>