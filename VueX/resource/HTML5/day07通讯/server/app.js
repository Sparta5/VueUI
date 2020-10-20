const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const server = express();
server.use(cors({
  origin:['http://127.0.0.1:5500','http://localhost:5500']
}))
const pool = mysql.createPool({
  host:'127.0.0.1',
  port:3306,
  user:'root',
  password:'',
  database:'ncov2020',
  charset:'utf8'
})
server.get('/pdata',(req,res)=>{
  let dataset = [
    {
      name:'新疆',
      value:200
    },
    {
      name:'青海',
      value:88
    },
    {
      name:'北京',
      value:103
    }
  ]
  res.send({message:'查询成功',code:1,dataset:dataset});
});
server.listen(3000);
