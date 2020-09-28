<template>
  <div>
    <!-- 顶部导航开始 -->
    <div>
      <mt-header title="学前端,到学问">
        <div slot="right" class="shortcut">
          <router-link to="/register">注册</router-link>
          <router-link to="/login">登录</router-link>
        </div>
      </mt-header>
    </div>
    <!-- 顶部导航结束 -->
    <!-- 顶部选项卡开始 -->
    <div>
      <mt-navbar v-model="active">
        <mt-tab-item :id="item.id.toString()" 
                     v-for="(item,index) of category"
                     :key="index">
          {{item.category_name}}
          </mt-tab-item>
      </mt-navbar>
    </div>
    <!-- 顶部选项卡结束 -->
    <!-- 面板开始 -->
    <div class="main">
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="1">
          <!-- 单一文章信息开始 -->
          <div class="article" v-for="(article,index) of articles" :key="index">
            <!-- 标题连接开始 -->
            <div class="article-subject">
               {{article.subject}}
            </div>
            <!-- 标题连接结束 -->
            <!-- 缩略图及简介开始 -->
            <div class="article-wrapper">
              <div class="article-image">
                  <img src="../assets/ariticles/123.jpg">
              </div>
              <div class="article-desc">
                 北朝墓葬壁画上的现实与异想世界北朝墓葬壁画是山西博物院的特色收藏之一，近期有北朝墓葬壁画的巅峰之作首次大规模集中亮相，到2020.03.12都可以在“壁上乾坤——山西北朝墓葬壁画艺术展”一饱眼福。北朝是南北朝时期存在于北方的五个朝代的总称：北魏、东魏、西魏、北齐和北周。山西是北魏、东魏和北齐的核心统治区域，平城和晋阳地区拥有大量北朝文物遗存，而其中的墓葬壁画更是真实、完整地留住了人们当时的生活场景与想象世界。摄影：胡远嘉 编辑：邹文易
              </div>
            </div>
            <!-- 缩略图及简介结束 -->
          </div>
          <!-- 单一文章信息结束 -->

        </mt-tab-container-item>
        <mt-tab-container-item id="2">bb</mt-tab-container-item>
        <mt-tab-container-item id="3">cc</mt-tab-container-item>
        <mt-tab-container-item id="4">dd</mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 面板结束 -->
    <!-- 底部选项卡开始 -->
    <div>
      <mt-tabbar v-model="tabbar" fixed>
        <mt-tab-item id="index">首页
          <img src="../assets/images/index_enabled.png" slot="icon" v-if="tabbar == 'index'">
          <img src="../assets/images/index_disabled.png" slot="icon" v-else>
        </mt-tab-item>
        <mt-tab-item id="me">我的
          <img src="../assets/images/me_enabled.png" slot="icon" v-if="tabbar == 'me'">
          <img src="../assets/images/me_disabled.png" slot="icon" v-else>
        </mt-tab-item>
      </mt-tabbar>
    </div>
    <!-- 底部选项卡结束 -->
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:'1',
      tabbar:'index',
      category:[],
      articles:[]
    }
  },
  watch:{
    tabbar(value){
      if(value == 'index') {
        this.$router.push('/').catch(e=>{});//抛出错误vue本身问题
      }
      if(value == 'me') {
        this.$router.push('/me').catch(e=>{})
      }
    }
  },
  mounted(){
    //
    this.axios.get("/category").then(res=>{
      this.category=res.data.results;
    });
    //获取特定分类下的文章信息的接口
    this.axios.get('/lists?cid=' + this.active).then(res=>{
      //接收客户端传递的URL参数
      this.articles = res.data.results;
    })

  }
}
</script>
<style lang="scss" scoped>
.shortcut a{ 
  display:inline-block;
  margin-left:10px;
  text-decoration: none;  
  color:#fff;
}
.main{
  margin-bottom:55px;
}
/* 文章容器 */
.article{
	padding-bottom:10px;
	border-bottom:1px solid #999;
	margin:10px;
}
/* 文章标题 */
.article-subject{
	font-size:16px;
	line-height:22px;
	font-weight:bold;
	font-family:'Microsoft Yahei';
	color:#1a1a1a;
  margin-bottom: 10px;
}
/* 缩略图及简介容器 */
.article-wrapper{
	display:flex;
	align-items:center;
}
/* 缩略图容器 */
.article-image{
  margin-right: 15px;
}
.article-image img{
  width:112px;
  border-radius: 5px;
}
/* 文章简介容器 */
.article-desc{
	font-size:15px;
	font-weight:400;
	line-height:21px;
	height:63px;
  overflow: hidden;
}
  // .shortcut {
  //   a{
  //     display: inline-block;
  //     margin-left: 10px;
  //     text-decoration: none;
  //     color: white;
  //   }
  // }
  // .main{
  //   margin-bottom: 55px;
  // }
  // /*文章容器*/
  // .article{
  //     padding-bottom: 10px;
  //     border-bottom: 1px solid #999;
  //     margin:10px;
  //     // 文章标题
  //      .article-subject{
  //       font-size: 16px;
  //       line-height: 22px;
  //       font-weight: bold;
  //       font-family: 'Microsoft Yahei';
  //       color: #1a1a1a;
  //       margin-bottom: 10px;
  //    }
  //    /*缩略图及简介容器*/
  //      .article-wrapper{
  //       display:flex;
  //       align-items: center;
  //          .article-image{
  //           margin-right: 15px;
  //           width: 112px;
  //           border-radius: 5px;
  //         }
  //         /*文章简介容器*/
  //         .article-desc{
  //           font-size:15px;
  //           font-weight: 400;
  //           line-weight:21px;
  //           height: 63px;
  //           overflow: hidden;
  //         }
  //     }
  // }
</style>