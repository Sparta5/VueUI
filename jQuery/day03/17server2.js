const http=require("http");
http.createServer((req,res)=>{
  var fun=req.url.split("=")[1];
  var weather="北京 小雨 26~19";
  res.writeHead(200,{
    "Content-Type":"text/plain;charset=utf-8",
  });
    // var str=`document.write("${weather}")`;
    // var str=`tryit("${weather}")`;
    var str=`${fun}("${weather}")`
    console.log(str)
    res.write(str);
    res.end();
}).listen(3000)