// let listContainer=document.querySelector('#list-container');
let input=document.querySelector('#list-ip');
let addBtn=document.querySelector('#enter-btn');
let listContainer=document.querySelector('#whole-list');

let cnt=1;

addBtn.addEventListener('click',function(){
    let item=input.value;
    if(item!=""){
        let l=document.createElement('li');
        l.innerText=`@. ${item}        `;
        listContainer.appendChild(l);
        l.setAttribute('class','li');
        cnt++;
        input.value=""

        let delBtn=document.createElement('button');
        delBtn.innerText='Delete';
        l.appendChild(delBtn);

    }
})


listContainer.addEventListener('click',function(event){
    if(event.target.nodeName=='BUTTON'){
        let listitem=event.target.parentElement;
        listitem.remove();
        cnt--;

    }
});

