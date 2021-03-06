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
  removeEvent(event){
    // wx.showLoading({
    //   title: '加载中',
    //   mask:'true'
    // });
    wx.showModal({
      title:"删除提示",
      content:"你确认要删除吗?",
      confirmText:"确认",
      confirmColor:"#f00",
      showCancel:"true",
      cancelText:"放弃",
      cancelColor:"#0f0",
      //只要当前的showModal()方法正常调用即为success
      success:res => {
        if(res.confirm) {
          ////////////////////////////////////////
          //获取要删除的待办事项的索引值
          //其实该索引值是通过按钮的自定义属性 data-index 传递到当前方法内的
          let index = event.target.dataset.index;
          console.log(event)
          //原始数组的副本
          let todoList = this.data.todoList;
          console.log(todoList)
          todoList.splice(index,1);
          this.setData({
            todoList:todoList
          });
          //////////////////////
        }
      }
    })
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
    console.log('页面已经加载并且显示 -- onLoad...');
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