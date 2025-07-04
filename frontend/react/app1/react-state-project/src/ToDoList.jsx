import {useState} from 'react';
import {v4 as uuidv4} from "uuid"
import './ToDo.css'

export default function ToDoList(){
    let [todos,setTodos]=useState([{todo:"sam",id:uuidv4()}]);
    let [items,setItems]=useState("");

    function addToDo(){
        if(items!=""){
            setTodos((prevtodo)=>([...prevtodo, {todo:items, id:uuidv4()}]))
            setItems("")
        }else(
            alert("enter todo")
        ) 
    }
    function addItem(event){
        setItems(event.target.value)
    }
    function deleteItem(id){
        let newData=todos.filter((item)=>(item.id!=id))
        setTodos([...newData])
    }
    return(
        <>
        <div>
            <input type="text" value={items} onChange={addItem} id="todo-item" placeholder="Enter ToDo item"/>
            <button onClick={addToDo}>Add</button>
            <br />
            <br />
            <hr />
            <h3>Tasks ToDo</h3>
            <ul>
            {todos.map((item)=>(<li key={item.id}>
                <span className="item-container" >
                    <span>{item.todo}</span> 
                    <i className="fa-solid fa-delete-left" onClick={()=>{deleteItem(item.id)}}></i>
                </span>
                </li>))}
            </ul>
        </div>
        </>);
}