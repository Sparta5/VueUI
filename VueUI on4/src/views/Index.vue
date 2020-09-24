<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="学前端,到学问">
        <div slot="right" class="shortcut">
            <router-link to="/register">注册</router-link>            
            <router-link to="/login">登录</router-link>            
        </div>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 顶部选项卡开始 -->
    <mt-navbar v-model="active">
        <mt-tab-item
         :id="String(item.id)" 
         v-for="(item,index) of category" :key="index">
          {{item.category_name}}
        </mt-tab-item>
        <!-- <mt-tab-item id="2">视觉设计</mt-tab-item>
        <mt-tab-item id="3">平面设计</mt-tab-item>
        <mt-tab-item id="4">网页设计</mt-tab-item> -->
    </mt-navbar>
    <!-- 顶部选项卡结束 -->
    <!-- 面板区域开始 -->
    <div class="main">
      <mt-tab-container v-model="active">
          <mt-tab-container-item id="1">
              <!-- 文章信息开始 -->
              <div class="infoItem">
                <div class="infoItemHead">你见过最硬核的动物园是哪家？</div>
                <div class="infoItemContent">
                  <img class="infoItemImg" src="../assets/article/a.jpg" alt="">
                  <div class="infoItemDes">济南动物园，没钱给熊猫馆安装空调，夏天偷偷抽取防空洞的冷气帮熊猫降温。然而防空洞被不知情的人防办租出去种蘑菇了，业者使用含氯消毒剂，导致熊猫死于氯气中毒引起的肺水肿。济南动物园的另一只熊猫是国内第二长寿的熊猫，按说动物园对待熊猫也蛮厚道了。熊猫遇难当晚，动物园请隔壁的共建单位一家军医院的军医抢救了很久。这是济南动物园的惯例，请隔壁军医院给动物看病，熊猫这种级别的动物一般都有副主任医师出诊，年级再大的军医该做不动胸外心脏按压了。</div>
                </div>
            </div>
            <!-- 文章信息结束 -->          
          </mt-tab-container-item>
          <mt-tab-container-item id="2">BB</mt-tab-container-item>
          <mt-tab-container-item id="3">CC</mt-tab-container-item>
          <mt-tab-container-item id="4">DD</mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 面板区域结束 -->
    <!-- 底部选项卡开始 -->
    <tabbar :selected="selected"></tabbar>
    <!-- 底部选项卡结束 -->
  </div>
</template>
<style scoped>
.shortcut a{
  display: inline-block;
  margin-left:5px;
  color:#fff;
  text-decoration:none;
}
.main{
  margin-bottom: 55px;
}
.infoItem{
    padding: 15px 0 14px;
    margin: 0 15px;
    border-bottom: .5px solid #d3d3d3;
}
.infoItemHead {
    font-weight: 600;
    font-size: 17px;
    color: #1a1a1a;
    line-height: 22px;
}
.infoItemContent {
    display: flex;
    padding-top: 11px;
    align-items: center;
    width: 100%;
}
.infoItemImg{
    width: 112px;
    border-radius: 5px;
    background: #ccc;
}
.infoItemDes{
    font-size: 15px;
    overflow: hidden;
    font-weight: 400;
    text-overflow: ellipsis;
    line-height: 21px;
    letter-spacing: normal;
    color: #444;
    margin: 4px 15px;
    height: 65px;
}
img[lazy=loading] {
    height: 75px;
}
</style>
<script>
//导入子组件文件
import Tabbar from '../components/Tabbar.vue';
export default {
  components:{
    Tabbar
  },
  data(){
    return {
      //默认被选定的顶部选项卡及面板
      active:'1',
      //默认被选定的底部选项卡
      selected:'index',
      //存储服务器返回的文章分类信息
      category:[]
    }
  },
mounted(){
    //服务器发送请求
    this.axios.get('/category').then(res=>{
      //接收并处理服务器返回的结果
      this.category = res.data.results;
      console.log(this.category);
    })
  }
}
</script>