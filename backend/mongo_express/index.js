const express= require('express');
const ejs= require('ejs');
const mongoose= require('mongoose');
const path=require("path")
const Chat= require("./models/chat.js");
const methodOverride=require('method-override')

const app=express();
app.set("views",path.join(__dirname,"views"))
app.set("view engine",'ejs')
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
main().then(resp=>console.log("DB connected..."))
.catch(err=>console.log(err))


app.get('/',(req,resp)=>{
    resp.send("Hello, this is home page..")
})


//index route
app.get('/chats',async (req,resp)=>{
    let chats=await Chat.find()
    resp.render('index.ejs',{chats})
})
 
// new chat route
app.post('/chats/new',(req,resp)=>{
    resp.render("newChat.ejs")
})
app.post("/chats",(req,resp)=>{
    let {from,to, msg}= req.body;
    let newChat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at: new Date()
    })
    newChat.save().then((result)=>{
        resp.redirect("/chats")
    })
    .catch(err=>console.log(err))
})

//edit  chat route
app.get('/chats/:id/edits',async (req,resp)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
    resp.render("editChat.ejs",{chat})
})

// PUT or update  route
app.put("/chats/:id",async (req,resp)=>{
    let {id}=req.params;
    let {msg:newMsg}=req.body;
    let updatedChat= await Chat.findByIdAndUpdate(id,{$set:{msg:newMsg}},{runValidators:true, new:true});
    console.log(updatedChat);
    resp.redirect("/chats")
})

//Delete route
app.delete("/chats/:id",async (req,resp)=>{
    let {id}=req.params;
    let deletedChat=await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    resp.redirect("/chats");
})

app.listen(8080,()=>{
    console.log("Server is listening on por 8080....")
});



