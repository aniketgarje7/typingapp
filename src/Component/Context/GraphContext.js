import React from 'react'
import { useContext,createContext,useState } from 'react'

const GraphD = createContext()

const GraphContext = ({children}) => {
const [wpmd,setWpm] = useState(0)
const [accuracy,setAccuracy] = useState(0)
const [graphData,setGraphData] = useState([[0,0]])

    
 return (
    <GraphD.Provider value={{wpmd,setWpm}}>
        {children}
    </GraphD.Provider>
  )
}
export const GetGraphContext  = ()=>{
    return useContext(GraphD)
}
export default GraphContext