import React from 'react'
import { GetTestContext } from './Context/Testime'
import { Button } from '@mui/material'

const Time = () => {
 const {setTestTime} = GetTestContext()
  return (
    <div>
        <Button variant='contained' sx={{m:1,borderRadius:'10px'}} onClick={()=>setTestTime(15)}>15 seconds</Button>
        <Button variant='contained' sx={{m:1,borderRadius:'10px'}} onClick={()=>setTestTime(30)}>30 seconds</Button>
        <Button variant='contained' sx={{m:1,borderRadius:'10px'}} onClick={()=>setTestTime(60)}>1 minute</Button>
    </div>
  )
}

export default Time