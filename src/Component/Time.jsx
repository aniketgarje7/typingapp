import React from 'react'
import { GetTestContext } from './Context/Testime'
const Time = () => {
 const {setTestTime} = GetTestContext()
  return (
    <div>
        <button onClick={()=>setTestTime(15)}>15 seconds</button>
        <button onClick={()=>setTestTime(30)}>30 seconds</button>
        <button onClick={()=>setTestTime(60)}>1 minute</button>
    </div>
  )
}

export default Time