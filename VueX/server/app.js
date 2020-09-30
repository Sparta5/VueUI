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
  //接收文章分类ID
  let cid = req.query.cid;
  //接收页码
  let page = req.query.page;
  //自定义设置记录数量保存一个变量里
  let pagesize = 15;
  //计算出offset参数值
  let offset = (page -1) * pagesize;
  let sql = 'SELECT id,subject,description,image FROM xzqa_article WHERE category_id = ? LIMIT  '+ offset + ',' + pagesize;
  //储存总记录数
  let rowcount;
  //储存总页数
  let pagecount;
  //执行SQL查询
  pool.query(sql,[cid],(err,result)=>{
    if(err) throw err;
    /////////////////
    //1.获取记录数
    sql = 'SELECT COUNT(id) AS count FROM xzqa_article WHERE category_id=?';
    pool.query(sql,[cid],(err,results)=>{
      if(err) throw err;
      rowcount = results[0].count
      //2.计算总页数
      pagecount = Math.ceil(rowcount / pagesize);
      console.log(rowcount);
      console.log(pagecount);
      res.send({message:'查询成功',code:1,results:result,pagecount:pagecount});
    });
    
  })
    /////////////////
})
server.get('/article',(req,res)=>{
  //获取文章ID
  let id = req.query.id;
  //SQL查询 -- 多表(内)连接
  let sql = 'SELECT r.id,subject,content,created_at,nickname,avatar,article_number FROM xzqa_author AS u INNER JOIN xzqa_article  AS r ON  author_id = u.id WHERE r.id=?';
  pool.query(sql,[id],(err,results)=>{
    if(err) throw err;
    res.send({message:'查询成功',code:1,result:results[0]});
    console.log(results[0])
  });
})

server.listen(3000,()=>{
  console.log('server is running...')
})