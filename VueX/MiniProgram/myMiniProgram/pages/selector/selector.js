// pages/selector/selector.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex:['男','女'],
    country:[
      {
        name:'中国',
        value:'CN'
      },
      {
        name:'美国',
        value:'USA'
      },
      {
        name:'日本',
        value:'JP'
      },
      {
        name:'中国',
        value:'CN'
      },
    ] 
  },

  sexChange(event){
    console.log(event.detail.value)
  },
  countryChange(event){
    // ??????
    let index =event.detail.value
    console.log(this.data.country[index].value)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})