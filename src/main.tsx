import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

// rotas
import Signin from './routes/Signin.tsx'
import Profile from './routes/Profile.tsx'
import Home from './routes/Home.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Signin />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
