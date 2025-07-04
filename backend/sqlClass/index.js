const {faker}=require("@faker-js/faker")
const mysql=require("mysql2")
const express= require("express");
const app=express();
const methodOverride=require("method-override")

const ejs=require("ejs")
const path=require("path")



app.set('view engine','ejs');
app.set('views',path.join(__dirname,"/views"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended:true}));






let getRandomUser=()=>{
    return [
         faker.string.uuid(),
         faker.internet.username(), // before version 9.1.0, use userName()
        faker.internet.email(),
         faker.internet.password(),
    ];
}

const connection=mysql.createConnection(
    {
        host:'localhost',
        user:"root",
        database:"ss_user",
        password:"shiva1234"
    }
);

// let total_user=0;

// try{
    
//     // connection.query(q,[data1],(err,result)=>{
//     //     if(err) throw err;
//     //     console.log(result);
//     // });
//     connection.query("select * from user",(err,result)=>{
//         if(err) throw err;
//         total_user=result.length
//     });
//     connection.end();
// }catch(e){
//     console.log("Error: ",e)
// }

app.get("/",(req,resp)=>{
    try{
        connection.query("select count(*) from user",(err,result)=>{
            if(err) throw err;
            let count = result[0]["count(*)"];
            resp.render("index.ejs",{count})
        });
    }catch(e){
        console.log("Error: ",e)
    }
})
app.get("/user",(req,resp)=>{
    try{
        connection.query("select * from user",(err,result)=>{
            if(err) throw err;
            resp.render("user.ejs",{result})
        });
    }catch(e){
        console.log("Error: ",e)
    }
})

app.post("/user/:id/edit",(req,resp)=>{
    let id=[req.params.id]
    try{
        connection.query("select * from user where id=?",id,(err,user)=>{
            resp.render("editform.ejs",{user})
        });
    }catch(e){
        console.log("Error: ",e)
    }
})


app.patch("/user/:id",(req,resp)=>{
    let id=req.params.id
    let {username: formUsername, pass: formPass}=req.body
    try{
        connection.query("select * from user where id=?",id,(err,user)=>{
            if(err) throw err;
            if(formPass==user[0].password){
                connection.query("Update user set username=? where id=?",[formUsername,id],(err,result)=>{
                            if(err) throw err;
                            resp.redirect("/user")
                        });
            }else{
                resp.send("wrong password!!!")
            }
        });

    }catch(e){
        console.log(e)
    }
})


app.listen("8080",()=>{
    console.log("server is listening...");
})