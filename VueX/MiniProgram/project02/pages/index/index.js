//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    epub:[],
    books:[]
  },
  
  onLoad: function () {
    //获取最新推荐的图书分类 
    wx.request({
        url:'https://api.zhuishushenqi.com/post/59b5edbfe41bc82033773be9',
        method:'GET',
        success:res=>{
          this.setData({
            epub:res.data.epub
          })
          console.log(res.data);
        }
    });
    //获取热搜榜的图书列表,其中5a323096fc84c2b8efab2482代表热搜榜的_id
    wx.request({
      url:"https://api.zhuishushenqi.com/ranking/5a323096fc84c2b8efab2482",
      method:'get',
      success:res=>{
        console.log(res.data.ranking.books);
        this.setData({
          books:res.data.ranking.books
        })
      }
    })

  }
})
