import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './index.css'
import Layout from './Layout'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import User from './components/user/User'
import Github from './components/github/Github'
const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
          path : "",
          element : <Home/>
      },
      {
          path : "about" ,
          element : <About/>
      },
      {
        path : "contact" ,
        element : <Contact/>
      },
      {
        path : "user/:userId",
        element : <User/>
      },
      {
        path : "github",
        element : <Github/>
      }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
