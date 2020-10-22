// pages/multiselector/multiselector.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //二位数组
    schools:[
      ['北京一中','北京二中'],
      ['一年级','一年级','一年级'],
      ['一班','二班','三班']
    ]
  },
  schoolEvent(event){
    let array = event.detail.value;
    console.log(array);
    //学校
    console.log(this.data.schools[0][array[0]])
    //年级
    console.log(this.data.schools[1][array[1]])
    //班级
    console.log(this.data.schools[2][array[2]])
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