/*以下代码属于服务器端，你们是前端工程师，了解即可！不会写也没关系*/
//引入http模块
const http=require("http");//内置核心模块
//创建一个支持http请求的服务器端程序
var server=http.createServer(
  //回调函数: 只要一个请求发送到这个服务端程序，就自动执行回调函数
  //req: 接住的是请求的内容，比如参数值
  //res: 包含的是响应结果对象，可用于向客户端返回响应结果
  function(req,res){
    //假设服务器端可以返回天气数据
    var weather="北京 阴23~29度";
    //配置响应结果头部信息，要求客户端浏览器必须使用utf-8编码来解析返回的内容
    res.writeHead(200,{
      //通知客户端浏览器请使用utf-8格式解析响应结果的内容
      //内容的类型     普通文本    字符集  
      "Content-Type":"text/plain;charset=utf-8",
      //添加跨域访问，将返回的数据头伪装为和客户端网页所在的地址一模一样的地址: http://127.0.0.1:5500
      "Access-Control-Allow-Origin":"http://127.0.0.1:5500"
//       "Access-Control-Allow-Origin":"*"
    });
    //将天气数据写入响应流中，但暂不发送
    res.write(weather);
    //只要调用end时才发送！
    res.end();
  }
);
//让服务器对象启动监听3000端口
server.listen(3000);
//1. 右键单击要运行的17_server.js文件，选择在终端中打开
//2. 在弹出的窗口中，看到出现day04>，输入node 17_server.js
//3. 打开浏览器，在地址栏输入:http://localhost:3000