import {useState, useEffect } from 'react'

export default function counter(){
    let [count, setCount]=useState(0);
    useEffect(()=>{
        console.log("inc.")
    })
    return(<>
    <h2 >count: {count}</h2>
    <button onClick={()=>{setCount(count+=1)}}>Count++</button>
    </>)
}