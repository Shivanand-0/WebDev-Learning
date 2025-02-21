let url='http://universities.hipolabs.com/search?name=';
let btn=document.querySelector('button');
let input=document.querySelector('input');
let lst=document.querySelector('ul');
let heading=document.querySelector('#c-name');
let country;

let getCountry=()=>{
    country=input.value;
    if(country!=""){
        heading.innerText=`List of Colleges in ${country}: `;
        input.value=""
    }else{
        heading.innerText=`Please Enter Country Name...`;
    }
}

let getCollegeList=async ()=>{
    
    if(country!=""){
        try{
            let res=await axios.get(url+country);
            for(let col of res.data){
                if(col.country.lower==country.lower){
                    let list=document.createElement('li');
                    let anchor=document.createElement('a');
                    list.innerText=col.name
                    anchor.setAttribute('href',col.web_pages[0]);
                    anchor.setAttribute('target','_blank');
                    anchor.appendChild(list);
                    lst.appendChild(anchor);
                    // console.log(col.web_pages[0])
                } 
                else{
                    heading.innerText=`Wrong Country Name`
                }
            }
        }catch(e){
            heading.innerText=`Get Error While Fetching Data`;
            console.log('error: ',e );
        }
    }
    
}


btn.addEventListener('click',()=>{
    // remove
    getCountry()
    getCollegeList()
})
