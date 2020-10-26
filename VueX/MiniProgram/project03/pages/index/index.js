//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //存储所有的分类
    epub:[
      // {
      //   title:'da分类',
      //   books:[
          
      //   ]
      // }
    ],

  },
  onLoad(){
    //获取最新推介的图书
    wx.request({
      url: 'https://api.zhuishushenqi.com/ranking/gender',
      method:'GET',
      success:res=>{
        //将服务器接口返回的数据存储当亲页面的变量 -- epub中去
        let data = res.data.epub;
        let epubs = []
        data.forEach((elem,i)=>{
          // epub[title].push(elem._id);
          wx.request({
            url: 'https://api.zhuishushenqi.com/ranking/'+elem._id,
            method:'GET',
            success:res=>{
              // console.log(res)
              let obj={};
              obj.title=elem.title;
              obj.books=res.data.ranking.books
              epubs.push(obj)
              this.setData({
                epub:epubs
              })
              console.log(this.data.epub)
            }
          })
        })
      }
    });
    wx.request({
      url: 'url',
    })
  }
})
