const express= require('express');
const app=express();
const path=require('path');
const {v4: uuidv4}=require('uuid');
const methodOverride=require('method-override');

const port=8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));





let posts=[
    {
        id:uuidv4(),
        username:'shiv',
        content:'Hello! i am new here, so can you help me...'
    },
    {
        id:uuidv4(),
        username:'Aman',
        content:'We need peace in our world...'
    },
    {
        id:uuidv4(),
        username:'Nasum',
        content:'Kudoss! i got selected for nobal prize..'
    }, 
    {
        id:uuidv4(),
        username:'Maa',
        content:'Focus on your goal....'
    }
]







app.listen(port, ()=>{
    console.log(`server is running at port:${port} `);
});

app.get('/posts',(req,res)=>{
    res.render('index.ejs', {posts});
});

app.get('/posts/new',(req,res)=>{
    res.render('new.ejs');
})

app.post('/posts',(req,res)=>{
    let newPost=req.body;
    newPost.id=uuidv4(); 
    posts.push(newPost);
    console.log(newPost);
    res.redirect('/posts');
});

app.get('/posts/:id',(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render('show.ejs',{post});
})

app.patch('/posts/:id',(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=>id===p.id);
    post.content=newContent
    res.redirect("/posts")
})

app.get('/posts/:id/edits',(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render('edit.ejs',{post});
})

app.delete('/posts/:id',(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=>id!==p.id);

    res.redirect("/posts");
})
