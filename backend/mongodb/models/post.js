const mongoose=require("mongoose");
const {Schema}=mongoose;
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
}
main().then(()=>{
    console.log("connected db...")
})
.catch((e)=>{console.log("Error: ",e)})

const userSchema=new Schema({
    username:String,
    email:String
})
const postSchema=new Schema({
    content:String,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})

const User=mongoose.model('User',userSchema);
const Post=mongoose.model('Post',postSchema);

const addData=async ()=>{
    // let user1=new User({
    //     username:"Aman",
    // })
    // user1.email="aman@gmail.com";


    // let post1=new Post({
    //     content:"My authentic bookish content...",
    //     likes:182,
    // })
    // post1.user=user1;
    let  olduser=await User.findOne({username:"Aman"})
    let post2=new Post({
        content:"My authentic video content...",
        likes:82,
        user:olduser
    })

    // await user1.save();
    // await post1.save();
    await post2.save();

    // console.log(user1)
    // console.log(post2)

}

// const del=async()=>{
//     await Post.findByIdAndDelete("6838e4b9a04e99f6314c0a37")
// }

const getData=async()=>{
    let res=await Post.findOne({}).populate('user',['username'])
console.log(res)
}
getData();
// del()
// addData();