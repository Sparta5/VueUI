//app.js
App({
  //小程序初始化完成时触发
  onLaunch: function () {
    console.log('App.onLaunch...');
  },
  //小程序启动或从后台切入前台时触发
  onShow(){
    console.log('App.onShow...');
  },
  //小程序从前台切入后台时触发
  onHide(){
    console.log('App.onHide...');
  },
  globalData: {
    userInfo: null
  }
})

