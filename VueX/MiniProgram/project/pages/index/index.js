//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    epub:[]
  },
  navigatorTap(){

  },
  onLoad(options){
    console.log('A(index).onLoad...');
      wx.navigateTo({
      url: '/pages/navigator/navigator',
      method:'GET',
      success:res=>{
        this.setData({
          epub:res.data.epub
        })
        console.log(res.data.epub)
      }
    })
  },
  onShow(){
    console.log('A(index).onShow...');
  },
  onReady(){
    console.log('A(index).onReady...');
  },
  onHide(){
    console.log('A(index).onHide...');
  },
  onUnload(){
    console.log('A(index).onUnload...');
  }
})
