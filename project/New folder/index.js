const express=require('express');
const app=express();
const path=require('path');

const port=8080;

app.set('view engine','ejs');
app.set('viwes',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
let data={};

app.listen(port,()=>{
    console.log(`server running at port: ${port} `)
});

app.get('/',(req,res)=>{
    res.render('home.ejs');
});

app.post('/home',(req,res)=>{
    data=req.body;
    console.log(data);
    res.redirect('/');
});
