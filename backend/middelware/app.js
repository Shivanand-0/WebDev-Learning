const express=require("express")
const app=express()
const ee=require("./ExpressError")

app.use("/api",(req,resp,next)=>{
    let {token}=req.query;
    if(token==='giveaccess'){
        next()
    }
    throw new expressError(600,"Main nahi bataunga")
});

app.get("/err",(req,resp)=>{
    abc=xyz
    resp.send("hoho")});
app.get("/api",(req,resp)=>{
    resp.send("hello ji...")});

app.get("/admin",(req,resp)=>{
    throw new ee(403,"bad request")
})
app.use((err,req,resp,next)=>{
    let {status,message}=err;
    // resp.send(`Status: ${status} Error MSG: ${message}\n${err}`);
    resp.status(status).send(message)
})


app.listen(8080,()=>console.log("listing at port 8080..."))