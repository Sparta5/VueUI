// pages/data/data.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'Tom',
    //性别为true表示女,false表男
    sex:true,
    salary:8000,
    src:'https://img12.360buyimg.com/pop/s590x470_jfs/t1/152449/16/2898/75900/5f8ea43cE1fd4bdd8/6ee860e34c8e0096.jpg',
    className:'red',
    inline:'color:blue;text-align:center',
    users:[
      {
        username:'寗先碧',
        //true表示女,false表示男
        sex:true,
        //1表示专科,2表示本科,3表示研究生,4表示硕士,5表示博士,6表示博士后
        education:3
      },
      {
        username:'孔德明',
        sex:false,
        education:1
      },
      {
        username:'胡泽宇',
        sex:true,
        education:4
      },
      {
        username:'赵一岩',
        sex:false,
        education:6
      }
    ]
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