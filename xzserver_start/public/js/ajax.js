//负责发送ajax请求的函数
//type 
//callback: 专门接收服务器返回的结果，并处理返回结果的函数
//data
function ajax(type,url,data){
  //回调函数会影响回调地狱用primise包裹整个请求--去掉callback
  //如果不考虑出错的话可以去掉,reject---不设计到this可以用箭头函数
 return new Promise(resolve       =>{
  var xhr=new XMLHttpRequest();
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
     var result=JSON.parse(xhr.responseText)
      // console.log(result)
       resolve(result);
      // console.log(callback)
    }
   }
   if(type=="get"&&data!==undefined){
    url+=`?${data}`
    console.log(url)
  }
    xhr.open(type,url,true);
    xhr.send();
 })
}