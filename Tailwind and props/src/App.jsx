import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    name : "saurav",
    age : "21"
  }
  return (
    <>
      <h1 className='bg-green-400 rounded-xl mb-4' >start</h1>
      <Card username = "shene" obj = {obj}/>
      <Card username = "delba"  obj = {obj} />

    </>
  )
}

export default App
