import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Inicio from "./components/Inicio.jsx"
import "bootswatch/dist/minty/bootstrap.min.css";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
{
  path: '/Inicio',
  element: <Inicio />,
},

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>

)
