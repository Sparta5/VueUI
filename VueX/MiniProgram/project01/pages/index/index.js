//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  tap(){
    wx.navigateTo({
      url: '/pages/navigate/navigate'
    })
  },
  onLoad: function () {
    console.log('Index---Page.onLoad...');
  },
  onShow() {
    console.log('Index--Page.onShow...');
  },
  onReady() {
    console.log('Index--Page.onReady...');
  },
  onHide() {
    console.log('Index--Page.onHide...');
  },
  onUnload() {
    console.log('Index--Page.onUnload...');
  }
})