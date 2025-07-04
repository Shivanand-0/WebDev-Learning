import {useState} from 'react'
import './Like-Btn.css'


export default function LikeBtn(){
    let [count,setCount]=useState(0)
    return(
        <>
        <h2>Like Please </h2>
            <i class="fa-solid fa-heart" 
            onClick={()=>{
            count==0?setCount(1):setCount(0)
            }}
            style={count==0?{color: "black"}:{color:"red"}}
         ></i>
        </>
    )
}