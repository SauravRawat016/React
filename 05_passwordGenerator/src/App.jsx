import { useState , useCallback, useEffect } from 'react'


function App() {
  const [length,setLength] = useState(8) ;
  const [numAllowed , setNumAllowed] = useState(false) ;
  const [charAllowed , setCharAllowed] = useState(false) ;
  const [password , setPassword] = useState('' );

  const passwordGenerator = useCallback(() => {
    let pass = "" ;
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" ;

    if(numAllowed) str += "0123456789" ;
    if(charAllowed) str += "!@#$%^&*" ;

    for( let i = 0 ; i < length ; i++){
      let char = str[Math.floor(Math.random() * str.length  )] ;
      pass += char ;
    }

    setPassword(pass) ;

  } , 
    [length , numAllowed , charAllowed]) ;

  const copy = useCallback(()=>{
    window.navigator.clipboard.writeText(password) ;
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <h1 className='text-4xl text-center my-5'>
        Password Generator
      </h1>
      <div className='mx-auto px-4 py-6 max-w-md bg-gray-300 rounded-lg'>


        <div className='flex py-2 px-2 mx-2 my-2'>

          <input className='px-3 mx-3 my-2 py-2 ' 
          type="text" 
          value={password} 
          placeholder='password'
          />
          
          <button onClick={copy} type="button" className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 font-small rounded-lg text-sm px-5 me-1 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">COPY</button>
        
        </div>


        <div className='py-2 px-2 mx-2 my-2'>

          <input className='cursor-pointer mx-3  ' 
          type="range" 
          min={6}
          max={30}
          value={length}
          onChange={(e)=>{setLength(e.target.value)}}
          />

          <label> Length {length}</label>

        </div>


        <div className='py-2 px-2 mx-2 my-2'>

          <input className='mx-3'
          type="checkbox" 
          defaultChecked = {numAllowed}
          id='numbers'
          onChange={()=>{
            setNumAllowed((prev)=>!prev) ;
          }}
          />

          <label htmlFor='numbers'> Numbers </label>

        </div>


        <div className='py-2 px-2 mx-2 my-2'>

          <input className='mx-3'
          type="checkbox" 
          defaultChecked = {charAllowed}
          id='chars'
          onChange={()=>{
            setCharAllowed((prev)=>!prev) ;
          }}
          />

          <label htmlFor='chars'> Special Characters </label>

        </div>

        
      </div>
    </>
  )
}

export default App
