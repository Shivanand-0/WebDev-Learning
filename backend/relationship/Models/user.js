const mongoose= require('mongoose');
const {Schema,model}= mongoose;

main()
.then(()=>{console.log('connected db')})
.catch(err=>console.log(err))
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDB');
}

const userSchema=new Schema({
    username: String,
    addresses:[
        {
            location:String,
            city:String
        }
    ]
});

const User=model('User',userSchema);

const addUsers=async()=>{
    let user1=new User({
        username='Shiva';
        addresses=[{
            location:'2313454',
            city:'gkp'
        }]
    });
    
}