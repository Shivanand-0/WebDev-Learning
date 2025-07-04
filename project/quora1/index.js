const express= require("express");
const ejs=require('ejs');
const mysql=require('mysql2');
const methodOverride=require("method-override");
const path=require("path");

const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"/views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));


const connection=mysql.createConnection(
    {
        host:'localhost',
        user:"root",
        database:"ss_user",
        password:"shiva1234"
    }
);

app.get('/',(req,resp)=>{
    try{
        connection.query("select * from user",(err,result)=>{
            if(err) throw err;
            let users=[];
            for(let user of result){
                users.push(user.username);
            }
            // console.log(users);
            resp.render('index.ejs',{users});
        });
    }catch(e){
        console.log("Error: ",e);
    }
});






app.listen("8080",()=>{
    console.log("server is listening...");
});