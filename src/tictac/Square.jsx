import React from 'react'

export default function sqaure(props) {
  return (
    <div onClick={props.onClick}
    className='sqr'style={{border:"1px solid black",height: "100px", width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <h4>{props.value}</h4>
    </div>
  )
}
