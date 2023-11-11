import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Commerce } from './components/commerce/Commerce.jsx'
import { Centers } from './components/centers/Centers.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/commerces',
    element: <Commerce/>
  },
  {
    path: '/map',
    element: <Centers/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
