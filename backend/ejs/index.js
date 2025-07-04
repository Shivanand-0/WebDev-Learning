let express= require('express');
const app=express();
let path=require('path');
app.set('view engine',"ejs");
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));


app.get('/',(req,res)=>{
    res.send("<h1>Root directory</h1>")
});

// app.get('/dice',(req,res)=>{
//     let randValue=Math.floor(Math.random()*6)+1;
//     res.render("home",{rand:randValue})
// });

app.get('/ig/:username',(req,res)=>{
    let {username}=req.params;
    let instaData=require('./data.json');
    let data=instaData[username];
    res.render("insta",{data})
});


const port=8080
app.listen(port,()=>{
    console.log(`listening on port: ${port}`);
});
