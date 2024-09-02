import { useEffect, useState } from 'react'
import axios from "axios" ;
import './App.css'

function App() {
  const [Jokes, setJokes] = useState([]) ;

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res) => setJokes(res.data) )
    .catch((err) => console.log(err)) ;
  }) ;

  return (
    <>
      <h1>Jokes</h1>
      <div>
            {Jokes.map(joke => (
                <div key={joke.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
                    <h3>{joke.title}</h3>
                    <p>{joke.content}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default App
