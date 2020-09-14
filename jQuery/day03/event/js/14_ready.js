//将所有事件绑定代码放在window.onload事件的处理函数内: 
//仅仅保存一段事件绑定代码
//但暂不执行！
//当所有网页内容都加载完才自动执行！
//window.onload=function(){
// window.addEventListener("load",function(){
// $(window).load(function(){
// document.addEventListener("DOMContentLoaded",function(){
// $(document).on("DOMContentLoaded",function(){
// $(document).ready(function(){
// $().ready(function(){
// $(function(){
document.addEventListener("DOMContentLoaded",function(){
	alert("仅DOM内容加载完成就为btn1绑定事件")	
	$("#btn1").click(function(){
		alert("1疼")
	})
})