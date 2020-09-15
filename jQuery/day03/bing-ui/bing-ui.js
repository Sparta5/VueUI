jQuery.prototype.myAccordion=function(){
  this.addClass("my-accordion")
      .children(":nth-child(2n+1)")
      .addClass("title")
      .next()//自带遍历：3个偶数位置的元素
      .addClass("content fade")
      .first()
      .addClass("in")

$(".accordion").on("click",".title",e=>
      $(e.target).next(".content").toggleClass("in")
        .siblings(".content").removeClass("in")
    );
  }