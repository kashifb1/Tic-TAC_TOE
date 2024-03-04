import React, { useState } from 'react'
import Square from './Square'

export default function(props) {
    const [state,setState]=useState(Array(9).fill(null))
    const [isXturn,setXturn]=useState(true)
    console.log(state)

    

const checkresult=()=>{

const poss=[

[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],


]
for(let logic of poss){
  const [a,b,c]=logic;
  if( state[a]!==null && state[a]=== state[b]&& state[a]===state[c])
  return state[a]
}

return true;


}
const iswinner=checkresult();





    const handleClick=(ind)=>{
      if(state[ind]!==null){
        return;
      }
        const copystate=[...state];
        copystate[ind]=isXturn?"x":"0"
        setState(copystate);
        console.log(state)
        setXturn(!isXturn);

    }


    const handlereset =()=>{
      console.log('cliked')
      setState(Array(9).fill(null))

    }
  return (
    <div className='board-container'>
      
      <h2>{isXturn?'x':'o'}please move{isXturn}</h2>
      {iswinner?(
        <h2>{iswinner} won the game <button onClick={handlereset}>let play agai</button></h2>
      ):(
        <>
    <div className="boardrow">
        <Square onClick={()=>handleClick(0)} value={state[0]}/>
        <Square  onClick={()=>handleClick(1)} value={state[1]}/>
        <Square onClick={()=>handleClick(2)} value={state[2]}/>

    </div>
    <div className="boardrow">
        <Square onClick={()=>handleClick(3)} value={state[3]}/>
        <Square onClick={()=>handleClick(4)} value={state[4]}/>
    <Square onClick={()=>handleClick(5)} value={state[5]}/>

    </div>
    <div className="boardrow">
    <Square  onClick={()=>handleClick(6)}value={state[6]}/>
    <Square onClick={()=>handleClick(7)} value={state[7]}/>
    <Square onClick={()=>handleClick(8)} value={state[8]}/>

    </div>
</>)}
    </div>
  )
}
