const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const connectDB = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mywebapp'
})
app.use(cors());
 const selectAllArticle = 'SELECT * FROM article';

connectDB.connect(err =>{
if(err){
    return err;
}
})
app.get('/',(req,res)=>{
    res.send("hello to root path");
});
app.get('/article',(req,res)=>{
    connectDB.query(selectAllArticle,(err,result)=>{
        if(err){
            res.send(err);
        }else{
            return res.json({
                data:result
            })
        }
    })
})



app.get('/Portdetail/:id',(req, res)=> {
    const id = req.params.id;
    const selectArticleById = `SELECT *  FROM article where id = ${id}`
    connectDB.query(selectArticleById,(err,result)=>{
        if(err){
            res.send(err);
        }else{
            return res.json({
                data:result
            })
        }
    })
});


app.listen(4001,()=>{
    console.log("listen sever port 4001");
    
})