// pages/todo/todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todoList: [],
    todoItem: ''
  },

  inputEvent(event) {
    this.setData({
      todoItem: event.detail.value
    });
    //console.log(this.data.todoItem);
  },

  addEvent() {

    //1,获知用户在输入框中输入的待办事项
    let todoItem = this.data.todoItem;
    if (todoItem.trim().length != 0) {
      //2.获取原来的待办事项列表,并且添加新的待办事项
      let todoList = this.data.todoList;
      todoList.push(todoItem.trim());
      //3.将输入的待办事项添加到todoList数据中
      this.setData({
        todoList: todoList,
        todoItem: ''
      });
    } else {
      wx.showToast({
        title: '待办事项为空',
        image: '/images/error.png',
        duration: 2000,
        mask: true,
        success: res => {
          //console.log(res);
        }
      });
    }
  },

  removeEvent(event) {
    // wx.showLoading({
    //   title: '加载中...',
    //   mask:true
    // });
    wx.showModal({
      title: "删除提示",
      content: "您确认删除吗?",
      confirmText: "确定",
      confirmColor: "#f00",
      showCancel: true,
      cancelText: "放弃",
      cancelColor: "#0f0",
      //只要当前的showModal()方法正常调用即为success
      success: res => {
        if (res.confirm) {
          ////////////////////////////////////////
          //获取要删除的待办事项的索引值
          //其实该索引值是通过按钮的自定义属性 data-index 传递到当前方法内的
          let index = event.target.dataset.index;
          //原始数组的副本
          let todoList = this.data.todoList;
          todoList.splice(index,1);
          //通过this.setData()方法修改todoList的值
          this.setData({
            todoList:todoList
          }) ;         
          //////////////////////////////////////////
        }
      }
    })


  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('页面已经加载并且显示 -- onLoad...');
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