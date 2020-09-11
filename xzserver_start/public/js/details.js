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
    /*填充下方的商品配置的详情*/  
    var html=`
    <li class="float-left mb-2"><a class="text-muted small" href="#">商品名称：${product.lname}</a></li>
    <li class="float-left mb-2"><a class="text-muted small" href="#">系统：${product.os}</a></li>
    <li class="float-left mb-2"><a class="text-muted small" href="#">内存容量：${product.memory}</a></li>
    <li class="float-left mb-2"><a class="text-muted small" href="#">分辨率：${product.resolution}</a></li>
    <li class="float-left mb-2"><a class="text-muted small" href="#">显卡型号：${product.video_card}</a></li>
    <li class="float-left mb-2"><a class="text-muted small" href="#">处理器：${product.subtitle}</a></li>
    <li class="float-left mb-2"><a class="text-muted small" href="#">显存容量：${product.video_memory}</a></li>
    <li class="float-left mb-2"><a class="text-muted small" href="#">分类：${product.category}</a></li>
    <li class="float-left mb-2"><a class="text-muted small" href="#">硬盘容量:${product.disk}</a></li>
`;
document.querySelector("#params>div>div>div>ul")
                      .innerHTML=html;
document.querySelector("#params>div>div")
         .children[5]
         .innerHTML=product.details;
    /*****实现放大镜效果*****/
    var html=``;
    for(var p of pics){
      html+=`<li class="float-left p-1">
      <img src="${p.sm}" data-md="${p.md}" data-lg="${p.lg}">
    </li>`
    }

    var LIWIDTH=62;
    var div=document.querySelector
    ("#preview>div>div:last-child");
    var ulImgs=div.getElementsByTagName("ul")[0];
    ulImgs.innerHTML=html;
    ulImgs.style.width=LIWIDTH*pics.length+"px"

     var times=0;//记录ul左移动的次数
     var btnLeft=div.firstElementChild;
     var btnRight=div.lastElementChild;
     //当图片总张数<=4张时，btnRight要添加禁用的样式
    //  if(pics.length<=4){
    //    btnRight.className+="disabled";
    //  }
    pics.length<=4&&//(btnRight.className+=" disabled");
                    btnRight.classList.add("disabled")
    console.log(btnLeft.classList);
    console.log(btnRight.classList)
     btnLeft.onclick=function(){
       if(times>0){
        times--;
       console.log(times)
       //把计算后的结果放入ul的样式里
       ulImgs.style.marginLeft=-times*LIWIDTH+"px";
      //  btnRight.className=
            // btnRight.className.replace("disabled","");
               btnRight.classList.remove("disabled")
        // if(times==0){
        //   btnLeft.className+="disabled";
        // }
        times==0&&//(btnLeft.className+=" disabled")
                  btnLeft.classList.add("disabled");
       }
     }
     btnRight.onclick=function(){
      //图片最多点击的次数
      var max=pics.length-4;
      if(times<max){
        times++;
       console.log(times)
       ulImgs.style.marginLeft=-times*LIWIDTH+"px";
       //只要能点右侧按钮左侧就能启动
       btnLeft.//className.replace(" disabled","");
               classList.remove("disbled")
       //
      //  if(pics.length-times==4){
      //    btnRight.className+="disabled";
      //  }
      pics.length-times==4&&//(btnRight.className+=" disabled");
                              btnRight.classList.add("disabled")
       }
     }

     /*鼠标进入小图，切换上方中图片*/
     //先查找中图片img元素和大图片div
     var mImg=document.querySelector("#preview>div>img");
     var divLg=document.getElementById("div-lg");
     //1.
     //因为多个平级img都可鼠标进入，应用事件委托优化，所以绑定一个父元素即可
     ulImgs
     //2.
     //鼠标进入小图，切换中图，所以绑定mouseover事件
     .onmouseover=function(e){
       //2.1.  e.trget代替this
       var target=e.target;
       console.log(e)
       console.log(e.target)
      if(target.nodeName==="IMG"){
      //3.
        //已经提前找到了
      //4.
      //修改中图的src属性为当前鼠标进入的小图片上提前缓存的对应的中图片路径
      mImg.src=target.getAttribute("data-md");
      divLg.style.backgroundImage=`url(${target.getAttribute("data-lg")})`
    }
   }
   /*查找id为mask的半透明遮罩方块和id为super-mask的保护层div*/
   var sMask=document.getElementById("super-mask")
   var mask=document.getElementById("mask");

   /*************放大镜************/
   /*1.鼠标进入最上层的div来显示，显示半透明遮罩方块,还要同时显示右侧大图片*/
   sMask.onmouseover=function(){
    //  replace不能修改原字符串，用replace来接一下
    mask.className=mask.className.replace(" d-none","");
    divLg.className=divLg.className.replace(" d-none","");
   }
   //鼠标移开时
   sMask.onmouseout=function(){
    mask.className+=(" d-none");
    divLg.className+=(" d-none");
   }
   /*2.鼠标在图片中移动，半透明方块跟随鼠标一同移动，且右侧大图背景随鼠标位置移动而移动*/
   sMask.onmousemove=function(e){
     var left=e.offsetX-88;
     var top=e.offsetY-88;
     if(left<0){left=0}else if(left>176){left=176}
     if(top<0){top=0}else if(top>176){top=176}
     mask.style.left=left+"px";
     mask.style.top=top+"px";
     divLg.style.backgroundPosition=`${-left*16/7}px ${-top*16/7}px`
   }
})