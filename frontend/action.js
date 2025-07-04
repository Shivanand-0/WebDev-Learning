// let result=Math.floor(Math.random()*6)+1;
// alert(result);

// object:
// const Person={
//     name:"Shiv",
//     age:"26",
//     city:"Haydrabad"
// };
// console.log(Person.city);
// Person.city="New York";
// Person.country="United State";
// console.log(Person.city);
// console.log(Person.country);

// expression::
// higher order function::
// const greet = function(){
//     console.log("hello");
// }
// let multiGreet=function(funcn, n){
//     for(let i=0;i<n;i++){
//         funcn();
//     }
// }
// multiGreet(greet,8)

// returning  function
// const test=function(request){
//     if(request.toLowerCase()=='odd'){
//         return function(num){
//             console.log(!(num%2==0))
//         }
//     }
//     else if(request.toLowerCase()=='even'){
//         let even=function(num){
//             console.log(num%2==0)
//         }
//         return even;
//     }
//     else{
//         console.log("wrong input")
//     }
// }
// let oss=test('odd')
// oss(4)

// method::
// const obj={
//     name:"shiva",
//     add:function(a,b){
//         return a+b;
//     },
//     sub:"subtraction"
// };

// console.log(obj.add(3,4))

// problem::
// 1:::
// let array=[1,2,5,3,4,6,7,89,0,4,33,2]
// let large=function(arr,num){
//     let arr2=[]
//     for(let i=0;i<12;i++){
//         if(arr[i]>num){
//             arr2.push(arr[i]);
//         }
//     }
//     return arr2;
// }

// console.log(large(array,5))

// 2:::
// let unique=function(string){
//    let stri=""
//    for(let i=0;i<string.length;i++){
//     let current=string[i];
//     if(stri.indexOf(current)==-1){
//         stri+=current;
//     }
//    }
//     return stri;
// }
// console.log(unique("ShivanandGupta"))

// 3
// let countries=["India","pakistan","japan","Afganistann"]
// let large=countries[0].length;
// let countrtL;
// for(country of countries){
//     if(large<country.length){
//         large=country.length;
//         countrtL=country;
//     }
// }
// console.log(countrtL)

// 4
// let count=function(stri){
//     let lis=['a','e','i','o','u'];
//     let count=0;
//     for(let i=0;i<stri.length;i++){
//         for(let j=0;j<lis.length;j++){
//             if(stri[i]==lis[j]){
//                 count+=1;
//                 break;
//             }
//         }
//     }
//     return count;
// }

// console.log(count("ShivanandGupta"))

// 5
// let rand=function(start,end){
//     return (Math.floor(Math.random()*(end-start+1))+start)
// }
// console.log(rand(5,10))

// Arraw function
// let sum=(a,b)=>{
//     console.log(`${a+b}`)
// }
// sum(2,6)

// set timeout
// let a="Hello Bro"
// setTimeout(()=>{
//     console.log(a);
// },10000)

// // set Interval
// let a="Hey Bro"
// let id=setInterval(()=>(console.log(a)),2000)
// console.log("hehehe.......")
// setTimeout(()=>{
//     clearInterval(id);
// },10001)


// // This keyword
// let obj={
//     fname:"Shiva",
//     lname:"Nand",
//     cast:"Gupta",
//     getFname1:function(){
//         console.log(`first ${this} `)
//     },
//     getLname1:function(){
//         console.log(`second ${this} `)
//         return this.fname
//     },
//     getFname2:()=>{
//         console.log(`third ${this} `)
//     },
//     getLname2:()=>{
//         console.log(`forth ${this} `)
//         return this.lname
//     },



// }

// obj.getFname1();
// obj.getLname1();
// obj.getFname2();
// obj.getLname2();
// console.log(obj.getLname1())


// HomeWork:::
// let print = (n)=>{
//    let id= setInterval(()=>{
//         console.log("Hello World");
//     },2000);

//     setTimeout(clearInterval(id),(2*n*1000)+1000)
// }
// print(5)

// // arrow function of average
// const arrayAverage =(array)=>{
//     let sum=count=0;
//     for (element of array){
//         sum+=element;
//         count++;
//     }
//     return sum/count;
// }
// console.log(arrayAverage([1,2,3,4,5]))

// // check even number
// let checkEven=(n)=>{
//     if(n%2==0) console.log("even")
//     else console.log("Odd")
// }
// checkEven(4)

// let don=(array)=>{
//     let sum=0;
//     let square=[];
//     for(element of array){
//             sum+=element;
//             square.push(Math.pow(element,2));
//     }
//     let avg=sum/array.length;
//     return [avg,square];
// }

// array=[1,2,3,4,5]
// arrayAlp=['shiv','Ram','raHim','7b7','g']
// let square=array.map((num)=>num*num);
// console.log(square);
// let sum=array.reduce((pre,curr)=>(pre+curr))
// console.log("Sum is:",sum);
// console.log("avg: ",array.reduce((pre,curr)=>(pre+curr))/array.length)

// console.log(array.map((num)=>(num+5)))
// console.log(arrayAlp.map((ele)=>(ele.toUpperCase())))

// let doubleAndReturnArgs=(array,...arg)=>{
//     let array1=[...arg].map((ele)=>(ele*2));
//     let arrayN=array.concat(array1);
//     return arrayN
// }
// let o1={
//     name:'shiva',
//     college:'rcoem'
// }
// let o2={
//     name:'x',
//     college:'srwc'
// }
// let mergeObj=(obj1,obj2)=>{
//     let obj={obj1,obj2}
//     return obj
// }

// DOM manupulation

// document.getElementById('ImgDiv')
// let imgs=document.getElementsByClassName("racImg");
// for(let img of imgs){
//     console.dir(img.src);
// }

// heading=document.querySelector('h1') 
// heading.innerHTML='<h1 style="color:red">Robotics club</h1>';

// let cont=document.createElement('div');
// cont.classList.add('box');
// let body_t=document.querySelector('body');
// body_t.appendChild(cont)
// cont.style.border='4px solid black'
// cont.style.height='200px' 



// let para=document.createElement('p');
// cont.appendChild(para);
// para.innerText="Hey I'm red";
// para.style.color='red';

// let head=document.createElement('h3');
// cont.appendChild(head);
// head.innerText="I'm blue h3!";
// para.style.color='blue';

// let div=document.createElement('div');
// cont.appendChild(div);
// div.style.border='5px sold red';
// div.style.backgroundColor='pink';


// let head1=document.createElement('h1');
// div.appendChild(head1);
// head1.innerText="I'm in a div";

// let para1=document.createElement('p');
// div.appendChild(para1);
// para1.innerText="Me Too!";


// let url="https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     return res.json()
// })
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err);
// })




