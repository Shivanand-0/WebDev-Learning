const mongoose= require('mongoose');
const Chat= require("./models/chat.js")



async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
main().then(resp=>console.log("DB connected..."))
.catch(err=>console.log(err))


let allChats=[
    {
        from:'Shiva',
        to:'Aman',
        msg:'Hello Aman! How are you?',
        created_at : new Date() 
    },
    {
        from:'Aman',
        to:'Shiva',
        msg:'Hello Shiv! I am fine. How about you?',
        created_at : new Date() 
    },
    {
        from:'Shiva',
        to:'Neha',
        msg:'Dear! Do you have class notes?',
        created_at : new Date() 
    },
    {
        from:'Ashlesha',
        to:'Neha',
        msg:'You are so funny! hahaha...',
        created_at : new Date() 
    },
    {
        from:'Harsh',
        to:'Shravani',
        msg:'Nice to talk to you...',
        created_at : new Date() 
    },
    {
        from:'Shashi',
        to:'Shiva',
        msg:'Are you ready for that plan?',
        created_at : new Date() 
    },
    {
        from:'Aakrush',
        to:'Sam',
        msg:'all the best for your examination.',
        created_at : new Date() 
    },
    {
        from:'Shiva',
        to:'Aman',
        msg:'thank u!',
        created_at : new Date() 
    },
]

Chat.insertMany(allChats)

////For inserting single chat
// let chat1=new Chat({
//     from:'Shiva',
//     to:'Aman',
//     msg:'Hello Aman! How are you?',
//     created_at : new Date()
// })
// chat1.save().then(resp=>console.log(resp))


