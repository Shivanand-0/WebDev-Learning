
let level=document.querySelector('#level');
let red=document.querySelector('#red');
let orange=document.querySelector('#orange');
let blue=document.querySelector('#blue');
let green=document.querySelector('#green');
let btn=document.querySelector('#btn');


let lightsValue={
    red:0,
    green:1,
    orange:2,
    blue:3,
};
let lights=[red,green,orange,blue];
let gameStack=[];
let userStack=[];
let levelNo=0;
let sequence=-1;

// // 
// Problem: 
//  while fast clicking on same div, value of ackground colour get set to permanently...
//  may be due to setTimeout


// // 
let gameFlash=(boxNo)=>{
    let colorPre=lights[boxNo].style.backgroundColor;
    lights[boxNo].style.backgroundColor='rgb(236, 232, 104)'
    setTimeout(function(){
        lights[boxNo].style.backgroundColor=colorPre;
    },200);
}
let userFlash=(boxNo)=>{
    let colorPre=lights[boxNo].style.backgroundColor;
    lights[boxNo].style.backgroundColor='rgb(181, 196, 176)'
    setTimeout(function(){
        lights[boxNo].style.backgroundColor=colorPre;
    },200);
}



// start

btn.addEventListener('click',function(){
    btn.innerText="";
    gameStack=[];

    level.innerText=`Level-${levelNo}`;
    let boxNo=Math.floor((Math.random()*10)%4);
    gameStack.push(boxNo);
    gameFlash(boxNo);
    console.log(gameStack)
});
let gameOver=()=>{
    level.innerHTML=`<h3><b>***Game Over***<b><br>Your Highest Level: ${levelNo}<h3>`;
    level.style.color='red'
    btn.innerText="Try Again";

}

// check stack
let check=(sequence)=>{
    if(gameStack[sequence]==userStack[sequence]){
        if(sequence==levelNo){
            updateLevel();
        }
    }
    else{
        gameOver();
    }
}

// colour box clicked

for(let light of lights){
    light.addEventListener('click',function(){
        let boxNo=lightsValue[this.attributes[0].value]
        userFlash(boxNo);
        userStack.push(boxNo);
        sequence++;      
        check(sequence);
    })
}

// update level
let updateLevel=()=>{
    levelNo++;
    sequence=-1;
    userStack=[];
    level.innerText=`Level-${levelNo}`;
    let boxNo=Math.floor((Math.random()*10)%4);
    gameStack.push(boxNo);
    gameFlash(boxNo);
}
