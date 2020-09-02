//定义用户模块，包含一个功能
var signin=function(){
  console.log("登录...")
}
var signup=function(){
  console.log("注册...")
}
var signout=function(){
  console.log("注销...")
}
/*ES6中简写:*/
var user={
signin,//signin:signin,
signup,
signout
}
//抛出整个对象模块
module.exports=user;