import '.././app.css'
import Stats from './Stats';
import Time from './Time'
import { useEffect, useState, useRef, createRef} from "react";
import { GetTestContext } from './Context/Testime';
import {Box, Typography} from '@mui/material'
var randomWords = require('random-words')


const TextBox = () => {
  const {testTime} = GetTestContext()  //context state
  
  const [word, setWord] = useState([])
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [start, setStart] = useState(false)
  const [count, setCount] = useState(0)
  const [typedChar, setTypedChar] = useState(0)
  const [correctWord, setCorrectWord] = useState(0)
  const [graph,setGraph] = useState([])
  const [acrcyGraph,setAcrcyGraph] = useState([])
  const [speed,setSpeed] = useState(0)
  const [testEnd,setTestEnd] = useState(false)
  const arr = [...Array(100).fill(0).map(i => createRef())]
  
  //   useEffects
  useEffect(() => {
    setWord(randomWords(100))
    focusInf()
  },[])

  useEffect(() => {

    if (charIndex === 0 && arr[0].current !== null) {
      const childs = arr[wordIndex].current.childNodes
      childs[0].className = 'char'
      setCharIndex(c => c + 1)
    }

  }, [arr, charIndex, wordIndex, setCharIndex])

  // focus on input
  const inf = useRef()
  const focusInf = () => {
    inf.current.focus()
  }
 
  // timer function
  const setTimer = () => {
    const interval = setInterval(timer, 1000)
    function timer() {
      setCount((prev) => {
        
        if (prev === testTime) {
         clearInterval(interval)
          setTestEnd(true)
          return 0
        }
       return prev +1
      })
     
      
    }
  }
  
  //  main function 
  const handleKeys = (e) => {

    if (!start) {
      setTimer()
      setStart(true)
    }
    const keyValue = e.key
    //    setting correct w0rds and chars
    if (word[wordIndex].length === arr[wordIndex].current.querySelectorAll('.correct').length) {
      setCorrectWord(p => p + 1)
    }


    const words = arr[wordIndex].current.childNodes

    // for space
    if (e.keyCode === 32) {
      console.log('space')
      if (charIndex >= words.length) {
        words[words.length - 1].classList.remove('right')
      }
      else {
        words[charIndex - 1].classList.remove('char')
      }
      setCharIndex(0)
      setWordIndex(c => c + 1)

      return
    }
    // for backspace
    if (e.keyCode === 8) {
      console.log('backspace')
      if (charIndex > words.length) {
        words[charIndex - 2].className = 'char'
      }
      if (charIndex > 1 && charIndex <= words.length) {
        words[charIndex - 1].classList.remove('char')
        words[charIndex - 2].className = 'char'
      }
      console.log(charIndex)
      setCharIndex(c => c - 1)

      return
    }
    if (words.length >= charIndex) {
      words[charIndex - 1].classList.remove('char')
      if (keyValue === words[charIndex - 1].innerText) {
        words[charIndex - 1].className = words.length === charIndex ? 'right correct' : 'correct'
        if (words.length > charIndex) {
          words[charIndex].className = 'char'
        }
      }
      else {
        if (words.length > charIndex) {
          words[charIndex].className = 'char'
        }
        words[charIndex - 1].className = words.length === charIndex ? 'right incorrect' : 'incorrect'
        console.log('kaise')
      }
     
      // console.log(words[charIndex].classList)
      setTypedChar(t => t + 1)
      setCharIndex(c => c + 1)
    }
  }
 
  // function for counting wpm
  const WPM = () => {
    return speed===0?0:Math.floor((typedChar / 5)/(speed/60))
  }

  // funcion for counting accuracy
  const accuracy = () => {
    let accuracy =  (correctWord / wordIndex) * 100
    return !Number.isNaN(accuracy)?accuracy.toFixed(1):0
  }
  
  // creating graph of time vs speed
  if(count>speed)
  {
    setSpeed(prev=>prev+1)
    setGraph((prevd)=>[...prevd,[(speed),WPM()]])
    setAcrcyGraph((prev)=>[...prev,[(speed),accuracy()]])
  }

//  retake the test
const retake = ()=>{
  setCount(0)
  setCharIndex(0)
  setWordIndex(0)
  setGraph([])
  setAcrcyGraph([])
  setCorrectWord(0)
  setStart(false)
  setTypedChar(0)
  setSpeed(0)
  setTestEnd(false)
}
console.log('working')
  return (
    <>
   
    <div>{testEnd ? <Stats wpm={WPM} accuracy={accuracy} graph={graph} retake={retake} acrcyGraph={acrcyGraph}/> :
      <Box className="App" onClick={()=>inf.current.focus()}>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Time/>
        <Box sx={{display:'flex', justifyContent:'space-between',width:'30%'}}>
        <Typography>Time : {testTime-count}</Typography>
          <Typography>WPM : { WPM()}</Typography>
          <Typography>Accuracy : {accuracy() + '%'}</Typography>
       
        </Box>
        </Box>
        <input onKeyDown={handleKeys} ref={inf} style={{opacity:'0'}}/>
        <div className='words' >
          {word.map((single, i) => <span className='word' ref={arr[i]} key={i}>
            {single.split('').map((s, i) => <span key={i}>{s}</span>)}</span>)}</div>

      </Box>}
    </div>
    </>
  )
}

export default TextBox