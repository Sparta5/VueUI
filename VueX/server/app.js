const express = require('express');
const server = express();
const cors = require('cors');

const mysql = require('mysql');
const pool = mysql.createPool({
  //MySQL数据库服务器的地址
  host:'127.0.0.1',
  //端口号
  port:'3306',
  //数据库用户的用户名
  user:'root',
  password:'',
  //数据库名称
  database:'xzqa',
  charset:'utf8',
  //最大连接数据
  connectionLimit:10
})

//作为中间件使用方法()里的对象()
server.use(cors({
  origin:['http://localhost:8080','http://127.0.0.1:8080']
}));

//获取所有文章分类的接口/category
server.get('/category',(req,res)=>{
  let sql = 'SELECT id,category_name FROM xzqa_category'
  pool.query(sql,(err,results)=>{
    if(err) throw err;
    res.send({message:'查询成功',code:1,results:results})
  });
});

server.get('/lists',(req,res)=>{
  let cid = req.query.cid;
  let page = req.query.page;
  let pagesize = 10;
  let offset = (page -1) * pagesize;
  let sql = 'SELECT id,subject,description,image FROM xzqa_article WHERE category_id = ? LIMIT  '+ offset + ',' + pagesize;
  //执行SQL查询
  pool.query(sql,[cid],(err,results)=>{
    if(err) throw err;
    res.send({message:'查询成功',code:1,results:results});
  })
})

server.listen(3000,()=>{
  console.log('server is running...')
})