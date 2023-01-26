import React from 'react'
import TextBox from './Component/TextBox'
import Time from './Component/Time'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
     <>
     <Time/>
     <TextBox/>
     </>
  )
}

export default App