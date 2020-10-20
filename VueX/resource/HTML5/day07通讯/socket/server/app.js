const { CLIENT_RENEG_LIMIT } = require('tls');

//创建HTTP
let app = require('http').createServer();
//HTTP将作为参数注入到socket.io(依赖注入)
let server = require('socket.io')(app);
//监听端口号
server.listen(4000)

//connection事件代表的时客户端连接到服务器时被触发
server.on('connection',(client)=>{
  //此时的client代表的时每一个连接到当前服务器的客户端
  //为什么要在服务器上获取到客户端对象呢? -- 区分每一个客户端
  //id代表的是服务器为每一个客户端随机分配的唯一ID
  //console.log(client.id);
  client.on('user send message',data=>{
    //console.log('ID为' + client.id + '的用户说：' + data);
    //服务器要向所有的客户端广播一个事件，这样的话其他客户端才可以接收到消息
    server.emit('boast message',data);
  });

  //2.监听客户端登录的事件
  client.on('logined',data=>{
      //3.服务器广播事件
      server.emit('welcome',data);
  });

});
