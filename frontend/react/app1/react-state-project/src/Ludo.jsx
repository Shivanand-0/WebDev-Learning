import {useState} from 'react'  

export default function Ludo(){
    let[moves,setMove]=useState({red:0,green:0,blue:0,yellow:0})
    function updateRed(){
        // setMove((premove)=>({...premove, red: premove.red+1}));
        moves.red+=1;
        let newmove={...moves};
        setMove(newmove)
    }
    function updateGreen(){
        setMove((premove)=>({...premove, green: premove.green+1}));
    }
    function updateBlue(){
        setMove((premove)=>({...premove, blue: premove.blue+1}));
    }
    function updateYellow(){
        setMove((premove)=>({...premove, yellow: premove.yellow+1}));   
    }
    return(
        <>
       
            <h3>Ludo game</h3>
            <p>Red {moves.red}</p>
            <button style={{backgroundColor:'red',color:"black"}} onClick={updateRed}>+1</button>
            <p>Green {moves.green}</p>
            <button style={{backgroundColor:'green',color:"black"}} onClick={updateGreen}>+1</button>
            <p>Blue {moves.blue}</p>
            <button style={{backgroundColor:'blue',color:"white"}} onClick={updateBlue}>+1</button>
            <p>Yellow {moves.yellow}</p>
            <button style={{backgroundColor:'yellow',color:"black"}} onClick={updateYellow}>+1</button>
        </>
    );
}