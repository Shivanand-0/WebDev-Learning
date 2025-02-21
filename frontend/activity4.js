
let btn1=document.querySelector('#btn1');
let btn2=document.querySelector('#btn2');
let fact=document.querySelector('#fact');
let img=document.querySelector('img');


async function showCatFact(){
    try{
        let url="https://catfact.ninja/fact";
        let res=await axios.get(url);
        fact.innerText=res.data.fact
    }catch(e){
        console.log("error: ",e)
        fact.innerText="No Fact Found! sorry.."
    }

}
async function showDogPic(){
    try{
        let url="https://dog.ceo/api/breeds/image/random";
        let res=await axios.get(url);
        img.setAttribute('src',res.data.message)
        // console.log()
    }catch(e){
        console.log("error: ",e)
        fact.innerText="No Fact Found! sorry.."
    }

}
function clearDogPic(){
    img.setAttribute('src','#');
}
function clearCatFact(){
    fact.innerText="";
}

btn1.addEventListener('click',()=>{
    clearDogPic();
    showCatFact();    
});
btn2.addEventListener('click',()=>{
    clearCatFact();
    showDogPic();    
});

