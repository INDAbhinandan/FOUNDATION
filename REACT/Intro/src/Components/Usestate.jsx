import React from 'react'
import { useState } from 'react'

const Usestate = () => {
    const [color,setColor]=useState("Blue")
  return (
    <div>
        <button type='button' onClick={()=>setColor('Orange')}>
            changeColor
        </button>
<h1>My favourite Color is: {color}</h1>
    </div>
  )
}

export default Usestate