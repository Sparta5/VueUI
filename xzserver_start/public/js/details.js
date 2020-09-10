//获得地址栏中查询字符串中lid的值
var lid=location.search.split("=")[1];//
console.log(lid)//5
// 向details接口发送get请求
ajax("get","/details",`lid=${lid}`).then(result=>{
  console.log(result)
  //解构
  var {product,specs,pics}=result;
  //填充右上角详情部分
  var firstH6=document.querySelector("#details>h6:nth-child(1)")
  firstH6.innerHTML=product.title;

  firstH6.nextElementSibling//
  .firstElementChild//
  .innerHTML=product.subtitle;
  //查找details下的第三个孩子的div
  var div=document.querySelector("#details>div:nth-child(3)");
  div.firstElementChild
     .children[1].innerHTML
     =`¥${product.price.toFixed(2)}`
  div.children[1]
     .children[1]
     .innerHTML=product.promise;
   //填充右侧规格列表:
    var html=``;
    for(var sp of specs){//当前splid==lid(地址栏lid)才显示active
      html+=`<a class="btn btn-sm btn-outline-secondary ${sp.lid==lid?"active":""}" href="product_details.html?lid=${sp.lid}">${sp.spec}</a>`
    }
    document.querySelector("#details>div:nth-child(5)>div:nth-child(2)").innerHTML=html;
})