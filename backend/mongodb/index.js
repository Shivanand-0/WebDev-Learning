const mongoose= require("mongoose");

async function main(){
 await mongoose.connect("mongodb://127.0.0.1:27017/testDB");
} 
main()
.then((result)=>(console.log(`success:${result}`)))
.catch((err)=>(console.log(`Error:${err}`)))

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    age:Number
});
const User=mongoose.model("User", userSchema);
// let user1=new User({name:"Shiv",email:"shiva@gmail.com",age:11});
// user1.save().then(res=>console.log(res))
// .catch(e=>console.log(e))

 //User.insertMany([{name:"Aman",email:"aman@gmail.com",age:12},{name:"Har",email:"har@gmail.com",age:110}])
// .then((res)=>console.log("success:",res))
//User.updateOne({age:{$eq:110}},{$set:{age:13}}).then(data=>console.log(data))
User.findByIdAndDelete("67bd90f5743a76dd30281a3a").then(data=>console.log(data))
User.find().then(res=>console.log(res))