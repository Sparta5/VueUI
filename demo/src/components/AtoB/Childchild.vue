<template>
    <div>
        <h5>this is childchild 组件 & provide and inject</h5>

        <!-- provide inject -->
        <div>依赖注入 无论子组件嵌套多深，子组件都可以拿到数据</div>
        <div v-for="i in granderFather" :key="i">
            this is from granderFather-- {{i}}
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    },

    // provide inject
    inject:['granderFather']
}
</script>