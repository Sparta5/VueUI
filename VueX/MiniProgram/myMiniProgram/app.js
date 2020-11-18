//app.js
App({
  onLaunch(){
    console.log('小程序初始化完成 - onLaunch...')
  },
  onShow(){
    console.log('小程序显示 -- onShow...')
  },
  onHide(){
    console.log('小程序隐藏 -- onHide...')
  },
  globalData: {
    userInfo: null
  }
})