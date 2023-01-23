import './app.css'
import { useEffect, useState,useRef ,createRef} from "react";
var randomWords  = require('random-words')

function App() {

  const [word,setWord] = useState([])
  const [wordIndex,setWordIndex] = useState(0)
  const [charIndex,setCharIndex] = useState(0)
  const [start,setStart] = useState(false)
  const [count,setCount] = useState(60)
  const [result,setResult] = useState(false)
 console.log(wordIndex)
  const setTimer = ()=>{
     const interval = setInterval(timer,100)
     function timer(){
      setCount((prev)=>{
        if(prev===1){
          clearInterval(interval)
          
          return "THE END"
        }
        
        return prev-1
      })
     }
  }
  const arr = [...Array(50).fill(0).map(i=>createRef())]
  useEffect(()=>{
     setWord(randomWords(50))
    
      
    
        console.log('working')
       focusInf()
        // const childs = arr[0].current.childNodes
        console.log(arr[0])
        // childs[0].className = 'char'
       
      
  },[])
  useEffect(()=>{
    console.log('useeff')
    if(charIndex===0 &&  arr[0].current!==null){
      const childs = arr[wordIndex].current.childNodes
      childs[0].className = 'char'
      setCharIndex(c=>c+1)
    }
    console.log(charIndex)
  })

// fucntion main
 const handleKeys = (e)=>{
  setResult(wordIndex+1)
  if(!start){
     setTimer()
     setStart(true)
  }
  const keyValue = e.key
  console.log(keyValue,charIndex)
  console.log(charIndex)
  const words = arr[wordIndex].current.childNodes
  
  // for space
  if(e.keyCode==32){
    console.log('space')
    if(charIndex>=words.length){
      words[words.length-1].classList.remove('right')
    }
    else{
      words[charIndex-1].classList.remove('char')
    }
    setCharIndex(0)
    setWordIndex(c=>c+1)
    
    return 
  }
  // for backspace
  if(e.keyCode==8){
    console.log('backspace')
    if(charIndex>words.length){
      words[charIndex-2].className= 'char'
    }
    if(charIndex>1 && charIndex<=words.length){
      words[charIndex-1].classList.remove('char')
      words[charIndex-2].className = 'char'
    }
    console.log(charIndex)
     setCharIndex(c=>c-1)
    
    return
  }
  if(words.length>=charIndex){
  words[charIndex-1].classList.remove('char')
  if(keyValue===words[charIndex-1].innerText){
    words[charIndex-1].className=words.length==charIndex?'right correct':'correct'
    if(words.length>charIndex){
      words[charIndex].className='char'
    }
  }
  else{
    if(words.length>charIndex){
    words[charIndex].className = 'char'
    }
    words[charIndex-1].className=words.length==charIndex?'right incorrect':'incorrect'
    console.log('kaise')
  }
 
  // console.log(words[charIndex].classList)
  
  setCharIndex(c=>c+1)}
 }

  const inf = useRef()
  const focusInf = ()=>{
    inf.current.focus()
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <h2>{result}</h2>
        <input onKeyDown={handleKeys} ref={inf}/>
      
        <div className='words'>{word.map((single,i)=><span className='word' ref={arr[i]}>{single.split('').map(s=><span>{s}</span>)}</span>)}</div>
       
    </div>
  );
}

export default App;
