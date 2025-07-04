import{useState} from 'react'
import {v4 as uuidv4} from "uuid"
import './ToDo.css'

export default function ToDo(){
    let [items,setItems]=useState([{todo:"sam",id:uuidv4(),isDone:false}]);
    let [ipItem,setIpItem]=useState("");
    let [textStyle,setTextStyle]=useState({
        textDecorationLine:"none",
        display:"flex",
        alignItems:"center",
        justifyItem:"center"
        });
    function updateInput(event){
        setIpItem(event.target.value)
    }
    function updateBtn(){
        setItems((prevItem)=>([...prevItem,{todo:ipItem,id:uuidv4(),isDone:false}]))
        setIpItem("")
    }
    function deleteItem(id){
        let newData=items.filter((item)=>(item.id!=id))
        setItems([...newData])
    }
    function updateMarkdone(id){
            setItems((prevItem)=>
                prevItem.map((item)=>{
                    if(item.id==id){
                        if(item.isDone==false){
                            return {
                                ...item,
                                isDone: true,
                            }
                        }else{
                            return {
                                ...item,
                                isDone: false,
                            }
                        }
                    }else{
                        return item;
                    }
                })
            )
    }
    return(
        <>
        <input type="text" value={ipItem} onChange={updateInput} placeholder='Enter ToDo'/>
        <button onClick={updateBtn}>Add</button>
        <br /><br /><br />
        <hr />
        <hr />
        <h3>List of Task</h3>
        <hr />
        <ul>
            {items.map((item)=>(<li key={item.id}>
                <span className="item-container" >
                    <input type="checkbox" onClick={()=>updateMarkdone(item.id)}/>
                    <span style={
                        item.isDone==true?{
                        textDecorationLine:"line-through",
                        }:{
                        textDecorationLine:"none",
                        }}>
                            {item.todo}
                    </span> 
                    <i className="fa-solid fa-delete-left" onClick={()=>{deleteItem(item.id)}}></i>

                </span>
                </li>))}
        </ul>
        <hr />
        </>
    );
}