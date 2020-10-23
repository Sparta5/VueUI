// pages/todo/todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     todoList:[],
     todoItem:''
  },
  inputEvent(event){
    this.setData({
      todoItem:event.detail.value
    })
    console.log(this.data.todoItem)
  },
  addEvent(){
    //将输入的添加到data数组里面
    let todoItem = this.data.todoItem;
    if(todoItem.trim().length != 0) {
      //2.获取原来的戴安事项列表
      let todoList = this.data.todoList;
      todoList.push(todoItem.trim());
      //3.将输入的代办事项添加到todoList中
      this.setData({
        todoList:todoList,
        todoItem:''
      })
    }else{
      wx.showToast({
        title: '代办事项为空',
        image:'/images/error.png',
        duration:3000,
        mask:true
      })
    }
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