<template>
    <div>
        <button @click="loadMore">loadMore 加载更多</button>
		<div v-for="(i,k) in loadData" :key="k" class="data-list">
			<h5>{{i.pid}}</h5>
			<div>{{i.title}}</div>
		</div>
        <div v-if="nomore">没有更多了</div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            clickTimes:0,
            loadData:[],
            nomore:false
        }
    },
    methods:{
        // 点击加载更多
        loadMore(){

            // 点击之后每次加一
            this.clickTimes++;
            console.log(this.clickTimes)
            axios.get('http://localhost:3000/product/loadmore',{
                params:{
                    start:this.clickTimes,
                    pno:this.clickTimes
                }
            })
            .then(res=>{
                // if(res.data.msg == ''){
                //     this.nomore = true
                // }else{
                    console.log(res.data.msg)
                    this.loadData = this.loadData.concat(res.data.msg)
                // }
            })
        }
    },
    mounted(){
        this.loadMore()
    }
}
</script>

<style scoped>
    .data-list{
        display: flex;
    }
</style>