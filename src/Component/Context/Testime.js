import React from 'react'
import { useContext,createContext,useState } from 'react'

const testContext = createContext()
const Testime = ({children}) => {
    const [testTime,setTestTime] = useState(60)
  return (
    <testContext.Provider value={{testTime,setTestTime}}>
    {children}
    </testContext.Provider>
  )
}
export const GetTestContext = ()=>{
    return useContext(testContext)
}
export default Testime