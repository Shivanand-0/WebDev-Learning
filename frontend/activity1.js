let heading=document.querySelector("#colourRgb");
let btn=document.querySelector("#colourBtn");
let div=document.querySelector("#colourDiv");

function rgbGenerator(){
    let r=Math.floor((Math.random()*1000)%255);
    let g=Math.floor((Math.random()*1000)%255);
    let b=Math.floor((Math.random()*1000)%255);
    heading.innerText=`RGB(${r},${g},${b})`;
    div.style.backgroundColor=`rgb(${r},${g},${b})`;
}