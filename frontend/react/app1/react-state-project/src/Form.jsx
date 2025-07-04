import {useState} from "react"
export default function Form(){
    let [ipitem,setIpItem]=useState({username:"",pass:"",role:""})
    function updateIpItem(event){
        let targetName=event.target.name;
        let targetValue=event.target.value;
        console.log(targetName)
        setIpItem((prev)=>({...prev,[targetName]:targetValue}))
        
    }
    return(<>
        <form action="/" method="get" >
            <label htmlFor="username">User Name: </label>
            <input type="text" name="username" id="username" value={ipitem.username} onChange={updateIpItem}/>
            <br /><label htmlFor="pass">Password: </label>
            <input type="text" name="pass" id="pass" value={ipitem.pass} onChange={updateIpItem}/>
            <br /><label htmlFor="role">Role: </label>
            <input type="text" name="role" id="role" value={ipitem.role} onChange={updateIpItem}/>
            <br />
            <button>Submit</button>
        </form>
        </>);
}