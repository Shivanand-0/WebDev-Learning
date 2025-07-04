const express=require('express');
let app=express();
app.listen(3001,function(){
    console.log('server start.....')
})
// app.use(function(req,res){
//     console.log("request recieved: ");
//     res.send({name:'abc',id:'123'})
//     // console.log(req);   
// })
app.get('/',(req,res)=>{
    console.log("request recieve")
    res.send("root page")
})
// app.post('/',(req,res)=>{
//     console.log("request recieve")
//     res.send("root page with post request")
// })
// app.get('/help',(req,res)=>{
//     console.log("request recieve")
//     res.send("help page")
// })
// app.get('/contact',(req,res)=>{
//     console.log("request recieve")
//     res.send("contact page")
// })
// app.get('*',(req,res)=>{
//     console.log("request recieve")
//     res.send("sorry wrong path page")
// })

app.get('/:username/:id',(req,res)=>{
    console.log(req.params);
    // let un=req.params;
    res.send(`path para route with username: ${req.params.username}`)
});