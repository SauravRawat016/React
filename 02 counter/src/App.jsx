import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(0)

 // let counter = 0 ; 
  const add = () =>{
    setCount(counter + 1) ;
  } 
  const sub = () =>{
    if(counter>0)setCount(counter - 1);
  } 
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={add}> + </button>
      <button onClick={sub}> - </button>
    </>
  )
}

export default App
