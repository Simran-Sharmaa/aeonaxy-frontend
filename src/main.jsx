import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Register from './components/Register.jsx'
import ParentComp from './components/ParentComp.jsx'

const routes = createBrowserRouter(createRoutesFromElements(
  <>
     <Route path="/sign-up" element={<Register/>}/>
     <Route path='/get-started'element={<ParentComp/>}/>
  <Route path="/" element={<App/>}>
  </Route>
  </>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
