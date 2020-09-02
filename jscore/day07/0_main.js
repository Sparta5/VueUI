// const user=require("./0_user")
// // import user from "./0_user.js";
// //调用模块中提供的方法
// user.signin();
// user.signout();
//右键->在终端打开

//将来开发中，都是先解构再单独使用
const {signin,signout}=require("./0_user");
signin();
signout();
