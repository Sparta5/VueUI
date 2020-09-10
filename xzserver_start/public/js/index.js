//专门处理操作index.html文件
//回调函数不要用了
ajax("get","/index").then(result=>{
  console.log(result);
   var [p1,p2,p3]=result;
  //1.取出一号商品
  //2.将商品的每个属性，拼接
  var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
  <div class="card-body d-flex flex-column align-items-start">
    <h5 class="d-inline-block mb-2">${p1.title}</h5>
    <h6 class="mb-5">
      <a class="text-dark" href="javascript:;">${p1.details}</a>
    </h6>
    <span class="text-primary">¥${p1.price.toFixed(2)}</span>
    <a class="btn btn-primary" href="${p1.href}">查看详情</a>
  </div>
  <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${p1.pic}" data-holder-rendered="true">
</div>`
  //3.将拼好的HTML片段放入id
  document.getElementById("p1").innerHTML=html;
  var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
  <div class="card-body d-flex flex-column align-items-start">
    <h5 class="d-inline-block mb-2">${p2.title}</h5>
    <h6 class="mb-5">
      <a class="text-dark" href="javascript:;">${p2.details}</a>
    </h6>
    <span class="text-primary">¥${p2.price.toFixed(2)}</span>
    <a class="btn btn-primary" href="${p2.href}">查看详情</a>
  </div>
  <img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${p2.pic}" data-holder-rendered="true">
</div>`
//4.拼接d2到html
document.getElementById("p2").innerHTML=html
var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
<div class="card-body d-flex flex-column align-items-start">
  <h5 class="d-inline-block mb-3">${p3.title}</h5>
  <span class="text-primary">¥${p3.price.toFixed(2)}</span>
  <a class="btn btn-primary" href="product_details.html?lid=9">查看详情</a>
</div>
<img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${p3.pic}" data-holder-rendered="true">
</div>`
//5.拼接d3
document.getElementById("p3").innerHTML=html
//6.1截取result中的后3个商品
var others=result.slice(3);
console.log(others);
//6.2定义一个空的HTML
var html=``;
//6.3遍历others中每一个商品对象
for(var p of others){
  //
  html+=`<div class="col-md-4 p-0 pl-2">
  <div class="card border-0 text-center">
    <img class="card-img-top" src="/img/index/study_computer_img4.png" alt="Card image cap">
    <div class="card-body p-0 pr-1 pl-1">
      <span class="d-inline-block">${p.title}</span>
      <span class="text-primary small">¥${p.price.toFixed(2)}</span>
      <a class="btn btn-sm btn-primary" href="${p.href}">查看详情</a>
    </div>
  </div>
</div>`
 }
 console.log(html)
//6.4 将拼好的
 document.getElementById("others").innerHTML=html
})