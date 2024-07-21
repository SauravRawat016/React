import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './index.css'
import Layout from './Layout'
import Home from './components/home/Home'
import About from './components/about/About'
import User from './components/user/User'
import Github from './components/github/Github'
import Articles from './components/article/Articles'
import Latest from './components/latest/Latest'

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
          path : "article",
          element : <Articles/>
      },
      {
        path : "latest" ,
        element : <Latest/>
      },
      {
          path : "about" ,
          element : <About/>
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
