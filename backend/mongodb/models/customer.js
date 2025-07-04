const mongoose=require("mongoose");
const {Schema}=mongoose;
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
}
main().then(()=>{
    console.log("connected db...")
})
.catch((e)=>{console.log("Error: ",e)})


let orderSchema=new Schema({
    item:String,
    price: Number
})

let  customerSchema=new Schema({
    name:String,
    orders:[
        {
            type: Schema.Types.ObjectId,
            ref:"Order"
        }
    ]
})


// customerSchema.pre("findOneAndDelete",async()=>{
//     console.log("pre Middleware");
// })

customerSchema.post("findOneAndDelete",async(customer)=>{
    let result;
    if(customer.orders.length){
        result =await Order.deleteMany({_id:{$in:customer.orders}})
    }
    console.log(result);
})

const Order=mongoose.model("Order", orderSchema);
const Customer=mongoose.model("Customer",customerSchema);


const addCustomer=async()=>{
    let newCust=new Customer({
        name:"Vashi"
    })
    let newOrder= new Order({
        item:"burger",
        price:50
    })
    newCust.orders.push(newOrder);
    await newCust.save();
    await newOrder.save();
    console.log("added new customer")
}
const addOrder=async()=>{
    let res=await Order.insertMany([
        {item:"Samosa",price:10},
        {item:"Idli",price:35},
        {item:"Dosa",price:60},
    ])
    console.log(res)
}

const del=async()=>{
    await Customer.findByIdAndDelete("683a248b5b77b68408ca8adb")
    // await Customer.findByIdAndDelete("6838d8b48ac88c073920947f")
}


// addOrder();
// addCustomer();
del()