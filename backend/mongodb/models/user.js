const mongoose=require("mongoose");
const {Schema}=mongoose;
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
}
main().then(()=>{
    console.log("connected db...")
})
.catch((e)=>{console.log("Error: ",e)})


let userSchema=new Schema({
    username:String,
    addresses:[
        {
            location:String,
            city:String
        }
    ]
})

const User=mongoose.model("User", userSchema);


const addUsers= async()=>{
    let user1= new User({
        // username:"Shiva",
        addresses:[
            {
                location:"gittikhadan",
                city:"Nagpur"
            }
        ]
    })

    user1.username="Aman"
    // user1.addresses.push({location:"kanhan",city:"nagpur"});
    let result=await user1.save();
    console.log(result);
}


addUsers();