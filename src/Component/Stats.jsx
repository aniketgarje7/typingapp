import React from 'react'
import Graph from './Graph'



const Stats = ({wpm,accuracy,graph,retake}) => {
 

  
  return (
    <div>
        <h1>{wpm()}</h1>
        <h1>{!Number.isNaN(accuracy()) && accuracy().toFixed(1)+'%'}</h1>
        <Graph graph={graph}/>
        <button onClick={()=>retake()}>Restake</button>
       
    </div>
  )
}

export default Stats